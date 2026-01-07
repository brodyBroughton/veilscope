'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { UpdatePublic, UpdatesUiState, UpdateSort } from '@/types/updates';
import {
  buildQueryString,
  buildUpdateHref,
  filterBySearch,
  filterByTag,
  sortUpdates,
  splitExt,
  uniqueTags,
} from '@/lib/updates-helpers';

type Props = {
  initialUpdates: UpdatePublic[];
};

function looksLikeBaseImagePath(src: string) {
  // Your naming assumes DB stores the "base" image (no -600/-1200 suffix).
  // We won't mutate it, just a sanity helper if you ever want to warn/log.
  return !/-(600|1200)\.(jpg|jpeg|png|webp|avif)$/i.test(src);
}

function UpdateCardPicture({ src, alt }: { src: string; alt: string }) {
  const { base } = splitExt(src);
  const sizes = '(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <picture>
      <source type="image/avif" srcSet={`${base}-600.avif 600w, ${base}-1200.avif 1200w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}-600.webp 600w, ${base}-1200.webp 1200w`} sizes={sizes} />
      <img
        src={src}
        srcSet={`${base}-600.jpg 600w, ${base}-1200.jpg 1200w`}
        sizes={sizes}
        width={1200}
        height={675}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          // mimic old JS: hide broken images + mark wrapper empty for CSS
          const img = e.currentTarget;
          img.style.display = 'none';
          const media = img.closest('.update-media');
          media?.classList.add('is-empty');
        }}
      />
    </picture>
  );
}

export default function UpdatesClient({ initialUpdates }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build initial state from URL (only used to seed the first render)
  const initialState: UpdatesUiState = useMemo(() => {
    const q = searchParams.get('q') ?? '';
    const tag = searchParams.get('tag') ?? 'All';
    const sort = (searchParams.get('sort') as UpdateSort) ?? 'featured';
    return { q, tag, sort: sort || 'featured' };
  }, [searchParams]);

  // Input value is separate so typing doesn’t feel “fight-y”
  const [qInput, setQInput] = useState(initialState.q);
  const [tag, setTag] = useState(initialState.tag);
  const [sort, setSort] = useState<UpdateSort>(initialState.sort);

  const state: UpdatesUiState = useMemo(
    () => ({ q: qInput.trim(), tag, sort }),
    [qInput, tag, sort]
  );

  const gridRef = useRef<HTMLDivElement | null>(null);

  const allUpdates = useMemo(
    () => initialUpdates.filter((u) => u.published),
    [initialUpdates]
  );

  const tags = useMemo(() => uniqueTags(allUpdates), [allUpdates]);

  const filteredSorted = useMemo(() => {
    let items = filterBySearch(allUpdates, state.q);
    items = filterByTag(items, state.tag);
    return sortUpdates(items, state.sort);
  }, [allUpdates, state.q, state.tag, state.sort]);

  // Keep URL in sync with state (like history.replaceState in your old JS)
  useEffect(() => {
    const nextQs = buildQueryString(state);
    const current = searchParams.toString();
    const next = nextQs.startsWith('?') ? nextQs.slice(1) : nextQs;

    if (current === next) return;
    router.replace(`${pathname}${nextQs}`, { scroll: false }); // keep scroll position :contentReference[oaicite:2]{index=2}
  }, [router, pathname, searchParams, state]);

  // Toggle helper class used by your existing CSS
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (state.sort === 'featured') {
      const featuredCount = filteredSorted.filter((u) => u.featured === true).length;
      grid.classList.toggle('has-two-featured', featuredCount === 2);
    } else {
      grid.classList.remove('has-two-featured');
    }
  }, [filteredSorted, state.sort]);

  return (
    <main id="main" className="pt-[76px]">
      {/* Page hero */}
      <section className="updates-hero" aria-labelledby="updates-title">
        <div className="updates-wrap">
          <h1 id="updates-title">Project Updates</h1>
          <p>Release notes, model improvements, and product changes from the Veilscope team.</p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="updates-toolbar" role="region" aria-label="Updates filters">
        <div className="search">
          <label className="sr-only" htmlFor="updates-search">
            Search updates
          </label>
          <input
            id="updates-search"
            type="search"
            placeholder="Search updates…"
            autoComplete="off"
            value={qInput}
            onChange={(e) => setQInput(e.target.value)}
          />
        </div>

        <div className="chips">
          {tags.map((t) => {
            const active = t === tag;
            return (
              <button
                key={t}
                type="button"
                className="chip"
                data-tag={t}
                aria-pressed={active}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="sort">
          <label htmlFor="sort-select">Sort</label>
          <select
            id="sort-select"
            name="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as UpdateSort)}
          >
            <option value="featured">Featured</option>
            <option value="date_desc">Newest first</option>
            <option value="date_asc">Oldest first</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <section className="updates-section" aria-labelledby="updates-grid-title">
        <div className="updates-wrap">
          <h2 id="updates-grid-title" className="sr-only">
            Latest updates
          </h2>

          <div ref={gridRef} className="updates-grid">
            {filteredSorted.length === 0 ? (
              <p>Nothing matched your filters.</p>
            ) : (
              filteredSorted.map((u) => {
                // No slug fallback anymore — schema guarantees it
                const href = buildUpdateHref(u.slug, state);
                const showFeatured = state.sort === 'featured' && u.featured === true;
                const dateStr = u.date ? new Date(u.date).toLocaleDateString() : '';

                return (
                  <article
                    key={u.slug}
                    className={`update-card ${showFeatured ? 'update-card--featured' : ''}`}
                  >
                    <Link className="update-card-link" href={href} aria-label={`Read more about ${u.title}`}>
                      <div className={`update-media ${u.image ? '' : 'is-empty'}`}>
                        {showFeatured ? <span className="badge badge-featured">Featured</span> : null}

                        {u.image ? (
                          <UpdateCardPicture
                            src={u.image}
                            alt={u.imageAlt || ''}
                          />
                        ) : (
                          <div className="is-empty" aria-hidden="true" />
                        )}
                      </div>

                      <div className="update-body">
                        <div className="update-meta">
                          <time dateTime={u.date}>{dateStr}</time>
                          <div className="update-tags">
                            {(u.tags ?? []).map((t) => (
                              <span key={`${u.slug}-${t}`} className="update-tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="update-title">{u.title}</h3>
                        <p className="update-summary">{u.summary}</p>

                        <div className="update-actions">
                          <span className="read-more">Read more →</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
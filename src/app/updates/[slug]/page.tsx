import Link from 'next/link';
import { getUpdatesApiUrl, unwrapUpdatesResponse, parseUpdateDate, buildBackToUpdatesHref, splitExt } from '@/lib/updates-helpers';
import type { UpdatesApiResponse, UpdatePublic } from '@/types/updates';

function isProbablyHtml(input: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(input);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function HeroPicture({ src, alt }: { src: string; alt: string }) {
  const { base } = splitExt(src);
  const sizes = '(max-width: 720px) 100vw, 1200px';

  return (
    <picture>
      <source type="image/avif" srcSet={`${base}-1200.avif 1200w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}-1200.webp 1200w`} sizes={sizes} />
      <img
        id="update-image"
        src={src}
        srcSet={`${base}-1200.jpg 1200w`}
        sizes={sizes}
        width={1200}
        height={675}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

type PageProps = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function UpdatePage({ params, searchParams }: PageProps) {
  const backHref = buildBackToUpdatesHref(searchParams);

  let updates: UpdatePublic[] = [];
  try {
    const res = await fetch(getUpdatesApiUrl(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const json = (await res.json()) as UpdatesApiResponse;
    updates = unwrapUpdatesResponse(json).filter((u) => u.published);
  } catch {
    updates = [];
  }

  const current = updates.find((u) => u.slug === params.slug) ?? null;

  if (!current) {
    return (
      <main id="main" className="pt-[76px]">
        <section className="update-hero">
          <div className="update-wrap">
            <nav aria-label="Breadcrumb" className="crumbs">
              <Link className="crumb-back" href={backHref}>
                ← Back to Updates
              </Link>
            </nav>

            <div className="update-header">
              <h1 id="update-title">Update not found</h1>
            </div>
          </div>
        </section>

        <section className="update-body-section">
          <div className="update-wrap">
            <article id="update-article" className="prose">
              <p>
                We couldn’t find that update. <Link href={backHref}>Back to Updates</Link>.
              </p>
            </article>
          </div>
        </section>
      </main>
    );
  }

  // pager: newest-first by date
  const byNewest = [...updates].sort((a, b) => parseUpdateDate(b.date) - parseUpdateDate(a.date));
  const idx = byNewest.findIndex((u) => u.slug === current.slug);
  const prev = idx >= 0 ? byNewest[idx + 1] : undefined;
  const next = idx >= 0 ? byNewest[idx - 1] : undefined;

  const featured = current.featured === true;
  const dateStr = current.date ? new Date(current.date).toLocaleDateString() : '';

  const content = current.content || current.summary;
  const renderHtml = isProbablyHtml(content);

  return (
    <main id="main" className="pt-[76px]">
      <section className="update-hero" aria-labelledby="update-title">
        <div className="update-wrap">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link className="crumb-back" id="back-link" href={backHref}>
              ← Back to Updates
            </Link>
          </nav>

          <div className="update-header">
            <h1 id="update-title">{current.title}</h1>

            <div className="update-meta-row">
              <time id="update-date" dateTime={current.date}>
                {dateStr}
              </time>

              <div id="update-tags" className="update-tags">
                {(current.tags ?? []).map((t) => (
                  <span key={`${current.slug}-${t}`} className="update-tag">
                    {t}
                  </span>
                ))}
              </div>

              <span id="update-badge" className="badge badge-featured" hidden={!featured}>
                Featured
              </span>
            </div>
          </div>
        </div>

        <figure className="hero-figure">
          {current.image ? <HeroPicture src={current.image} alt={current.imageAlt || ''} /> : null}
          <figcaption id="update-image-alt" className="sr-only">
            {current.imageAlt || ''}
          </figcaption>
        </figure>
      </section>

      <section className="update-body-section">
        <div className="update-wrap">
          <article id="update-article" className="prose">
            {renderHtml ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p>{content}</p>
            )}
          </article>

          <hr className="update-divider" />

          <nav className="update-pager" aria-label="More updates">
            {prev ? (
              <Link className="pager-link" id="prev-update" href={`/updates/${encodeURIComponent(prev.slug)}${new URL(backHref, 'https://x').search}`}>
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link className="pager-link" id="next-update" href={`/updates/${encodeURIComponent(next.slug)}${new URL(backHref, 'https://x').search}`}>
                {next.title} →
              </Link>
            ) : null}
          </nav>
        </div>
      </section>
    </main>
  );
}

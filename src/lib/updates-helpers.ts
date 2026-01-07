import type { UpdatePublic, UpdatesApiResponse, UpdatesUiState } from '@/types/updates';

export function getUpdatesApiUrl(): string {
  // Prefer an env var for local dev flexibility:
  // NEXT_PUBLIC_UPDATES_API_URL="http://localhost:3001/api/public/updates"
  return process.env.NEXT_PUBLIC_UPDATES_API_URL ?? 'https://app.veilscope.com/api/public/updates';
}

export function unwrapUpdatesResponse(json: UpdatesApiResponse): UpdatePublic[] {
  return Array.isArray(json) ? json : json.updates ?? [];
}

export function parseUpdateDate(iso: string): number {
  const t = Date.parse(iso);
  return Number.isFinite(t) ? t : 0;
}

export function uniqueTags(updates: UpdatePublic[]): string[] {
  const set = new Set<string>();
  for (const u of updates) for (const t of u.tags ?? []) set.add(t);
  return ['All', ...Array.from(set)];
}

export function filterBySearch(items: UpdatePublic[], qRaw: string): UpdatePublic[] {
  const q = qRaw.trim().toLowerCase();
  if (!q) return items;

  return items.filter((u) => {
    const hay = [u.title, u.summary, ...(u.tags ?? [])].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

export function filterByTag(items: UpdatePublic[], tag: string): UpdatePublic[] {
  if (!tag || tag === 'All') return items;
  return items.filter((u) => (u.tags ?? []).includes(tag));
}

export function sortUpdates(items: UpdatePublic[], mode: UpdatesUiState['sort']): UpdatePublic[] {
  const byNewest = (a: UpdatePublic, b: UpdatePublic) => parseUpdateDate(b.date) - parseUpdateDate(a.date);
  const byOldest = (a: UpdatePublic, b: UpdatePublic) => parseUpdateDate(a.date) - parseUpdateDate(b.date);

  if (mode === 'date_desc') return [...items].sort(byNewest);
  if (mode === 'date_asc') return [...items].sort(byOldest);

  // featured: featured first, newest-first within groups
  const featured = items.filter((u) => u.featured === true).sort(byNewest);
  const rest = items.filter((u) => !u.featured).sort(byNewest);
  return [...featured, ...rest];
}

export function buildQueryString(state: UpdatesUiState): string {
  const p = new URLSearchParams();
  if (state.sort && state.sort !== 'featured') p.set('sort', state.sort);
  if (state.tag && state.tag !== 'All') p.set('tag', state.tag);
  if (state.q && state.q.trim()) p.set('q', state.q.trim());
  const s = p.toString();
  return s ? `?${s}` : '';
}

export function buildUpdateHref(slug: string, state: UpdatesUiState): string {
  const qs = buildQueryString(state);
  return `/updates/${encodeURIComponent(slug)}${qs}`;
}

export function buildBackToUpdatesHref(searchParams: Record<string, string | string[] | undefined>): string {
  const p = new URLSearchParams();
  for (const k of ['sort', 'tag', 'q']) {
    const v = searchParams[k];
    if (typeof v === 'string' && v) p.set(k, v);
  }
  const s = p.toString();
  return s ? `/updates?${s}` : '/updates';
}

export function splitExt(path: string): { base: string; ext: string } {
  const m = path.match(/^(.*)\.([a-z0-9]+)$/i);
  return m ? { base: m[1], ext: m[2].toLowerCase() } : { base: path, ext: '' };
}
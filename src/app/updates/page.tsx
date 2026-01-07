import UpdatesClient from './UpdatesClient';
import { getUpdatesApiUrl, unwrapUpdatesResponse } from '@/lib/updates-helpers';
import type { UpdatePublic, UpdatesApiResponse } from '@/types/updates';

export default async function UpdatesPage() {
  let updates: UpdatePublic[] = [];

  try {
    const res = await fetch(getUpdatesApiUrl(), {
      // choose one strategy:
      // cache: 'no-store', // always fresh
      next: { revalidate: 60 }, // refresh at most once/minute
    });

    if (!res.ok) throw new Error(`Failed to fetch updates: ${res.status}`);

    const json = (await res.json()) as UpdatesApiResponse;
    updates = unwrapUpdatesResponse(json).filter((u) => u.published);
  } catch {
    updates = [];
  }

  return <UpdatesClient initialUpdates={updates} />;
}

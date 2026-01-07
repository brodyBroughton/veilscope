export type UpdateSort = 'featured' | 'date_desc' | 'date_asc';

export type UpdatesUiState = {
  q: string;
  tag: string;
  sort: UpdateSort;
};

export type UpdatePublic = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO string
  image: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
  content: string; 
  published: boolean;
};

// API return either an array or { updates: [...] }
export type UpdatesApiResponse = UpdatePublic[] | { updates: UpdatePublic[] };

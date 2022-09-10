import sanityClient from '@sanity/client';
import type { Page } from 'types/sanity';

const sanityConfig = {
  projectId: import.meta.env.SANITY_PROJECT_ID || '8h68qv9e',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2022-09-06',
};

const client = sanityClient(sanityConfig);

export function getPages(): Promise<Page[] | null> {
  return client.fetch(`*[_type == "page"] { title, slug }`);
}

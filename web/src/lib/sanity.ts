import PicoSanity from 'picosanity';
import type { Page } from 'types/sanity';

const sanityConfig = {
  projectId: '7veh4wq9',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2022-09-06',
};

const client = new PicoSanity(sanityConfig);

export function getPages() {
  return client.fetch<Page[] | null>(`*[_type == "page"] { title, slug, content }`);
}

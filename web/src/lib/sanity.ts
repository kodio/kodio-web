import PicoSanity from 'picosanity';
import groq from 'groq';
import type { Page } from 'types/sanity';

const sanityConfig = {
  projectId: '7veh4wq9',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2022-09-06',
};

const client = new PicoSanity(sanityConfig);

export function getPages() {
  return client.fetch<Page[] | null>(pageQuery);
}

const pageQuery = groq`
*[_type == "page"] {
  title,
  slug,
  content[] {
    ...,
    markDefs[] {
      ...,
      _type == "blockContentInternalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

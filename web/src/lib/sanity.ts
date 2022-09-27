import PicoSanity from 'picosanity';
import groq from 'groq';
import type { FooterConfig, MenuConfig, Page } from 'types/sanity';

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

export function getMenuConfig() {
  return client.fetch<MenuConfig | null>(menuConfigQuery);
}

export function getFooterConfig() {
  return client.fetch<FooterConfig | null>(footerConfigQuery);
}

const pageQuery = groq`
*[_type == "page"] {
  title,
  slug,
  sections[] {
    ...,
    content[] {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          _type == "blockContentInternalLink" => {
            "slug": @.reference->slug
          }
        }
      },
      items[] {
        ...,
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "blockContentInternalLink" => {
              "slug": @.reference->slug
            }
          }
        }
      }
    }
  }
}
`;

const menuConfigQuery = groq`
*[_type == 'menuConfig'][0] {
  links[] {
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    }
  }
}
`;

const footerConfigQuery = groq`
*[_type == 'footerConfig'][0] {
  links[] {
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    }
  }
}
`;

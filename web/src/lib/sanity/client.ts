import imageUrlBuilder from '@sanity/image-url';
import PicoSanity from 'picosanity';
import groq from 'groq';
import type { DefaultMetadata, FooterConfig, Image, LandingPage, MenuConfig, Page } from './types';

const sanityConfig = {
  projectId: 'bmm7n0e3',
  dataset: import.meta.env.SANITY_DATASET || 'prod',
  useCdn: false,
  apiVersion: '2022-09-06',
};

const imageBuilder = imageUrlBuilder(sanityConfig);
const client = new PicoSanity(sanityConfig);

export function urlFor<T extends Image>(image: T) {
  return imageBuilder.image(image);
}

export function getLandingPage() {
  return client.fetch<LandingPage>(landingPageQuery);
}

export function getPages() {
  return client.fetch<Page[]>(pageQuery);
}

export function getMenuConfig() {
  return client.fetch<MenuConfig>(menuConfigQuery);
}

export function getFooterConfig() {
  return client.fetch<FooterConfig>(footerConfigQuery);
}

export function getDefaultMetadata() {
  return client.fetch<DefaultMetadata>(defaultMetadataQuery);
}

const sectionsQuery = groq`
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
      accordionItems[] {
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
      },
      links[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    }
  }
`;

const landingPageQuery = groq`
*[_type == "landingPage"][0] {
  metadata,
  header {
    ...,
    links[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  ${sectionsQuery}
}
`;

const pageQuery = groq`
*[_type == "page"] {
  title,
  slug,
  metadata,
  header {
    ...,
    links[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  ${sectionsQuery}
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
  sections[] {
    ...,
    links[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

const defaultMetadataQuery = groq`
*[_type == "defaultMetadata"][0]{
  description,
  image
}
`;

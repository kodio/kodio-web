import imageUrlBuilder from '@sanity/image-url';
import PicoSanity from 'picosanity';
import groq from 'groq';
import type { FooterConfig, ImageObj, LandingPage, MenuConfig, Page } from 'types/sanity';

const sanityConfig = {
  projectId: '7veh4wq9',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2022-09-06',
};

const imageBuilder = imageUrlBuilder(sanityConfig);
const client = new PicoSanity(sanityConfig);

export function urlFor(image: ImageObj) {
  return imageBuilder.image(image);
}

export function getLandingPage() {
  return client.fetch<LandingPage>(landingPageQuery);
}

export function getPages() {
  return client.fetch<Page[] | null>(pageQuery);
}

export function getMenuConfig() {
  return client.fetch<MenuConfig | null>(menuConfigQuery);
}

export function getFooterConfig() {
  return client.fetch<FooterConfig | null>(footerConfigQuery);
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
      }
    }
  }
`;

const landingPageQuery = groq`
*[_type == "landingPage"][0] {
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

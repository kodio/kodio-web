import groq from 'groq';

function internalLinkFragment(name = 'internalLink') {
  return groq`
        _type == "${name}" => {
            "slug": @.reference->slug
        },
    `;
}

const sectionsFragment = groq`
  sections[] {
    ...,
    content[] {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          ${internalLinkFragment('blockContentInternalLink')}
        }
      },
      accordionItems[] {
        ...,
        body[] {
          ...,
          markDefs[] {
            ...,
            ${internalLinkFragment('blockContentInternalLink')}
          }
        }
      },
      links[] {
        ...,
        ${internalLinkFragment()}
      },
      bannerLinks[] {
        ...,
          links[] {
          ...,
          ${internalLinkFragment()}
        }
      }
    }
  },
`;

const pageFragment = groq`
  title,
  slug,
  metadata,
  header {
    ...,
    links[] {
      ...,
      ${internalLinkFragment()}
    }
  },
  ${sectionsFragment}
`;

export const previewPageQuery = groq`
*[_id == $id][0] {
  ${pageFragment}
}
`;

export const landingPageQuery = groq`
*[_type == "landingPage"][0] {
  metadata,
  header {
    ...,
    links[] {
      ...,
      ${internalLinkFragment()}
    }
  },
  ${sectionsFragment}
}
`;

export const pagesQuery = groq`
*[_type == "page"] {
  ${pageFragment}
}
`;

export const menuConfigQuery = groq`
*[_type == 'menuConfig'][0] {
  links[] {
    ...,
    ${internalLinkFragment()}
  }
}
`;

export const footerConfigQuery = groq`
*[_type == 'footerConfig'][0] {
  sections[] {
    ...,
    links[] {
      ...,
      ${internalLinkFragment()}
    }
  }
}
`;

export const defaultMetadataQuery = groq`
*[_type == "defaultMetadata"][0]{
  description,
  image
}
`;

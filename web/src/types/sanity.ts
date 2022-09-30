import type { ArbitraryTypedObject } from '@portabletext/types';

export interface Accordion extends ArbitraryTypedObject {
  accordionItems?: AccordionItem[];
}

export interface AccordionItem {
  title?: string;
  body?: ArbitraryTypedObject[];
}

export interface Article extends ArbitraryTypedObject {
  header?: string;
  body?: ArbitraryTypedObject[];
}

export interface DefaultMetadata {
  description: string;
  image: Image;
}

export interface ExternalLink {
  _type: 'externalLink';
  blank?: boolean;
  href: string;
  label?: string;
}

export interface FooterConfig {
  sections: FooterConfigSection[];
}

export interface FooterConfigSection {
  heading?: string;
  links: (InternalLink | ExternalLink)[];
}

export interface Header {
  color: string;
  heading: string;
  links?: (InternalLink | ExternalLink)[];
  image?: ImageObj;
}

export interface Image {
  asset?: {
    _ref?: string;
  };
}

export interface ImageObj extends Image {
  _type: 'imageObj';
  alt?: string;
}

export interface InternalLink {
  _type: 'internalLink';
  slug: Slug;
  label?: string;
}

export interface LandingPage {
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
}

export interface MenuConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface Page {
  title: string;
  slug: Slug;
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
}

export interface PageMetadata {
  description?: string;
  image?: Image;
}

export interface Section {
  _type: 'section';
  color: string;
  content?: SectionContent[];
}

type SectionContent = Accordion | Article;

export interface Slug {
  _type: 'slug';
  current: string;
}

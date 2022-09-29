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

export interface ExternalLink {
  _type: 'externalLink';
  blank?: boolean;
  href: string;
  label?: string;
}

export interface FooterConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface Header {
  color: string;
  heading: string;
  links?: (InternalLink | ExternalLink)[];
  image?: ImageObj;
}

export interface ImageObj {
  _type: 'imageObj';
  asset?: {
    _ref?: string;
  };
  alt?: string;
}

export interface InternalLink {
  _type: 'internalLink';
  slug: Slug;
  label?: string;
}

export interface LandingPage {
  header: Header;
  sections?: Section[];
}

export interface MenuConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface Page {
  title: string;
  slug: Slug;
  header: Header;
  sections?: Section[];
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

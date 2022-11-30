import type { ArbitraryTypedObject } from '@portabletext/types';

export type Accordion = ArbitraryTypedObject & {
  accordionItems?: AccordionItem[];
};

export type AccordionItem = {
  title?: string;
  body?: BlockContent;
};

export type Article = ArbitraryTypedObject & {
  body?: BlockContent;
};

export type Banner = ArbitraryTypedObject & {
  heading?: string;
  body?: BlockContent;
  image?: ImageObj;
  textPosition?: 'left' | 'right';
  links?: Link[];
  linkColor?: Color;
};

export type BannerLink = {
  title?: string;
  preHeading1?: string;
  preHeading2?: string;
  image?: Image;
  links?: Link[];
};

export type BannerLinkGroup = ArbitraryTypedObject & {
  bannerLinks?: BannerLink[];
};

export type BlockContent = ArbitraryTypedObject[];

export type BlockContentExternalLink = {
  href: string;
  blank: boolean;
};

export type BlockContentInternalLink = {
  slug: Slug;
};

export type Color =
  | 'white'
  | 'green-900'
  | 'green-800'
  | 'green-700'
  | 'orange-500'
  | 'orange-400'
  | 'orange-300'
  | 'orange-200'
  | 'purple-400'
  | 'purple-300'
  | 'purple-200'
  | 'purple-100'
  | 'yellow-200'
  | 'yellow-100'
  | 'yellow-50'
  | 'transparent';

export type DefaultMetadata = {
  description: string;
  image: Image;
};

export type EmployeeCard = {
  image: Image;
  color?: Color;
  fullName: string;
  role?: string;
  tel?: ExternalLink;
  email?: ExternalLink;
};

export type EmployeeCards = ArbitraryTypedObject & {
  cards?: EmployeeCard[];
};

export type ExternalLink = {
  _type: 'externalLink';
  blank?: boolean;
  href: string;
  label?: string;
};

export type FooterConfig = {
  sections: FooterConfigSection[];
};

export type FooterConfigSection = {
  heading?: string;
  links: Link[];
};

export type Handbook = ArbitraryTypedObject & {
  sections?: HandbookSection[];
};

export type HandbookSection = {
  heading: string;
  body: BlockContent;
};

export type Header = {
  color: Color;
  heading: string;
  preHeading?: string;
  links?: Link[];
  image?: ImageObj;
  preamble?: string;
};

export type Image = {
  asset?: {
    _ref?: string;
  };
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export type ImageObj = ArbitraryTypedObject &
  Image & {
    alt?: string;
  };

export type InternalLink = {
  _type: 'internalLink';
  slug?: Slug;
  label?: string;
};

export type Link = InternalLink | ExternalLink;

export type LandingPage = {
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
};

export type MenuConfig = {
  links: Link[];
};

export type Page = {
  title: string;
  slug: Slug;
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
};

export type PageMetadata = {
  description?: string;
  image?: Image;
};

export type Section = {
  _type: 'section';
  heading?: string;
  color: Color;
  content?: SectionContent[];
};

type SectionContent = Accordion | Article | Banner | BannerLinkGroup | EmployeeCards | Handbook;

export type Slug = {
  _type: 'slug';
  current: string;
};

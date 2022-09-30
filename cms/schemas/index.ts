import { defaultMetadata } from './documents/defaultMetadata';
import { footerConfig, footerConfigSection } from './documents/footerConfig';
import { landingPage } from './documents/landingPage';
import { menuConfig } from './documents/menuConfig';
import { page } from './documents/page';
import { accordion, accordionItem } from './objects/accordion';
import { article } from './objects/article';
import { banner } from './objects/banner';
import { blockContent } from './objects/blockContent';
import { color } from './objects/color';
import { externalLink } from './objects/externalLink';
import { header } from './objects/header';
import { imageObj } from './objects/imageObj';
import { internalLink } from './objects/internalLink';
import { pageMetadata } from './objects/pageMetadata';
import { section } from './objects/section';

export const schemaTypes = [
  /* documents */
  defaultMetadata,
  footerConfig,
  footerConfigSection,
  landingPage,
  menuConfig,
  page,

  /* objects */
  accordion,
  accordionItem,
  article,
  banner,
  blockContent,
  color,
  externalLink,
  header,
  imageObj,
  internalLink,
  pageMetadata,
  section,
];

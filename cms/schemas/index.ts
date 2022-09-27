import { footerConfig } from './documents/footerConfig';
import { menuConfig } from './documents/menuConfig';
import { page } from './documents/page';
import { accordion, accordionItem } from './objects/accordion';
import { article } from './objects/article';
import { blockContent } from './objects/blockContent';
import { externalLink } from './objects/externalLink';
import { internalLink } from './objects/internalLink';
import { section } from './objects/section';

export const schemaTypes = [
  /* documents */
  footerConfig,
  menuConfig,
  page,

  /* objects */
  accordion,
  accordionItem,
  article,
  blockContent,
  externalLink,
  internalLink,
  section,
];

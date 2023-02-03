import { commonBlock } from './documents/commonBlock';
import { defaultMetadata } from './documents/defaultMetadata';
import { footerConfig, footerConfigSection } from './documents/footerConfig';
import { landingPage } from './documents/landingPage';
import { menuConfig } from './documents/menuConfig';
import { page } from './documents/page';
import { accordion, accordionItem } from './objects/accordion';
import { article } from './objects/article';
import { banner } from './objects/banner';
import { bannerLink, bannerLinkGroup } from './objects/bannerLinkGroup';
import { blockContent } from './objects/blockContent';
import { color } from './objects/color';
import { employeeCard, employeeCards } from './objects/employeeCards';
import { externalLink } from './objects/externalLink';
import { handbook, handbookSection } from './objects/handbook';
import { header } from './objects/header';
import { imageObj } from './objects/imageObj';
import { internalLink } from './objects/internalLink';
import { pageMetadata } from './objects/pageMetadata';
import { section } from './objects/section';

export const schemaTypes = [
  /* documents */
  commonBlock,
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
  bannerLink,
  bannerLinkGroup,
  blockContent,
  color,
  employeeCard,
  employeeCards,
  externalLink,
  handbook,
  handbookSection,
  header,
  imageObj,
  internalLink,
  pageMetadata,
  section,
];

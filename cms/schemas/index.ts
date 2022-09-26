import { footerConfig } from './documents/footerConfig';
import { menuConfig } from './documents/menuConfig';
import { page } from './documents/page';
import { blockContent } from './objects/blockContent';
import { externalLink } from './objects/externalLink';
import { internalLink } from './objects/internalLink';

export const schemaTypes = [
  blockContent,
  externalLink,
  footerConfig,
  internalLink,
  menuConfig,
  page,
];

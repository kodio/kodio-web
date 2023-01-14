import { FiCompass } from 'react-icons/fi';
import { defineType } from 'sanity';

export const menuConfig = defineType({
  name: 'menuConfig',
  title: 'Menu config',
  type: 'document',
  icon: FiCompass,
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu config',
      };
    },
  },
});

import { FiCompass } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

export const footerConfig = defineType({
  name: 'footerConfig',
  title: 'Footer config',
  type: 'document',
  icon: FiCompass,
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer config',
      };
    },
  },
});

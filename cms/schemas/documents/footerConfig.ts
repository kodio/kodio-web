import { defineField, defineType } from 'sanity';

export const footerConfig = defineType({
  name: 'footerConfig',
  title: 'Footer config',
  type: 'document',
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

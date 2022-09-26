import { defineField, defineType } from 'sanity';

export const menuConfig = defineType({
  name: 'menuConfig',
  title: 'Menu config',
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
        title: 'Menu config',
      };
    },
  },
});

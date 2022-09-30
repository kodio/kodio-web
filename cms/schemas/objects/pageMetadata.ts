import { defineField, defineType } from 'sanity';

export const pageMetadata = defineType({
  name: 'pageMetadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Override the default metadata description for this page.',
      type: 'string',
    }),
    defineField({
      title: 'OG Image',
      name: 'image',
      description: 'Override the default metadata OG image for this page.',
      type: 'image',
    }),
  ],
});

import { defineType } from 'sanity';

export const pageMetadata = defineType({
  name: 'pageMetadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: 'Override the default metadata description for this page.',
      type: 'string',
    },
    {
      title: 'OG Image',
      name: 'image',
      description: 'Override the default metadata OG image for this page.',
      type: 'image',
    },
  ],
});

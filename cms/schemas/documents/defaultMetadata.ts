import { defineType } from 'sanity';

export const defaultMetadata = defineType({
  name: 'defaultMetadata',
  title: 'Default metadata',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: "Description of the site's content.",
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'OG Image',
      name: 'image',
      description: 'Open Graph image. Used when sharing links to site.',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Metadata',
      };
    },
  },
});

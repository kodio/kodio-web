import { defineField, defineType } from 'sanity';

export const defaultMetadata = defineType({
  name: 'defaultMetadata',
  title: 'Default metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      description: "Description of the site's content.",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'OG Image',
      name: 'image',
      description: 'Open Graph image. Used when sharing links to site.',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Metadata',
      };
    },
  },
});

import { defineField, defineType } from 'sanity';

export const imageObj = defineType({
  name: 'imageObj',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export const imageObj = defineType({
  name: 'imageObj',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
  ],
});

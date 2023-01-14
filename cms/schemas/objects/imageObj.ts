import { defineType } from 'sanity';

export const imageObj = defineType({
  name: 'imageObj',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    },
  ],
});

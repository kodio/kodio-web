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
    {
      name: 'fillContainer',
      title: 'Fill container',
      description:
        'Image can be cropped to fill its container. Should not be on for illustrations.',
      type: 'boolean',
      initialValue: false,
    },
  ],
});

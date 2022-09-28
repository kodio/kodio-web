import { defineType } from 'sanity';

export const color = defineType({
  name: 'color',
  title: 'Color',
  type: 'string',
  options: {
    list: [
      { title: 'White', value: 'white' },
      { title: 'Yellow', value: 'kodio-yellow' },
      { title: 'Purple', value: 'kodio-purple' },
      { title: 'Dark', value: 'kodio-dark' },
      { title: 'Orange', value: 'kodio-orange' },
    ],
  },
});

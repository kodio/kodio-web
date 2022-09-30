import { defineType } from 'sanity';

export const color = defineType({
  name: 'color',
  title: 'Color',
  type: 'string',
  options: {
    list: [
      { title: 'White', value: 'white' },
      { title: 'Kodio yellow', value: 'kodio-yellow' },
      { title: 'Kodio purple', value: 'kodio-purple' },
      { title: 'Kodio dark', value: 'kodio-dark' },
      { title: 'Kodio orange', value: 'kodio-orange' },
      { title: 'Yellow', value: 'yellow' },
      { title: 'Pale yellow', value: 'pale-yellow' },
      { title: 'Transparent', value: 'transparent' },
    ],
  },
});

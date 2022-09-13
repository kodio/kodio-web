import { defineType } from 'sanity';

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block content',
  type: 'array',
  of: [{ type: 'block' }],
});

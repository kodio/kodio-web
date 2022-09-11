import { defineType } from 'sanity';

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [{ type: 'block' }],
});

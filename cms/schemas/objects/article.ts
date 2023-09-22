import { FiFileText } from 'react-icons/fi';
import { defineType } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'object',
  icon: FiFileText,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Article',
        media: FiFileText,
      };
    },
  },
});

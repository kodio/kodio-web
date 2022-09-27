import { FiFileText } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'object',
  icon: FiFileText,
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
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

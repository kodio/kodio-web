import { FiFileText } from 'react-icons/fi';
import { defineType } from 'sanity';
export const customers = defineType({
  name: 'customers',
  title: 'Customers',
  type: 'object',
  icon: FiFileText,
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageBlock' }],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Customers',
        media: FiFileText,
      };
    },
  },
});

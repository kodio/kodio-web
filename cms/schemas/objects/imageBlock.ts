import { FaRegImage } from 'react-icons/fa';
import { defineType } from 'sanity';

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  icon: FaRegImage,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageObj',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare({ image }) {
      return {
        title: 'Image',
        media: image,
      };
    },
  },
});

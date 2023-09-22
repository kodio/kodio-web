import { FiUser } from 'react-icons/fi';
import { defineType } from 'sanity';

export const employee = defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  icon: FiUser,
  fields: [
    {
      name: 'fullName',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'illustration',
      title: 'Illustration',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'color',
      title: 'Background color',
      type: 'color',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Green 900', value: 'green-900' },
          { title: 'Green 800', value: 'green-800' },
          { title: 'Green 700', value: 'green-700' },
          { title: 'Orange 500', value: 'orange-500' },
          { title: 'Orange 400', value: 'orange-400' },
          { title: 'Orange 300', value: 'orange-300' },
          { title: 'Orange 200', value: 'orange-200' },
          { title: 'Purple 400', value: 'purple-400' },
          { title: 'Purple 300', value: 'purple-300' },
          { title: 'Purple 200', value: 'purple-200' },
          { title: 'Purple 100', value: 'purple-100' },
          { title: 'Yellow 200', value: 'yellow-200' },
          { title: 'Yellow 100', value: 'yellow-100' },
          { title: 'Yellow 50', value: 'yellow-50' },
        ],
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'tel',
      title: 'Phone number',
      type: 'externalLink',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'externalLink',
    },
  ],
  preview: {
    select: {
      fullName: 'fullName',
      image: 'image',
      illustration: 'illustration',
    },
    prepare({ fullName, image, illustration }) {
      return {
        title: fullName,
        media: image || illustration,
      };
    },
  },
});

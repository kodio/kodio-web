import { FiCalendar } from 'react-icons/fi';
import { defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: FiCalendar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'E.g., "14:00" or "14:00 - 16:00"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional link for more information or registration',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      time: 'time',
    },
    prepare({ title, date, time }) {
      return {
        title,
        subtitle: `${date}${time ? ` - ${time}` : ''}`,
        media: FiCalendar,
      };
    },
  },
});

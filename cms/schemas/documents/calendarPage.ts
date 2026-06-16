import { FiCalendar } from 'react-icons/fi';
import { defineType } from 'sanity';

export const calendarPage = defineType({
  name: 'calendarPage',
  title: 'Calendar Page',
  type: 'document',
  icon: FiCalendar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Used as meta title (name in browser tab).',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metadata',
      title: 'Page metadata',
      description: 'Will override the default metadata for this page',
      type: 'pageMetadata',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'header',
      title: 'Header',
      type: 'header',
      validation: (Rule) => Rule.required(),
    },
  ],
});

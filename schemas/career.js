import { generateId } from '../function';

export default {
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      options: {
        list: ['full-time', 'part-time'],
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['remotly', 'hybrid', 'site'],
      },
      validation: (Rule) => [Rule.required()],
    },
  ],
};

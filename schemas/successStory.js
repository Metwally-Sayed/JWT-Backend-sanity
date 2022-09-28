import { generateId } from '../function';

export default {
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    {
      name: 'owner',
      title: 'Owner',
      type: 'string',
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
      name: 'story',
      title: 'Story',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'instagramUrl',
      title: 'InstagramUrl',
      type: 'string',
    },
    {
      name: 'twitterUrl',
      title: 'TwitterUrl',
      type: 'string',
    },
    {
      name: 'linkedInUrl',
      title: 'LinkedInUrl',
      type: 'string',
    },
  ],
};

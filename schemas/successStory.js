export default {
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'story',
      title: 'Story',
      type: 'text',
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
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};

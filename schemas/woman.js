export default {
    name: 'wunderwomen',
    title: 'Our Wunder Women',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
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
        name: 'position',
        title: 'Position',
        type: 'text',
        validation: (Rule) => [Rule.required()],
      },
      {
        name: 'quate',
        title: 'Quate',
        type: 'text',
        validation: (Rule) => [Rule.required()],
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
  
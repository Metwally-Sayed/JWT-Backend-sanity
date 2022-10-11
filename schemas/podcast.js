export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'author',
      title: 'Author',
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
      name: 'videoUrl',
      title: 'VideoUrl',
      type: 'string',
    },
    {
      name: 'audioUrl',
      title: 'Audio Url',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    },
  ],
};

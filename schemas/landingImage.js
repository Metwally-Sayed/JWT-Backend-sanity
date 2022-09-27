export default {
  name: 'landingImage',
  title: 'LandingImage',
  type: 'document',
  fields: [
    {
      name: 'sectionName',
      title: 'section Name',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'slug',
      options: {
        source: 'sectionName',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

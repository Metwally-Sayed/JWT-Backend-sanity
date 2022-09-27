import { generateId } from "../function";

export default {
  name: "podcast",
  title: "Podcast",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "imagebroad",
      title: "Main Broadimage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "videoUrl",
      title: "VideoUrl",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};

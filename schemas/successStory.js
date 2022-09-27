import { generateId } from "../function";

export default {
  name: "successStory",
  title: "Success Story",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "story",
      title: "Story",
      type: "text",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "instagramUrl",
      title: "InstagramUrl",
      type: "string",
    },
    {
      name: "twitterUrl",
      title: "TwitterUrl",
      type: "string",
    },
    {
      name: "linkedInUrl",
      title: "LinkedInUrl",
      type: "string",
    },
  ],
};

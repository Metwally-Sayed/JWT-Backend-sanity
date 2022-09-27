import { generateId } from "../function";

export default {
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
      initialValue: generateId(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

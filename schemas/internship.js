import { generateId } from "../function";

export default {
  name: "internship",
  title: "Internship",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
      initialValue: generateId(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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

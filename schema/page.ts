export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page title",
      type: "string",
    },
    {
      name: "sections",
      type: "array",
      of: [
        {
          name: "hero",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "subtitle",
              type: "string",
            },
            {
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "p8S9MxkirVE",
            },
          ],
        },
        {
          name: "imageLeft",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "excerpt",
              type: "text",
            },
            {
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "pTgo0BxhLWp",
            },
          ],
        },
        {
          name: "imageRight",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "excerpt",
              type: "text",
            },
            {
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "poszfFeLg7f",
            },
          ],
        },
        {
          name: "richText",
          type: "object",
          fields: [
            {
              name: "text",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "pBAE6KOf6qq",
            },
          ],
        },
      ],
    },
  ],
};

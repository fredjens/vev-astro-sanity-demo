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
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "hero",
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
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "image-left",
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
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
            {
              name: "component",
              type: "string",
              readOnly: true,
              initialValue: "image-right",
            },
          ],
        },
        {
          name: "richText",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "text",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "component",
              type: "string",
              initialValue: "rich-text",
            },
          ],
        },
        {
          name: "video",
          type: "object",
          fields: [
            {
              name: "youTubeUrl",
              type: "string",
            },
            {
              name: "component",
              type: "string",
              initialValue: "video",
            },
          ],
        },
      ],
    },
  ],
};

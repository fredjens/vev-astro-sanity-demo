type SanityPage = {
  _key: string;
  sections: SanitySection[];
};

type SanitySection = Record<string, string>;

type MapType = Record<
  string,
  Record<string, (val: string) => Record<string, any>>
>;

const mappings: MapType = {
  p8S9MxkirVE: {
    title: (val: string) => ({
      ["t-4RyfGtGYj2"]: {
        type: "text",
        value: val,
      },
    }),
    subtitle: (val: string) => ({
      ["t-hd1jsFgPV5"]: {
        type: "text",
        value: val,
      },
    }),
    image: (val: string) => ({
      ["i-JZiYWYXa7J"]: {
        type: "image",
        value: val,
      },
    }),
  },
  pTgo0BxhLWp: {
    title: (val: string) => ({
      ["t-4RyfGtGYj2"]: {
        type: "text",
        value: val,
      },
    }),
    excerpt: (val: string) => ({
      ["i-JZiYWYXa7J"]: {
        type: "image",
        value: val,
      },
    }),
  },
  poszfFeLg7f: {
    title: (val: string) => ({
      ["t-4RyfGtGYj2"]: {
        type: "text",
        value: val,
      },
    }),
    excerpt: (val: string) => ({
      ["i-JZiYWYXa7J"]: {
        type: "image",
        value: val,
      },
    }),
  },
};

const mapSections = (
  sections: SanityPage["sections"] = [],
  mappings: MapType
) =>
  sections?.map((section) => {
    const mapping = mappings[section.component];
    const data = Object.keys(section);
    return {
      component: section.component,
      id: section._key,
      variables: data.reduce((acc, key: string) => {
        if (mapping?.[key]) {
          return { ...acc, ...mapping[key](section[key]) };
        }
        return acc;
      }, {}),
    };
  });

export const mapToVariables = (page: SanityPage) => {
  console.log("before", JSON.stringify(page, null, 2));

  return mapSections(page.sections, mappings);
};

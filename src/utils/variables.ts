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
  hero: {
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
  "image-left": {
    title: (val: string) => ({
      ["t-4RyfGtGYj2"]: {
        type: "text",
        value: val,
      },
    }),
    excerpt: (val: string) => ({
      ["t-blN_4tbSKg"]: {
        type: "text",
        value: val,
      },
    }),
    image: (val: string) => ({
      ["i-pX8STDZXfD"]: {
        type: "image",
        value: val,
      },
    }),
  },
  "image-right": {
    title: (val: string) => ({
      ["t-4RyfGtGYj2"]: {
        type: "text",
        value: val,
      },
    }),
    excerpt: (val: string) => ({
      ["t-BO6UhgLq6N"]: {
        type: "text",
        value: val,
      },
    }),
    image: (val: string) => ({
      ["i-gU3M_iqVaZ"]: {
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
  const mapped = mapSections(page?.sections, mappings);
  return mapped;
};

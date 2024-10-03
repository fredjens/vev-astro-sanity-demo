import { sanityImage } from "./sanity";

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
        value: createImage(val),
      },
    }),
  },
  "image-left": {
    title: (val: string) => ({
      ["t-Y39-o47gOz"]: {
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
      ["i-gU3M_iqVaZ"]: {
        type: "image",
        value: createImage(val),
      },
    }),
  },
  "image-right": {
    title: (val: string) => ({
      ["t-ZtEL6BClv1"]: {
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
        value: createImage(val),
      },
    }),
  },
};

const createImage = (val: string) => {
  return {
    src: val,
    srcset: [600, 800, 900, 1000, 1200, 1300, 2200].map((size) => [
      sanityImage.image(val).width(size).quality(60).format("webp").url(),
      size,
    ]),
  };
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
  return mapSections(page?.sections, mappings);
};

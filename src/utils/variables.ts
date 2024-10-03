import { sanityImage } from "./sanity";

type SanityPage = {
  _key: string;
  sections: SanitySection[];
};

type SanityImage = {
  url: string;
  alt: string;
};

type SanitySection = Record<string, string>;

type MapType = Record<
  string,
  Record<string, (val: any) => Record<string, any>>
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
    image: (val: SanityImage) => ({
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
    image: (val: SanityImage) => ({
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
    image: (val: SanityImage) => ({
      ["i-gU3M_iqVaZ"]: {
        type: "image",
        value: createImage(val),
      },
    }),
  },
};

const createImage = ({ url, alt }: SanityImage) => {
  return {
    src: url,
    meta: {
      description: alt,
    },
    srcset: [480, 640, 730, 820, 960, 1080, 1300, 2400].map((size, i) => [
      sanityImage.image(url).width(size).quality(50).format("webp").url(),
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

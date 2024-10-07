import { sanityImage, sanityBlockToHtml } from "./sanity";

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
  "rich-text": {
    title: (val: string) => ({
      ["t-u3bN5pn-37"]: {
        type: "text",
        value: val,
      },
    }),
    text: (val: string) => ({
      ["t-hwRbSuZX71"]: {
        type: "text",
        value: sanityBlockToHtml(val),
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
    srcset: [320, 560, 640, 960, 1280, 2560].map((size, i) => [
      sanityImage.image(url).width(size).quality(80).format("webp").url(),
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

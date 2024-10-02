import { useEffect } from "react";

type Props = {
  id: string;
  component: string;
  variables?: Record<string, any>;
};

const VevEmbed = ({ id, component, variables = {} }: Props) => {
  useEffect(() => {
    const url = `https://qwiker-test.vev.design/p/6A5lyRJAZs${component}/embed.js`;
    /* @vite-ignore */
    // @ts-ignore
    import(url).then(({ init }) => {
      init({
        target: id,
        vars: variables,
      });
    });
  }, [id, component]);

  return <div id={id} />;
};

export default VevEmbed;

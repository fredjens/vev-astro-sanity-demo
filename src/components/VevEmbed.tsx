import { useEffect } from "react";

type Props = {
  id: string;
  component: string;
  variables?: Record<string, any>;
};

const VevEmbed = ({ id, component, variables = {} }: Props) => {
  useEffect(() => {
    const url = `https://qwiker-test.vev.design/p/${component}/embed.js`;
    // @ts-ignore
    import(url).then(({ init }) => {
      console.log("component", component);
      init({
        target: id,
        vars: variables,
      });
    });
  }, [id, component]);

  return <div id={id} />;
};

export default VevEmbed;

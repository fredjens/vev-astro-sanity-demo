export const debounce = (ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (str: string) => {
    clearTimeout(timeout);
    return new Promise<string>((resolve) => {
      timeout = setTimeout(() => {
        resolve(str);
      }, ms);
    });
  };
};

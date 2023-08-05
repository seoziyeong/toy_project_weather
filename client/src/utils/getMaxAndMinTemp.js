export const getMaxAndMinTemp = (temp) => {
  const max = Math.max(...temp);
  const min = Math.min(...temp);
  return { max, min };
};

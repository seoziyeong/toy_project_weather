// 최고, 최저온도 필터
export const filterMaxAndMinOfTemp = (temp: number[]) => {
  const max = Math.max(...temp);
  const min = Math.min(...temp);
  return { max, min };
};

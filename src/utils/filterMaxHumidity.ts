// 최고 습도 필터
export const filterMaxHumidity = (humidity: number[]) => {
  const max = Math.max(...humidity);
  return max;
};

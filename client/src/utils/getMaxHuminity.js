export const getMaxHumidity = (humidity) => {
  const max = Math.max(...humidity);
  return max;
};

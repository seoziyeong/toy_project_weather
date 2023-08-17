export const getToastIcon = (status) => {
  if (status === "dust") return "🚨";
  if (status === "rain") return "🌂";
  if (status === "heatWave") return "🥵";
  if (status === "coldWave") return "🥶";
};

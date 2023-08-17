export const getToastCssColors = (status) => {
  if (status === "dust")
    return {
      bg: "#FAC7CA",
      border: "#FDA8AE",
      font: "#E32939",
    };
  if (status === "rain")
    return {
      bg: "#9EC6FB",
      border: "#64A7FF",
      font: "#1262D7",
    };
  if (status === "heatWave")
    return {
      bg: "#FBBA88",
      font: "#FF9240",
      font: "#E45200",
    };
  if (status === "coldWave")
    return {
      bg: "#9EE5FB",
      border: "#64DAFF",
      font: "#009ACB",
    };
};

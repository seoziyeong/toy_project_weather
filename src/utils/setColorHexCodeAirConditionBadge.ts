// toast의 상태값에 따라 color 설정
export const setColorHexCodeAirConditionBadge = (condition) => {
  if (condition === "좋음")
    return {
      border: "rgba(85, 195, 228, 0.4)",
      font: "#55C3E4",
    };
  if (condition === "보통")
    return {
      border: "rgba(95, 200, 105, 0.4)",
      font: "#5FC869",
    };
  if (condition === "나쁨")
    return {
      border: "rgba(239, 160, 7, 0.4)",
      font: "#EFA007",
    };
  else
    return {
      border: "rgba(230, 60, 69, 0.4)",
      font: "#E63C45",
    };
};

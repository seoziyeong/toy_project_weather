import { ToastStatusTypes } from "../types/common/ToastStatusTypes";

// toast의 상태값에 따라 color 설정
export const setColorHexCodeForToast = (status: ToastStatusTypes) => {
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
      border: "#FF9240",
      font: "#E45200",
    };

  return {
    bg: "#9EE5FB",
    border: "#64DAFF",
    font: "#009ACB",
  };
};

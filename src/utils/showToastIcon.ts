import { ToastStatusTypes } from "types/common/ToastStatusTypes";

// 토스트 팝업 안에 들어가는 특수 상황 아이콘 제공
export const showToastIcon = (status: ToastStatusTypes) => {
  if (status === "dust") return "🚨";
  if (status === "rain") return "🌂";
  if (status === "heatWave") return "🥵";
  return "🥶";
};

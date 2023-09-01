import { CurrentBaseTypes } from "types/current/currentTypes";
import { showFineDustCondition } from "./showFineDustCondition";
import { AirBaseTypes } from "types/air/airTypes";

// 토스트 팝업의 상태 설정
export const setToastStatus = (current: CurrentBaseTypes, air: AirBaseTypes) => {
  if (current) {
    if (current.rain !== undefined) return "rain";
    if (current.main.feels_like >= 33) return "heatWave";
    if (current.main.temp <= -12) return "coldWave";
    const dustCondition = showFineDustCondition("fineDust", air.pm10);
    if (dustCondition === "나쁨" || dustCondition === "매우 나쁨") return "dust";
  }
  return "ordinary";
};

import { showFineDustCondition } from "./showFineDustCondition";

// 토스트 팝업의 상태 설정
export const setToastStatus = (current, air) => {
  if (current) {
    if (current.rain !== undefined) return "rain";
    if (current.main.feels_like >= 33) return "heatWave";
    if (current.main.temp <= -12) return "coldWave";
    const dustCondition = showFineDustCondition("fineDust", air.pm10);
    if (air === "나쁨" || air === "매우나쁨") return "dust";
  }
};

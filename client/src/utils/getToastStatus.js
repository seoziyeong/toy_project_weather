import { getFineDustCondition } from "./getFineDustCondition";

export const getToastStatus = (current, air) => {
  if (current) {
    if (current.rain !== undefined) return "rain";
    if (current.main.feels_like >= 33) return "heatWave";
    if (current.main.temp <= -12) return "coldWave";
    const dustCondition = getFineDustCondition("fineDust", air.pm10);
    if (dustCondition === "나쁨" || dustCondition === "매우나쁨") return "dust";
  }
};

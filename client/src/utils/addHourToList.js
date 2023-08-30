import { WEEKDAY } from "../constants/weekday-constants";

// 시간별 데이터에 누락된 요일 정보를 추가하는 함수
export const addHourToList = (hourly) => {
  for (let row of hourly) {
    row["day"] = WEEKDAY[new Date(row.dt_txt.split(" ")[0]).getDay()];
  }
  return hourly;
};

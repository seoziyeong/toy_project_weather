import { HourlyBaseTypes } from "types/hourly/hourlyTypes";
import { WEEKDAY } from "../constants/weekday-constants";

// 시간별 데이터에 누락된 요일 정보를 추가하는 함수
export const addHourToList: any = (hourly: HourlyBaseTypes[]) => {
  const currentHourly = [...hourly];
  for (let row of currentHourly) {
    row["day"] = WEEKDAY[new Date(row.dt_txt.split(" ")[0]).getDay()];
  }

  return currentHourly;
};

import { WEEKDAY } from "../constants/weekday-constants";

export const getHourList = (hourly) => {
  for (let row of hourly) {
    row["day"] = WEEKDAY[new Date(row.dt_txt.split(" ")[0]).getDay()];
  }
  return hourly;
};

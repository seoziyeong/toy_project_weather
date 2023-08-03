import { WEEKDAY } from "../constants/weekday-constants";

export const getHourList = (hourly) => {
  let dayHour = [...hourly.data.list];
  for (let row of dayHour) {
    row["day"] = WEEKDAY[new Date(row.dt_txt.split(" ")[0]).getDay()];
  }
  return dayHour;
};

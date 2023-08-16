import { getWeatherIcon } from "./getWeatherIcon";

export const getMaxAndMinTempIcon = (type, temp, value, icons) => {
  if (type === "max") {
    const index = temp.indexOf(value, 0);
    return getWeatherIcon(icons[index]);
  }
  if (type === "min") {
    const index = temp.indexOf(value, 0);
    return getWeatherIcon(icons[index]);
  }
};

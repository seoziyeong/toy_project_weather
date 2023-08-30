import { showWeatherIcon } from "./showWeatherIcon";

// 최고, 최저온도 아이콘 설정
export const setIconForMaxAndMinTemp = (type, temp, value, icons) => {
  if (type === "max") {
    const index = temp.indexOf(value, 0);
    return showWeatherIcon(icons[index]);
  }
  if (type === "min") {
    const index = temp.indexOf(value, 0);
    return showWeatherIcon(icons[index]);
  }
};

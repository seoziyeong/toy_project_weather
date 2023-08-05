import { getIcon } from "./getIcon";

export const getMaxAndMinTempIcon = (type, temp, value, icons) => {
  if (type === "max") {
    const index = temp.indexOf(value, 0);
    return getIcon(icons[index]);
  }
  if (type === "min") {
    const index = temp.indexOf(value, 0);
    return getIcon(icons[index]);
  }
};

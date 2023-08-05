export const getHourTime = (hour) => {
  let daytime;
  let dtText = hour.dt_txt.split(" ")[1].slice(0, 2);

  if (dtText === "21") daytime = "오후";
  else if (hour.sys.pod === "d") daytime = "오전";
  else if (hour.sys.pod === "n") daytime = "오후";

  if (dtText > 12) {
    dtText -= 12;
    dtText = "0" + dtText;
  }

  const result = `${daytime} ${dtText}시`;
  return result;
};

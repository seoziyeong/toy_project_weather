export const getWeeklyData = (groupByData, keyList) => {
  let temps = [];
  let humiditys = [];
  let icons = [];

  keyList.map((key) => {
    let tempList = [];
    let humidityList = [];
    let iconList = [];
    groupByData[key].map((v, i) => {
      tempList.push(Math.round(v.main.temp));
      humidityList.push(v.main.humidity);
      iconList.push(v.weather[0].icon);
    });
    temps.push(tempList);
    humiditys.push(humidityList);
    icons.push(iconList);
  });

  return { temps, humiditys, icons };
};

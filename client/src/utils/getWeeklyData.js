export const getWeeklyData = (groupByData, keyList) => {
  let allTemp = [];
  let allHumidity = [];
  let allIcons = [];

  keyList.map((key) => {
    let tempList = [];
    let humidityList = [];
    let iconList = [];
    groupByData[key].map((v, i) => {
      tempList.push(Math.round(v.main.temp));
      humidityList.push(v.main.humidity);
      iconList.push(v.weather[0].icon);
    });
    allTemp.push(tempList);
    allHumidity.push(humidityList);
    allIcons.push(iconList);
  });

  return { allTemp, allHumidity, allIcons };
};

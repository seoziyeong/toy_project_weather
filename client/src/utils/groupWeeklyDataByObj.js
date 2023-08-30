// 요일별 데이터를 온도, 습도, 아이콘별 object로 그룹화
export const groupWeeklyDataByObj = (groupByData, keyList) => {
  let temps = [];
  let humiditys = [];
  let icons = [];

  keyList.map((key) => {
    let tempList = [];
    let humidityList = [];
    let iconList = [];
    groupByData[key].map((v) => {
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

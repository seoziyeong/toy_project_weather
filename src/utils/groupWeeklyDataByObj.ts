// 요일별 데이터를 온도, 습도, 아이콘별 object로 그룹화
export const groupWeeklyDataByObj = (groupByData, keyList: string[]) => {
  let temps: number[][] = [];
  let humiditys: number[][] = [];
  let icons: string[][] = [];

  keyList.map((key) => {
    let tempList: number[] = [];
    let humidityList: number[] = [];
    let iconList: string[] = [];
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

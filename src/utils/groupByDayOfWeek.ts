// 요일별로 데이터 그룹화
export const groupByDayOfWeek = (hour, index: string) => {
  return hour.reduce(function (v, e) {
    let group = e[index];

    if (v[group] === undefined) {
      v[group] = [];
    }

    v[group].push(e);
    return v;
  }, {});
};

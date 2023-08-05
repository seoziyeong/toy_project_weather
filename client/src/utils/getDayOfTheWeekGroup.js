export const getDayOfTheWeekGroup = (hour, index) => {
  return hour.reduce(function (v, e) {
    let group = e[index];

    if (v[group] === undefined) {
      v[group] = [];
    }

    v[group].push(e);
    return v;
  }, {});
};

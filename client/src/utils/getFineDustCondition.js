export const getFineDustCondition = (kind, dust) => {
  if (kind === "findDust") {
    if (dust <= 30) return "좋음";
    if (dust <= 80) return "보통";
    if (dust <= 30) return "나쁨";
    if (dust <= 30) return "매우 나쁨";
  }
  if (kind === "ultraFindDust") {
    if (dust <= 15) return "좋음";
    if (dust <= 35) return "보통";
    if (dust <= 75) return "나쁨";
    if (dust <= 76) return "매우 나쁨";
  }
};

// 미세먼지, 초미세먼지 상태 제공
export const showFineDustCondition = (kind, dust) => {
  if (kind === "fineDust") {
    if (dust <= 30) return "좋음";
    if (dust <= 80) return "보통";
    if (dust <= 150) return "나쁨";
    if (dust >= 151) return "매우 나쁨";
  }
  if (kind === "ultraFineDust") {
    if (dust <= 15) return "좋음";
    if (dust <= 35) return "보통";
    if (dust <= 75) return "나쁨";
    if (dust >= 76) return "매우 나쁨";
  }
};

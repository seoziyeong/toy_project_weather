// 미세먼지 상태 아이콘 제공
export const showFineDustIcon = (air) => {
  if (air === "좋음") return "😄";
  else if (air === "보통") return "🙂";
  else if (air === "나쁨") return "😷";
  else if (air === "매우 나쁨") return "👿";
};

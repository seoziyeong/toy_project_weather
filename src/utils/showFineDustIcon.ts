// 미세먼지 상태 아이콘 제공
export const showFineDustIcon = (air: string) => {
  if (air === "좋음") return "😄";
  if (air === "보통") return "🙂";
  if (air === "나쁨") return "😷";
  return "👿";
};

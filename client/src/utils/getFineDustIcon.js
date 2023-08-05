export const getFineDustIcon = (air) => {
  if (air === "좋음") return "😄";
  else if (air === "보통") return "🙂";
  else if (air === "나쁨") return "😷";
  else if (air === "매우 나쁨") return "👿";
};

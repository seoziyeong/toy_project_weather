// desc code에 맞는 날씨 상태 제공
export const showWeatherDescription = (desc: string) => {
  if (desc === "01") return "맑음";
  if (desc === "02") return "구름 조금";
  if (desc === "03" || desc === "04") return "구름 많음";
  if (desc === "09") return "소나기";
  if (desc === "10") return "비";
  if (desc === "11") return "뇌우";
  if (desc === "13") return "눈";
  return "안개";
};

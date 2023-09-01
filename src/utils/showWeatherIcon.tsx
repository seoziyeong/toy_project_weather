// api 기본 icon 대체하는 icon 제공
export const showWeatherIcon = (icon: string) => {
  if (icon === "01d") return "☀";
  if (icon === "02d") return "🌤";
  if (icon === "10d") return "🌦";
  if (icon === "01n") return "🌙";
  if (icon === "02n") return <img src="./img/custom_02n.png" alt="" />;
  if (icon === "10n") return <img src="./img/custom_10n.png" alt="" />;
  if (icon === "03d" || icon === "03n" || icon === "04d" || icon === "04n") return "☁️";
  if (icon === "09d" || icon === "09n") return "🌧"; // 소나기
  if (icon === "13d" || icon === "13n") return "❄️";
  if (icon === "50d" || icon === "50n") return "🌫"; // 안개
};

export const getWeatherIcon = (icon) => {
  if (icon === "01d") return "☀";
  else if (icon === "02d") return "🌤";
  else if (icon === "10d") return "🌦";
  else if (icon === "01n") return "🌙";
  else if (icon === "02n") return <img src="./img/custom_02n.png" alt="" />;
  else if (icon === "10n") return <img src="./img/custom_10n.png" alt="" />;
  else if (icon === "03d" || icon === "03n" || icon === "04d" || icon === "04n") return "☁️";
  else if (icon === "09d" || icon === "09n") return "🌧"; // 소나기
  else if (icon === "13d" || icon === "13n") return "❄️";
  else if (icon === "50d" || icon === "50n") return "🌫"; // 안개
};

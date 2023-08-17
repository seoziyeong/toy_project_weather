export const getToastText = (status) => {
  if (status === "dust") return ["미세먼지가 심해요.", <br />, "마스크를 꼭 착용해 주세요."];
  if (status === "rain") return ["비가 내려요.", <br />, "우산을 챙기면 좋겠어요."];
  if (status === "heatWave") return ["아이고 더워! 폭염주의보 발동", <br />, "되도록 외출을 삼가하세요."];
  if (status === "coldWave") return ["아이고 추워! 한파주의보 발동", <br />, "되도록 외출을 삼가하세요."];
};

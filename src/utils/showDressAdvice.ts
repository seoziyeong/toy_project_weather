// 기온 값에 맞는 advice를 제공
export const showDressAdvice = (temp: number) => {
  if (temp >= 30) return ["매우 더운 한여름 날씨!", "가벼운 옷차림을 추천해요."];
  if (temp >= 27) return ["꽤 덥게 느껴져요.", "옷차림을 가볍게 입는 게 좋겠어요."];
  if (temp >= 20) return ["따뜻한 날씨예요.", "얇은 겉옷을 챙기셔도 좋아요."];
  if (temp >= 17) return ["활동하기 좋은 날씨예요.", "그래도 옷차림은 든든히!"];
  if (temp >= 12) return ["선선한 날씨예요.", "간절기 겉옷을 꼭 챙기세요."];
  if (temp >= 10) return ["조금 쌀쌀해요.", "얇게 여러겹 껴입는 게 좋겠어요."];
  if (temp >= 6) return ["꽤 춥게 느껴져요.", "옷차림을 도톰히 입는 게 좋겠어요."];
  if (temp <= 2) return ["매우 추운 한겨울 날씨!", "따뜻히 입어서 대비해야 해요."];
  return [];
};

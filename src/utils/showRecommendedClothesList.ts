// 기온에 따른 옷차림 리스트 제공
export const showRecommendedClothesList = (temp: number) => {
  if (temp >= 30) return ["반팔 티셔츠", "얇은 셔츠", "민소매", "블라우스", "반바지", "치마", "면바지"];
  if (temp >= 27) return ["반팔 티셔츠", "얇은 셔츠", "블라우스", "치마", "반바지", "면바지", "청바지"];
  if (temp >= 20)
    return ["바람막이", "맨투맨", "반팔 티셔츠", "얇은 셔츠", "얇은 니트", "셔츠", "면바지", "청바지", "치마"];
  if (temp >= 17)
    return [
      "가죽자켓",
      "트렌치코트",
      "자켓",
      "맨투맨",
      "긴팔 티셔츠",
      "셔츠",
      "니트",
      "가디건",
      "후드티",
      "면바지",
      "청바지",
    ];
  if (temp >= 12)
    return [
      "간절기코트",
      "트렌치코트",
      "자켓",
      "맨투맨",
      "긴팔 티셔츠",
      "셔츠",
      "니트",
      "가디건",
      "후드티",
      "면바지",
      "청바지",
    ];
  if (temp >= 10)
    return [
      "간절기코트",
      "가죽자켓",
      "트렌치코트",
      "점퍼",
      "무스탕",
      "기모후드티",
      "후드티",
      "니트",
      "맨투맨",
      "면바지",
      "청바지",
    ];
  if (temp >= 6) return ["무스탕", "겨울코트", "점퍼", "플리스", "기모후드티", "니트", "면바지", "청바지", "내복"];

  return ["패딩", "무스탕", "겨울코트", "플리스", "기모후드티", "니트", "기모바지", "청바지", "내복", "목도리", "장갑"];
};

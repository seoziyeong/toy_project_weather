// 의류 아이템마다 고유 color 설정
export const setColorHexCodeByItem = (item: string) => {
  if (item === "패딩" || item === "셔츠") return "#2C3647";
  if (item === "무스탕" || item === "치마") return "#603E1F";
  if (item === "겨울코트" || item === "청바지") return "#004156";
  if (item === "가디건" || item === "자켓") return "#255F35";
  if (item === "니트" || item === "얇은 니트") return "#CE9400";
  if (item === "기모후드티" || item === "긴팔 티셔츠") return "#6E479F";
  if (item === "기모바지" || item === "블라우스") return "#848484";
  if (item === "내복" || item === "면바지") return "#356764";
  if (item === "목도리" || item === "반바지") return "#736700";
  if (item === "장갑" || item === "반팔 티셔츠") return "#F56570";
  if (item === "후드티" || item === "민소매") return "#99A938";
  if (item === "바람막이" || item === "얇은 셔츠") return "#9A6DAF";
  if (item === "간절기코트" || item === "플리스") return "#B2A319";
  if (item === "가죽자켓") return "#DE58B8";
  if (item === "트렌치코트") return "#D87C10";
  if (item === "점퍼") return "#A39162";
  if (item === "맨투맨") return "#5BBABA";
};

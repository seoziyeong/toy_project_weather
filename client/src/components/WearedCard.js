import styled from "styled-components";
import { GrayText } from "./atom/GrayText";
import { useEffect, useState } from "react";

export const WearedCard = ({ weather }) => {
  function handleTitle() {
    if (weather >= 30) {
      return `매우 더운 한여름 날씨!
가볍게 입되 자외선 차단에 신경쓰세요.`;
    } else if (weather >= 27) {
      return `꽤 덥게 느껴져요.
옷차림을 가볍게 입는 게 좋겠어요.`;
    } else if (weather >= 20) {
      return `따뜻한 날씨예요.
얇은 겉옷을 챙기셔도 좋아요. `;
    } else if (weather >= 17) {
      return `활동하기 좋은 날씨예요.
그래도 옷차림은 든든히!`;
    } else if (weather >= 12) {
      return `선선한 날씨예요.
간절기 겉옷을 꼭 챙기세요. `;
    } else if (weather >= 10) {
      return `조금 쌀쌀해요.
얇게 여러겹 껴입는 게 좋겠어요.`;
    } else if (weather >= 6) {
      return `꽤 춥게 느껴져요.
옷차림을 도톰히 입는 게 좋겠어요.`;
    } else if (weather <= 2) {
      return `매우 추운 한겨울 날씨!
따뜻히 입어서 대비해야 해요.`;
    }
  }

  const [clothesList, setClothesList] = useState([]);
  function recommendedClothes() {
    if (weather >= 30) {
      setClothesList([
        "반팔 티셔츠",
        "얇은 셔츠",
        "민소매",
        "블라우스",
        "반바지",
        "치마",
        "면바지",
      ]);
    } else if (weather >= 27) {
      setClothesList([
        "반팔 티셔츠",
        "얇은 셔츠",
        "블라우스",
        "치마",
        "반바지",
        "면바지",
        "청바지",
      ]);
    } else if (weather >= 20) {
      setClothesList([
        "바람막이",
        "맨투맨",
        "반팔 티셔츠",
        "얇은 셔츠",
        "얇은 니트",
        "셔츠",
        "면바지",
        "청바지",
        "치마",
      ]);
    } else if (weather >= 17) {
      setClothesList([
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
      ]);
    } else if (weather >= 12) {
      setClothesList([
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
      ]);
    } else if (weather >= 10) {
      setClothesList([
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
      ]);
    } else if (weather >= 6) {
      setClothesList([
        "무스탕",
        "겨울코트",
        "점퍼",
        "플리스",
        "기모후드티",
        "니트",
        "면바지",
        "청바지",
        "내복",
      ]);
    } else if (weather <= 2) {
      setClothesList([
        "패딩",
        "무스탕",
        "겨울코트",
        "플리스",
        "기모후드티",
        "니트",
        "기모바지",
        "청바지",
        "내복",
        "목도리",
        "장갑",
      ]);
    }
  }

  useEffect(() => {
    recommendedClothes();
  }, [weather]);

  return (
    <WearedCardStyled>
      <GrayText>오늘은</GrayText>
      <Title>{handleTitle()}</Title>
      <Clothes>
        {clothesList.map((v, i) => {
          return (
            <Item key={i} item={v}>
              {v}
            </Item>
          );
        })}
      </Clothes>
    </WearedCardStyled>
  );
};

function getColorByItem(item) {
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
}

const WearedCardStyled = styled.div`
  position: absolute;
  width: 90%;
  height: 272px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    right: 5%;
    top: 20%;
    max-width: 390px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    right: 6%;
    top: 20%;
    max-width: 486px;
  }
`;

const Title = styled.pre`
  font-weight: 700;
  font-size: 24px;
  color: #0c0c0e;
  margin: 24px 0;
  font-family: Pretendard Variable;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 90%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    right: 6%;
    top: 20%;
    font-size: 24px;
  }
`;

const Clothes = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const Item = styled.span`
  padding: 5px 10px;
  font-weight: 600;
  font-size: 14px;
  position: relative;

  color: ${({ item }) => getColorByItem(item)};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ item }) => getColorByItem(item)};
    opacity: 0.1;
    border-radius: 16px;
  }
`;

import styled from "styled-components";
import { GrayText } from "./atom/GrayText";
import { useEffect, useState } from "react";
import { getAdvice } from "../utils/getAdvice";
import { getRecommendedClothes } from "../utils/getRecommendedClothes";
import { getColorByItem } from "../utils/getColorByItem";

export const WearedCard = ({ weather }) => {
  const [clothesList, setClothesList] = useState([]);

  useEffect(() => {
    setClothesList(getRecommendedClothes(weather));
  }, [weather]);

  return (
    <WearedCardStyled>
      <GrayText>오늘은</GrayText>
      <Title>{getAdvice(weather)}</Title>
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

const WearedCardStyled = styled.div`
  position: absolute;
  width: 90%;
  height: 272px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    right: 5%;
    top: 70%;
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

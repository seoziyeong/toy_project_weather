import styled from "styled-components";
import { useEffect, useState } from "react";
import { Division } from "./atom/Division";
// import { GrayText } from "./atom/GrayText";

export const Air = ({ fineDust, ultraFineDust }) => {
  // * 아이콘 매칭
  function getIcon(air) {
    if (air === "좋음") return "😄";
    else if (air === "보통") return "🙂";
    else if (air === "나쁨") return "😷";
    else if (air === "매우 나쁨") return "👿";
  }

  // * 미세먼지, 초미세먼지
  const [fineDustCondition, setFineDustCondition] = useState("좋음");
  const [ultraFineDustCondition, setUltraFineDustCondition] = useState("좋음");

  function handleFineDustCondition(fineDust) {
    if (fineDust <= 30) setFineDustCondition("좋음");
    else if (fineDust <= 80) setFineDustCondition("보통");
    else if (fineDust <= 150) setFineDustCondition("나쁨");
    else if (fineDust >= 151) setFineDustCondition("매우 나쁨");
  }

  function handleUltraFineDustCondition(ultraFineDust) {
    if (ultraFineDust <= 15) setUltraFineDustCondition("좋음");
    else if (ultraFineDust <= 35) setUltraFineDustCondition("보통");
    else if (ultraFineDust <= 75) setUltraFineDustCondition("나쁨");
    else if (ultraFineDust >= 76) setUltraFineDustCondition("매우 나쁨");
  }

  useEffect(() => {
    handleFineDustCondition(fineDust);
    handleUltraFineDustCondition(ultraFineDust);
  }, [fineDust, ultraFineDust]);

  return (
    <Contents>
      <h2>대기정보</h2>
      <Box>
        <InfoContainer>
          <Info>
            <Emoji>{getIcon(fineDustCondition)}</Emoji>
            <GrayText>미세먼지</GrayText>
            <Badge condition={fineDustCondition}>{fineDustCondition}</Badge>
            <p>{fineDust} ㎍/m³</p>
          </Info>
          <Division />
          <Info>
            <Emoji>{getIcon(ultraFineDustCondition)}</Emoji>
            <GrayText>초미세먼지</GrayText>
            <Badge condition={ultraFineDustCondition}>
              {ultraFineDustCondition}
            </Badge>
            <p>{ultraFineDust} ㎍/m³</p>
          </Info>
        </InfoContainer>
      </Box>
    </Contents>
  );
};

const Contents = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  position: relative;

  h2 {
    margin-bottom: 16px;
  }
`;

const Box = styled.div`
  width: 384px;
  height: 224px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  overflow: hidden;
  text-align: center;
`;

const Emoji = styled.div`
  font-family: Tossface;
  font-size: 32px;
  user-select: none;
`;

const Info = styled.div`
  width: 40%;

  p:last-child {
    color: #0c0c0e;
    font-weight: 800;
    font-size: 16px;
    margin-top: 12px;
  }
`;

const GrayText = styled.p`
  color: #898a8f;
  font-weight: 600;
  font-size: 14px;
  margin: 8px 0;
`;

const Badge = styled.span`
  padding: 4px 8px;
  font-weight: 800;
  font-size: 14px;
  border: 2px solid
    ${({ condition }) =>
      condition === "좋음"
        ? "rgba(85, 195, 228, 0.4)"
        : condition === "보통"
        ? "rgba(95, 200, 105, 0.4)"
        : condition === "나쁨"
        ? "rgba(239, 160, 7, 0.4)"
        : "rgba(230, 60, 69, 0.4)"};
  border-radius: 16px;

  color: ${({ condition }) =>
    condition === "좋음"
      ? "#55C3E4"
      : condition === "보통"
      ? "#5FC869"
      : condition === "나쁨"
      ? "#EFA007"
      : "#E63C45"};
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

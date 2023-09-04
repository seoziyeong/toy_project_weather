import { useEffect, useState } from "react";
import styled from "styled-components";
import { Division } from "./atom/Division";
import useGetAirData from "../hooks/useGetAirData";
import { showFineDustCondition } from "../utils/showFineDustCondition";
import { showFineDustIcon } from "../utils/showFineDustIcon";
import { setColorHexCodeAirConditionBadge } from "../utils/setColorHexCodeAirConditionBadge";
import { AirBaseTypes } from "types/air/airTypes";

export const Air = () => {
  const airData: AirBaseTypes = useGetAirData();

  const [fineDust, setFineDust] = useState<string>("좋음");
  const [ultraFineDust, setUltraFineDust] = useState<string>("좋음");

  useEffect(() => {
    if (airData) {
      setFineDust(showFineDustCondition("fineDust", airData.pm10));
      setUltraFineDust(showFineDustCondition("ultraFineDust", airData.pm2_5));
    }
  }, [airData]);

  return (
    <>
      {airData && (
        <Contents>
          <h2>대기정보</h2>
          <Box>
            <InfoContainer>
              <Info>
                <Emoji>{showFineDustIcon(fineDust)}</Emoji>
                <GrayText>미세먼지</GrayText>
                <Badge $condition={fineDust}>{fineDust}</Badge>
                <p>{airData.pm10} ㎍/m³</p>
              </Info>
              <Division />
              <Info>
                <Emoji>{showFineDustIcon(ultraFineDust)}</Emoji>
                <GrayText>초미세먼지</GrayText>
                <Badge $condition={ultraFineDust}>{ultraFineDust}</Badge>
                <p>{airData.pm2_5} ㎍/m³</p>
              </Info>
            </InfoContainer>
          </Box>
        </Contents>
      )}
    </>
  );
};

const Contents = styled.div`
  margin-top: 32px;
  position: relative;

  h2 {
    margin-bottom: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 0px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-bottom: 32px;
  }
`;

const Box = styled.div`
  height: 224px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  text-align: center;
  @media ${({ theme }) => theme.device.desktop} {
    width: 384px;
  }
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

const Badge = styled.span<{ $condition: string }>`
  padding: 4px 8px;
  font-weight: 800;
  font-size: 14px;
  border: 2px solid ${({ $condition }) => setColorHexCodeAirConditionBadge($condition).border};
  border-radius: 16px;
  color: ${({ $condition }) => setColorHexCodeAirConditionBadge($condition).font};
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

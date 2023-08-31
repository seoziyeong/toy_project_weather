import styled from "styled-components";
import { Division } from "@components/atom/Division";
import useGetAirData from "@hooks/useGetAirData";
import { showFineDustCondition } from "@utils/showFineDustCondition";
import { showFineDustIcon } from "@utils/showFineDustIcon";

export const Air = () => {
  const airData = useGetAirData();

  return (
    <>
      {airData && (
        <Contents>
          <h2>대기정보</h2>
          <Box>
            <InfoContainer>
              <Info>
                <Emoji>{showFineDustIcon(showFineDustCondition("fineDust", airData.pm10))}</Emoji>
                <GrayText>미세먼지</GrayText>
                <Badge condition={airData.pm10}>{showFineDustCondition("fineDust", airData.pm10)}</Badge>
                <p>{airData.pm10} ㎍/m³</p>
              </Info>
              <Division />
              <Info>
                <Emoji>{showFineDustIcon(showFineDustCondition("fineDust", airData.pm2_5))}</Emoji>
                <GrayText>초미세먼지</GrayText>
                <Badge condition={airData.pm2_5}>{showFineDustCondition("fineDust", airData.pm2_5)}</Badge>
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
    condition === "좋음" ? "#55C3E4" : condition === "보통" ? "#5FC869" : condition === "나쁨" ? "#EFA007" : "#E63C45"};
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

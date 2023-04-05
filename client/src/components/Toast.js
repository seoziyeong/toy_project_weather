import { useEffect, useState } from "react";
import styled from "styled-components";

export const Toast = ({ weather, air }) => {
  useEffect(() => {
    if ((air && air === "나쁨") || (air && air === "매우나쁨")) {
      setStatus("dust");
    } else if (weather && weather.rain !== undefined) {
      setStatus("rain");
    } else if (weather && weather.main.feels_like >= 33) {
      setStatus("heatWave");
    } else if (weather && weather.main.temp <= -12) {
      setStatus("coldWave");
    }
  }, [weather, air]);

  console.log("weather", weather);

  const [status, setStatus] = useState("");

  function handleText() {
    if (status === "dust") {
      return `미세먼지가 심해요.
마스크를 꼭 착용해 주세요.`;
    } else if (status === "rain") {
      return `비가 내려요.
우산을 챙기면 좋겠어요.`;
    } else if (status === "heatWave") {
      return `아이고 더워! 폭염주의보 발동
되도록 외출을 삼가하세요.`;
    } else if (status === "coldWave") {
      return `아이고 추워! 한파주의보 발동
되도록 외출을 삼가하세요.`;
    }
  }

  function handleIcon() {
    if (status === "dust") {
      return "🚨";
    } else if (status === "rain") {
      return "🌂";
    } else if (status === "heatWave") {
      return "🥵";
    } else if (status === "coldWave") {
      return "🥶";
    }
  }

  if (status === "") {
    return <></>;
  }

  return (
    <StyledToast status={status}>
      <pre>{handleText()}</pre>
      <Icon>{handleIcon()}</Icon>
    </StyledToast>
  );
};

function getBGColorByStatus(status) {
  if (status === "dust") return "#FAC7CA";
  if (status === "rain") return "#9EC6FB";
  if (status === "heatWave") return "#FBBA88";
  if (status === "coldWave") return "#9EE5FB";
}

function getBorderColorByStatus(status) {
  if (status === "dust") return "#FDA8AE";
  if (status === "rain") return "#64A7FF";
  if (status === "heatWave") return "#FF9240";
  if (status === "coldWave") return "#64DAFF";
}

function getTextColorByStatus(status) {
  if (status === "dust") return "#E32939";
  if (status === "rain") return "#1262D7";
  if (status === "heatWave") return "#E45200";
  if (status === "coldWave") return "#009ACB";
}

const StyledToast = styled.div`
  padding: 24px 40px;
  margin: 40px 0 -36px 612px;
  width: 486px;
  height: 90px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ status }) => getTextColorByStatus(status)};
  border: 2px solid ${({ status }) => getBorderColorByStatus(status)};
  background-color: ${({ status }) => getBGColorByStatus(status)};

  pre {
    font-weight: 600;
    font-size: 18px;
    font-family: Pretendard Variable;
  }
`;

const Icon = styled.div`
  font-size: 34px;
  font-family: Tossface;
  user-select: none;
`;

import styled from "styled-components";
import { useState, useEffect } from "react";

const Today = ({ weather, air }) => {
  // * 주/야 설정
  const [isDay, setIsDay] = useState(true);
  useEffect(() => {
    if (weather && weather.dt > weather.sys.sunset) {
      setIsDay(false);
    }
  }, [weather, air]);

  // * 날씨 정보
  function showDescription(weather) {
    const description = weather.weather[0].icon.substr(0, 2);
    if (description == "01") {
      return "맑음";
    } else if (description == "02") {
      return "구름 조금";
    } else if (description == "03" || description == "04") {
      return "구름 많음";
    } else if (description == "09") {
      return "소나기";
    } else if (description == "10") {
      return "비";
    } else if (description == "11") {
      return "뇌우";
    } else if (description == "13") {
      return "눈";
    } else if (description == "50") {
      return "안개";
    }
  }

  return (
    <Banner isDay={isDay}>
      <Weather>
        {weather && <WeatherImg src={`./img/${weather.weather[0].icon}.png`} />}
        <Info isDay={isDay}>
          <p>현재</p>
          <TempInfo>
            <div>{weather && Math.round(weather.main.temp)}˚</div>
            <div>{weather && showDescription(weather)}</div>
          </TempInfo>
          <p>
            <img src="./img/icon_humidity.png" />
            습도 {weather && weather.main.humidity} %
          </p>
          <p>
            <img src="./img/icon_air.png" />
            미세먼지 {air}{" "}
          </p>
        </Info>
      </Weather>
      <WearedCard></WearedCard>
    </Banner>
  );
};

export default Today;

const Banner = styled.div`
  position: relative;
  display: flex;
  height: 320px;
  border-radius: 32px;
  background: ${({ isDay }) =>
    isDay
      ? "linear-gradient(180deg, #ffee58 0%, #ffdc5f 100%)"
      : "linear-gradient(180deg, #334981 0%, #452968 100%)"};
  box-shadow: 0px 0px 30px rgba(228, 229, 231, 0.1);
`;

const Weather = styled.div`
  width: 612px;
  padding-left: 102px;
  display: flex;
  align-items: center;
`;

const WeatherImg = styled.img`
  margin-right: 40px;
  animation: up-down 1s infinite ease-in-out alternate;
  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-12px);
    }
  }
`;

const Info = styled.div`
  color: ${({ isDay }) => (isDay ? "#0C0C0E" : "#FFFFFF")};
  p {
    opacity: 0.4;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 8px;
    display: flex;
    img {
      margin-right: 4px;
      filter: ${({ isDay }) => (isDay ? "invert()" : "")};
    }
  }
`;

const TempInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 32px;

  div:first-child {
    font-weight: 200;
    font-size: 64px;
    line-height: 64px;
  }
  div:last-child {
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  }
`;

const WearedCard = styled.div`
  position: absolute;
  width: 486px;
  height: 272px;
  right: 102px;
  top: 72px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
`;

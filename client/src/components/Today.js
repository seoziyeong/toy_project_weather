import styled from "styled-components";
import { useState, useEffect } from "react";
import { WearedCard } from "./WearedCard";
import { WeatherImg } from "./atom/WeatherImg";
import { getWeatherDescription } from "../utils/getWeatherDescription";

export const Today = ({ weather, air }) => {
  // * 주/야 설정
  const [isDay, setIsDay] = useState(true);
  useEffect(() => {
    if (weather && weather.weather[0].icon.includes("n")) {
      setIsDay(false);
    }
  }, [weather, air]);

  return (
    <Banner isDay={isDay}>
      <Weather>
        <WeatherImgBox>{weather && <WeatherImg src={`./img/${weather.weather[0].icon}.png`} />}</WeatherImgBox>
        <Info isDay={isDay}>
          <p>현재</p>
          <TempInfo>
            <div>{weather && Math.round(weather.main.temp)}˚</div>
            <div>{weather && getWeatherDescription(weather.weather[0].icon.substr(0, 2))}</div>
          </TempInfo>
          <p>
            <img src="./img/icon_humidity.png" alt="humidity" />
            습도 {weather && weather.main.humidity} %
          </p>
          <p>
            <img src="./img/icon_air.png" alt="air" />
            미세먼지 {air}
          </p>
        </Info>
      </Weather>
      <WearedCard weather={weather && Math.round(weather.main.temp)}></WearedCard>
    </Banner>
  );
};

const Banner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 320px;
  border-radius: 32px;
  background: ${({ isDay }) =>
    isDay ? "linear-gradient(180deg, #ffee58 0%, #ffdc5f 100%)" : "linear-gradient(180deg, #334981 0%, #452968 100%)"};
  box-shadow: 0px 0px 30px rgba(228, 229, 231, 0.1);
`;

const Weather = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 70%;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
    height: 100%;
    padding-left: 5%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-left: 8%;
  }
`;

const WeatherImgBox = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    scale: 65%;
    margin-left: -10%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    scale: 100%;
    margin-right: 10%;
  }
`;

// const WeatherImg = styled.img`
//   animation: up-down 1s infinite ease-in-out alternate;
//   @keyframes up-down {
//     from {
//       transform: translatey(0px);
//     }
//     to {
//       transform: translatey(-12px);
//     }
//   }

//   @media ${({ theme }) => theme.device.mobile} {
//     scale: 65%;
//     margin-left: -10%;
//   }
//   @media ${({ theme }) => theme.device.tablet} {
//     scale: 100%;
//     margin-right: 10%;
//   }
// `;

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

  div:first-child {
    font-weight: 200;
    line-height: 64px;
  }
  div:last-child {
    font-weight: 400;
    line-height: 30px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 16px;

    div: first-child {
      font-size: 48px;
    }
    div:last-child {
      font-size: 16px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 32px;

    div: first-child {
      font-size: 64px;
    }
    div:last-child {
      font-size: 24px;
    }
  }
`;

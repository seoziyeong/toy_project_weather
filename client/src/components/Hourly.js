import styled from "styled-components";
import React, { useState } from "react";
import { Division } from "./atom/Division";
import { GrayText } from "./atom/GrayText";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getHourTime } from "../utils/getHourTime";

export const Hourly = ({ hour }) => {
  const hourData = hour.slice(0, 14);

  // * desktop 슬라이드
  const [moveIndex, setMoveIndex] = useState("1");

  const leftMove = () => {
    setMoveIndex("1");
  };
  const rightMove = () => {
    setMoveIndex("2");
  };

  return (
    <Contents>
      <SlideButton onClick={leftMove}>
        <img src="./img/icon_prev.png" alt="" />
      </SlideButton>
      <SlideButton onClick={rightMove}>
        <img src="./img/icon_next.png" alt="" />
      </SlideButton>
      <h2>시간대별 날씨</h2>
      <Box>
        <List moveIndex={moveIndex}>
          {hourData.map((hour, index) => {
            if (hour.dt_txt.split(" ")[1].slice(0, 2) === "21") {
              return (
                <React.Fragment key={index}>
                  <Unit>
                    <GrayText>{getHourTime(hour)}</GrayText>
                    <p>{getWeatherIcon(hour.weather[0].icon)}</p>
                    <p>{Math.round(hour.main.temp)}˚</p>
                    <p>
                      <img src="./img/icon_humidity2.png" alt="" />
                      {hour.main.humidity}%
                    </p>
                  </Unit>
                  <Division />
                </React.Fragment>
              );
            } else {
              return (
                <Unit key={index}>
                  <GrayText>{getHourTime(hour)}</GrayText>
                  <p>{getWeatherIcon(hour.weather[0].icon)}</p>
                  <p>{Math.round(hour.main.temp)}˚</p>
                  <p>
                    <img src="./img/icon_humidity2.png" alt="" />
                    {hour.main.humidity}%
                  </p>
                </Unit>
              );
            }
          })}
          <div></div>
        </List>
      </Box>
    </Contents>
  );
};

const SlideButton = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(12, 12, 14, 0.1);
  border-radius: 40px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  position: absolute;
  z-index: 2;

  :hover {
    box-shadow: 0px 0px 10px rgba(12, 12, 14, 0.3);
    transition: all ease 0.3s;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: block;
    transform: ${(props) => (props.moveIndex === "1" ? "translateX(0%)" : "translateX(-12%)")};
  }
`;

const Contents = styled.div`
  margin-top: 56px;
  position: relative;

  h2 {
    margin-bottom: 16px;
  }

  ${SlideButton}:nth-child(1) {
    left: -20px;
    top: 134px;
  }
  ${SlideButton}:nth-child(2) {
    right: -20px;
    top: 134px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 224px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 56px;
  }
`;

const Box = styled.div`
  height: 216px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  transition: all ease 1s;

  div:last-child {
    padding-right: 36px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    transform: ${(props) => (props.moveIndex === "1" ? "translateX(0%)" : "translateX(-10%)")};
  }
`;

const Unit = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p:nth-child(2) {
    width: 64px;
    height: 43px;
    user-select: none;
    margin: 16px 0;
    font-size: 34px;
    font-family: Tossface;
  }
  p:nth-child(3) {
    color: #0c0c0c;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 12px;
  }
  p:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c0c0c;
    opacity: 0.3;
    font-weight: 700;
    font-size: 12px;

    img {
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }
  }
`;

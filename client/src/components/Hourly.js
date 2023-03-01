import styled from "styled-components";
import { useState } from "react";

const Hourly = ({ hour }) => {
  const hourData = hour.slice(0, 14);

  // * 슬라이드
  const [moveIndex, setMoveIndex] = useState("1");

  const leftMove = () => {
    setMoveIndex("1");
  };
  const rightMove = () => {
    setMoveIndex("2");
  };

  // * 현재 시간 텍스트 추출
  function getDayTime(hour) {
    let daytime;
    if (hour.sys.pod == "d") daytime = "오전";
    else if (hour.sys.pod == "n") daytime = "오후";
    let dtText = hour.dt_txt.split(" ")[1].slice(0, 2);
    if (dtText > 12) {
      dtText -= 12;
      dtText = "0" + dtText;
    }
    const result = `${daytime} ${dtText}시`;
    return result;
  }

  // * 아이콘 매칭
  function getIcon(hour) {
    const icon = hour.weather[0].icon;
    if (icon == "01d") return "☀";
    else if (icon == "02d") return "🌤";
    else if (icon == "10d") return "🌦";
    else if (icon == "01n") return "🌙";
    else if (icon == "02n") return <img src="./img/custom_02n.png" />;
    else if (icon == "10n") return <img src="./img/custom_10n.png" />;
    else if (icon == "03d" || icon == "03n" || icon == "04d" || icon == "04n")
      return "☁️";
    else if (icon == "09d" || icon == "09n") return "🌧"; // 소나기
    else if (icon == "13d" || icon == "13n") return "❄️";
    else if (icon == "50d" || icon == "50n") return "🌫"; // 안개
  }

  return (
    <Contents>
      <SlideButton onClick={leftMove}>
        <img src="./img/icon_prev.png" />
      </SlideButton>
      <SlideButton onClick={rightMove}>
        <img src="./img/icon_next.png" />
      </SlideButton>
      <h2>시간대별 날씨</h2>
      <Box>
        <List moveIndex={moveIndex}>
          {hourData.map((v, i) => {
            if (v.dt_txt.split(" ")[1].slice(0, 2) == 21) {
              return (
                <>
                  <Unit key={i}>
                    <p>{getDayTime(v)}</p>
                    <p>{getIcon(v)}</p>
                    <p>{Math.round(v.main.temp)}˚</p>
                    <p>
                      <img src="./img/icon_humidity2.png" />
                      {v.main.humidity}%
                    </p>
                  </Unit>
                  <Division key={"div" + i} />
                </>
              );
            } else {
              return (
                <Unit key={i}>
                  <p>{getDayTime(v)}</p>
                  <p>{getIcon(v)}</p>
                  <p>{Math.round(v.main.temp)}˚</p>
                  <p>
                    <img src="./img/icon_humidity2.png" />
                    {v.main.humidity}%
                  </p>
                </Unit>
              );
            }
          })}
        </List>
      </Box>
    </Contents>
  );
};

export default Hourly;

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
`;

const Contents = styled.div`
  margin-top: 32px;
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
`;

const Box = styled.div`
  height: 216px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  transform: ${(props) =>
    props.moveIndex == "1" ? "translateX(0%)" : "translateX(-13%)"};
  transition: all ease 1s;
`;

const Unit = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p:nth-child(1) {
    width: 64px;
    color: #898a8f;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  p:nth-child(2) {
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

const Division = styled.div`
  width: 2px;
  height: 136px;
  background: #ffffff;
  border: 1px dashed #e4e7ee;
`;

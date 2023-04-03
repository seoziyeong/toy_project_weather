import styled from "styled-components";
import { useEffect, useState } from "react";
import { Division } from "./atom/Division";
import { GrayText } from "./atom/GrayText";
import React from "react";
import { getIcon } from "../utils/getIcon";

export const Weekly = ({ hour }) => {
  // useEffect(() => {
  // }, [hour]);

  // let day = new Date(2016, a-1, b);
  // const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // let week = WEEKDAY[day.getDay()];

  const groupBy = function (data, key) {
    return data.reduce(function (v, e) {
      var group = e[key];

      if (v[group] === undefined) {
        v[group] = [];
      }

      v[group].push(e);
      return v;
    }, {});
  };

  const groupByData = groupBy(hour, "day");
  const keyList = Object.keys(groupByData);

  let allTemp = [];
  let allHumidity = [];
  let allIcons = [];
  keyList.map((k, i) => {
    let tempList = [];
    let humidityList = [];
    let iconList = [];
    groupByData[k].map((v, i) => {
      tempList.push(Math.round(v.main.temp));
      humidityList.push(v.main.humidity);
      iconList.push(v.weather[0].icon);
    });
    allTemp.push(tempList);
    allHumidity.push(humidityList);
    allIcons.push(iconList);
  });
  console.log("allIcons", allIcons);

  function getMaxTemp(temp) {
    const max = Math.max(...temp);
    temp.indexOf(max, 0);
    return max;
  }
  function getMinTemp(temp) {
    const min = Math.min(...temp);
    return min;
  }

  function getMaxTempIcon(temp, max, icons) {
    const num = temp.indexOf(max, 0);
    return getIcon(icons[num]);
  }

  function getMinTempIcon(temp, min, icons) {
    const num = temp.indexOf(min, 0);
    return getIcon(icons[num]);
  }

  function getMaxHuminity(humidity) {
    const max = Math.max(...humidity);
    return max;
  }

  console.log("groupByData", groupByData);
  return (
    <Contents>
      <h2>주간 날씨</h2>
      <Box>
        <List>
          {keyList.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <Unit>
                  <GrayText>{v}</GrayText>
                  <p>
                    <span>
                      {getMaxTempIcon(
                        allTemp[i],
                        getMaxTemp(allTemp[i]),
                        allIcons[i]
                      )}
                    </span>
                    <span>
                      {getMinTempIcon(
                        allTemp[i],
                        getMinTemp(allTemp[i]),
                        allIcons[i]
                      )}
                    </span>
                  </p>
                  <p>
                    <span>{getMaxTemp(allTemp[i])}˚</span>
                    <span>{getMinTemp(allTemp[i])}˚</span>
                  </p>
                  <p>
                    <img src="./img/icon_humidity2.png" alt="" />
                    {getMaxHuminity(allHumidity[i])}%
                  </p>
                </Unit>
              </React.Fragment>
            );
          })}
        </List>
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
  width: 792px;
  height: 384px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  overflow: hidden;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
`;

const Unit = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p:nth-child(2) {
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100px;
    height: 43px;
    user-select: none;
    margin: 16px 0;
    font-size: 34px;
    font-family: Tossface;
    scale: 75%;
  }
  p:nth-child(3) {
    display: flex;
    justify-content: center;
    gap: 8px;
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

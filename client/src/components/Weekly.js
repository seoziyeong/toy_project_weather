import styled from "styled-components";
import { useEffect, useState } from "react";
import { Division } from "./atom/Division";
import { GrayText } from "./atom/GrayText";

export const Weekly = ({ hour }) => {
  console.log(hour);
  // useEffect(() => {
  //
  // }, []);

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
  const groupByData = groupBy(hour, "date");

  return (
    <Contents>
      <h2>주간 날씨</h2>
      <Box>asdf</Box>
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrayText } from "@components/atom/GrayText";
import useGetHourlyData from "@hooks/useGetHourlyData";
import { groupByDayOfWeek } from "@utils/groupByDayOfWeek";
import { groupWeeklyDataByObj } from "@utils/groupWeeklyDataByObj";
import { setIconForMaxAndMinTemp } from "@utils/setIconForMaxAndMinTemp";
import { filterMaxAndMinOfTemp } from "@utils/filterMaxAndMinOfTemp";
import { filterMaxHumidity } from "@utils/filterMaxHumidity";
import { addHourToList } from "@utils/addHourToList";

export const Weekly = () => {
  const hourlyData = useGetHourlyData();
  const [keyList, setKeyList] = useState([]);
  const [allDetails, setAllDetails] = useState({});

  useEffect(() => {
    if (hourlyData) {
      const addHourToListData = addHourToList(hourlyData);
      const groupByData = groupByDayOfWeek(addHourToListData, "day");
      const tempKeyList = Object.keys(groupByData);
      setKeyList(tempKeyList);
      setAllDetails(groupWeeklyDataByObj(groupByData, tempKeyList));
    }
  }, [hourlyData]);

  return (
    <>
      {hourlyData && (
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
                          {setIconForMaxAndMinTemp(
                            "max",
                            allDetails.temps[i],
                            filterMaxAndMinOfTemp(allDetails.temps[i]).max,
                            allDetails.icons[i]
                          )}
                        </span>
                        <span>
                          {setIconForMaxAndMinTemp(
                            "min",
                            allDetails.temps[i],
                            filterMaxAndMinOfTemp(allDetails.temps[i]).min,
                            allDetails.icons[i]
                          )}
                        </span>
                      </p>
                      <p>
                        <span>{filterMaxAndMinOfTemp(allDetails.temps[i]).max}˚</span>
                        <span>{filterMaxAndMinOfTemp(allDetails.temps[i]).min}˚</span>
                      </p>
                      <p>
                        <img src="./img/icon_humidity2.png" alt="" />
                        {filterMaxHumidity(allDetails.humiditys[i])}
                      </p>
                    </Unit>
                  </React.Fragment>
                );
              })}
            </List>
          </Box>
        </Contents>
      )}
    </>
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
  height: 224px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 792px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-between;
    div:last-child {
      padding-right: 36px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div:last-child {
      padding-right: 0px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: center;
  }
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

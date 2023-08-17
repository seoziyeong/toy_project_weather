import styled from "styled-components";
import useGetCurrentData from "../hooks/useGetCurrentData";

export const Footer = () => {
  const currentData = useGetCurrentData();

  return (
    <>
      {currentData && (
        <Copyright>
          <p>접속 지역 : {currentData.sys.country}</p>
          <p>api : openweathermap</p>
          <p>icon source : tossface</p>
          <p>제작 : 서지영</p>
        </Copyright>
      )}
    </>
  );
};

const Copyright = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  font-size: 13px;
  line-height: 14px;
  color: #898a8f;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

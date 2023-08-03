import styled from "styled-components";
import { getDateInfo } from "../utils/getDateInfo";

export const Location = ({ weather }) => {
  return (
    <Header>
      <City>
        <img src={`./img/icon_location.png`} alt="location" />
        <h4>{weather && weather.name ? weather.name : ""}</h4>
      </City>
      <h4>{getDateInfo()}</h4>
    </Header>
  );
};

const Header = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const City = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 8px;
  }
`;

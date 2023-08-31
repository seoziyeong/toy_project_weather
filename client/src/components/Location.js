import styled from "styled-components";
import { setDateInfo } from "@utils/setDateInfo";
import useGetCurrentData from "@hooks/useGetCurrentData";

export const Location = () => {
  const currentData = useGetCurrentData();

  return (
    <Header>
      {currentData && (
        <>
          <City>
            <img src={`./img/icon_location.png`} alt="location" />
            <h4>{currentData.name ? currentData.name : ""}</h4>
          </City>
          <h4>{setDateInfo()}</h4>
        </>
      )}
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

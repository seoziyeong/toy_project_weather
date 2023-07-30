import styled from "styled-components";

export const Location = ({ weather }) => {
  // * 오늘 날짜 / 시간
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()];
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const dateString =
    month + "월 " + day + "일(" + dayOfWeek + ") " + hours + ":" + minutes;

  return (
    <Header>
      <City>
        <img src={`./img/icon_location.png`} alt="location" />
        <h4>{weather && weather.name ? weather.name : ""}</h4>
      </City>

      <h4>{dateString}</h4>
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

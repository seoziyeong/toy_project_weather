import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Location } from "./components/Location";
import { Today } from "./components/Today";
import { Hourly } from "./components/Hourly";
import { Air } from "./components/Air";
import styled, { ThemeProvider } from "styled-components";
import { Weekly } from "./components/Weekly";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";
import theme from "./utils/theme";

function App() {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  console.log(API_URL);
  const [weather, setWeather] = useState(null); // 현재 날씨
  const [hour, setHour] = useState([]); // 시간대별 날씨
  const [fineDust, setFineDust] = useState(null); // 미세먼지
  const [ultraFineDust, setUltraFineDust] = useState(null); // 초미세먼지
  const [air, setAir] = useState("-"); // 대기 질 지수

  async function getData() {
    function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      Promise.all(
        [
          `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
          `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
          `${API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        ].map((url) => axios.get(url))
      ).then(
        axios.spread((res1, res2, res3) => {
          // res1 : 현재 날씨정보
          setWeather(res1.data);

          // res2 : 시간대별 날씨
          const WEEKDAY = [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
          ];
          let dayHour = [...res2.data.list];
          for (let row of dayHour) {
            row["day"] = WEEKDAY[new Date(row.dt_txt.split(" ")[0]).getDay()];
          }

          setHour(dayHour);

          // res3 : 미세먼지 정보
          setFineDust(res3.data.list[0].components.pm10);
          setUltraFineDust(res3.data.list[0].components.pm2_5);
          if (res3.data.list[0].components.pm10 <= 30) setAir("좋음");
          else if (res3.data.list[0].components.pm10 <= 80) setAir("보통");
          else if (res3.data.list[0].components.pm10 <= 150) setAir("나쁨");
          else if (res3.data.list[0].components.pm10 >= 151)
            setAir("매우 나쁨");
        })
      );
    }

    function onGeoError() {
      alert("위치를 찾을 수 없네요. 날씨 정보를 알려드릴 수 없어요. 😥");
    }
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Test>asdf</Test>
      <Location weather={weather} />
      <Today weather={weather} air={air} />
      <Toast weather={weather} air={air} />
      <Hourly hour={hour} />
      <Container>
        <Air fineDust={fineDust} ultraFineDust={ultraFineDust} />
        <Weekly hour={hour} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Test = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    background-color: pink;
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-color: blue;
  }
  @media ${({ theme }) => theme.device.desktop} {
    background-color: red;
  }
`;

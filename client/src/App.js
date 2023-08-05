import axios from "axios";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { weatherApi } from "./api";
import theme from "./utils/theme";
import { getEndPoint } from "./utils/getEndPoint";
import { getHourList } from "./utils/getHourList";
import { getFineDustCondition } from "./utils/getFineDustCondition";
import { Location } from "./components/Location";
import { Today } from "./components/Today";
import { Hourly } from "./components/Hourly";
import { Air } from "./components/Air";
import { Weekly } from "./components/Weekly";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";

function App() {
  const [weather, setWeather] = useState(null); // 현재 날씨
  const [hour, setHour] = useState([]); // 시간대별 날씨
  const [fineDust, setFineDust] = useState(null); // 미세먼지
  const [ultraFineDust, setUltraFineDust] = useState(null); // 초미세먼지
  const [air, setAir] = useState("-"); // 대기 질 지수

  async function getData() {
    function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      axios
        .all([
          weatherApi.getCurrentRequest(getEndPoint("current", lat, lon)),
          weatherApi.getHourlyRequest(getEndPoint("hourly", lat, lon)),
          weatherApi.getAirRequest(getEndPoint("air", lat, lon)),
        ])
        .then(
          axios.spread((current, hourly, air) => {
            setWeather(current.data);
            setHour(getHourList(hourly));
            setFineDust(air.data.list[0].components.pm10);
            setUltraFineDust(air.data.list[0].components.pm2_5);
            setAir(getFineDustCondition("fineDust", air.data.list[0].components.pm10));
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

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.desktop} {
    gap: 24px;
    flex-direction: row;
  }
`;

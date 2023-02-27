import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Location from "./components/Location";
import Today from "./components/Today";

function App() {
  const API_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "930c9f8d035adb6eaf38cd659c750b69";

  const [weather, setWeather] = useState(null); // 현재 날씨
  const [fineDust, setFineDust] = useState(null); // 미세먼지
  const [ultraFineDust, setUltraFineDust] = useState(null); // 초미세먼지
  const [air, setAir] = useState("좋음"); // 대기 질 지수

  async function getData() {
    function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      Promise.all(
        [
          `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`,
          `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`,
          `${API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        ].map((url) => axios.get(url))
      ).then(
        axios.spread((res1, res2, res3) => {
          // * res1 : 현재 날씨정보
          setWeather(res1.data);
          console.log("현재:", res1.data);

          // res2 : 5일간 날씨정보
          // console.log("5일데이터:", res2.data);
          // 3시간 간격 시간대별 날씨
          // 주별날씨로 가공하기 :

          // res3 : 미세먼지 정보
          setFineDust(res3.data.list[0].components.pm10);
          setUltraFineDust(res3.data.list[0].components.pm2_5);

          const air = res3.data.list[0].main.aqi;
          console.log(air);
          if (air == 2 || air == 3) {
            setAir("보통");
          } else if (air == 4) {
            setAir("나쁨");
          } else if (air == 5) {
            setAir("매우 나쁨");
          }
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

  // console.log("미세:", fineDust, "초미세:", ultraFineDust);

  return (
    <>
      <Location weather={weather} />
      <Today weather={weather} air={air} />
      <div className="time">
        <h2>시간대별 날씨</h2>
        <div className="content"></div>
      </div>
      <div>
        <div className="dust">
          <h2>미세먼지</h2>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
}

export default App;

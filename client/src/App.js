import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const API_KEY = "930c9f8d035adb6eaf38cd659c750b69";
  const [weather, setWeather] = useState(null); //

  const [fineDust, setFineDust] = useState(null); // 미세먼지
  const [ultraFineDust, setUltraFineDust] = useState(null); // 초미세먼지

  async function getData() {
    function onGeoOk(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      Promise.all(
        [
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`,
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`,
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        ].map((url) => axios.get(url))
      ).then(
        axios.spread((res1, res2, res3) => {
          // res1 : 현재 날씨정보
          setWeather(res1.data);
          console.log("현재:", res1.data);

          // res2 : 5일간 날씨정보
          console.log("5일데이터:", res2.data);
          // 3시간 간격 시간대별 날씨
          // 주별날씨로 가공하기 :

          // res3 : 미세먼지 정보
          setFineDust(res3.data.list[0].components.pm10);
          setUltraFineDust(res3.data.list[0].components.pm2_5);
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

  console.log("미세:", fineDust, "초미세:", ultraFineDust);
  return (
    <>
      <div className="header">
        <h4>{weather && weather.name ? weather.name : ""}</h4>
        <h4>2월 20일(월) 18:30</h4>
      </div>
      <div className="mainbanner">
        {weather && <img src={`./img/${weather.weather[0].icon}.png`} />}
        <div className="wearedCard"></div>
      </div>
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

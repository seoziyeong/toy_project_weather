![coverr](https://github.com/seoziyeong/toy_project_weather/assets/119486106/5f721c1b-9feb-4619-b4a5-d7250386e71c)

# ☀️ 날씨와옷차림

```
🔔 날씨와옷차림 서비스는 위치기반 날씨정보를 제공하는 MVP 기능을 구현 후
작은 볼륨이지만 지속적으로 개선/업데이트 하고 있는 토이 프로젝트 입니다.

- 2023.04  기상 특수상황(ex. 폭염주의보, 한파특보 등) 알림 toast 기능 추가
- 2023.08  반응형 ui 구현
- 진행 중 : TypeScript Migration
- 구현 예정 : 다크모드
```

## Overview.

개인 토이 프로젝트 입니다.
OpenWeatherMap api를 활용하여 현재 접속 지역의 날씨 정보를 제공하고, 날씨에 맞는 옷차림을 추천해주는 웹 서비스를 개발했습니다.

- 목표
  - [OpenWeather API](https://openweathermap.org/api)를 활용하여 날씨정보 제공
  - 현재 접속한 사용자의 위치 정보를 수집해 위치에 맞는 날씨정보 제공
- 성과 및 배운 점
  - Open API를 활용한 데이터 통신, 동시에 여러 API를 호출하는 멀티 리퀘스트 경험
  - 기상 특수상황(ex. 폭염주의보, 한파특보 등) 알림 toast
  - 반응형 레이아웃 구현
  - 과거 코드의 문제점을 파악하고 리팩토링 해본 경험
  - 지속적으로 서비스를 개선하고 업데이트하는 경험 → 진행 중!

### Tech.

- `프론트엔드` : JavaScript, React, Styled-components, OpenWeatherMap api
- `기획 & 디자인` : Figma

<br>

## Function.

✔️ 사용자 접속 위치 수집 및 위치 기반 정보 제공

✔️ 현재 날씨, 습도, 미세먼지 정보 제공

✔️ 현재 날씨를 토대로 옷차림 추천

✔️ 시간대별 날씨 정보 제공 (3시간 간격)

✔️ 주간 날씨 정보 제공

+ ✔️ 기상 특수상황 알림 toast

+ ✔️ 반응형 ui

<br>

## Description.

![화면 기록 2023-08-16 오전 10 02 01](https://github.com/seoziyeong/toy_project_weather/assets/119486106/9a82e231-1d3a-425a-806b-5e803013d396)
![Untitled](https://github.com/seoziyeong/toy_project_weather/assets/119486106/b117d112-5a0e-473f-a912-bb28abbde73b)

**Features**

- 1️⃣ 위치 정보 : 현재 위치정보를 보여줍니다.
- 2️⃣ 현재 날씨 : 현재 기온과 날씨 상태, 습도, 미세먼지 정보를 일러스트로 보여줍니다.
  - 박스의 배경컬러는 접속 위치의 일몰시간을 기준으로 낮/밤에 따라 다르게 보여집니다.
    <img width="486" alt="스크린샷 2023-08-17 오후 10 17 57" src="https://github.com/seoziyeong/toy_project_weather/assets/119486106/25ef52e7-0dca-424d-90fb-5e20ddd2b05b">
  - OpenWeatherMap api가 제공하는 아이콘 일러스트가 있지만, 서비스의 컨셉에 맞게 날씨코드별로 커스텀해서 제공합니다.
    또한, 두둥실 떠다니는 애니메이션을 적용했습니다.
- 3️⃣ 옷차림 추천 : 현재 기온에 알맞은 코멘트와 옷차림을 추천하는 카드 입니다.
- 4️⃣ 시간대별 날씨 : 시간대별 날씨를 3시간 간격으로 제공합니다. tablet, mobile 버전에서는 가로 드래그 스크롤로 데이터를 볼 수 있습니다.
- 5️⃣ 대기 정보 : 미세먼지와 초미세먼지 정보를 제공합니다.
- 6️⃣ 주간 날씨 : 한 주간의 날씨 최고/최저 온도 정보를 제공합니다.
- 알림 toast : 기상 특수 상황(ex. 폭염주의보, 한파특보 등)시 하단에 toast 알림을 제공합니다. toast는 클릭해서 닫을 수 있습니다.

    <img src="https://github.com/seoziyeong/toy_project_weather/assets/119486106/373eebbf-1b63-4a64-b7b5-41f240e72487" width="60%">

    <img src="https://github.com/seoziyeong/toy_project_weather/assets/119486106/197f2c4d-8c60-45bd-a241-98f4069e1578" width="60%">

<br>

## Link.

**🔗 [배포링크](https://toy-project-weather.vercel.app/)**

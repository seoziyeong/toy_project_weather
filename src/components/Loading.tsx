import styled from "styled-components";
import { WeatherImg } from "../components/atom/WeatherImg";

export const Loading = () => {
  return (
    <Container>
      <WeatherImgBox>
        <WeatherImg src={`./img/01d.png`} />
      </WeatherImgBox>
      <LoadingText>LOADING...</LoadingText>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const WeatherImgBox = styled.div`
  scale: 80%;
  filter: grayscale();
`;

const LoadingText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #0c0c0e;
  opacity: 0.3;
`;

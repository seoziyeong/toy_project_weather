import styled from "styled-components";

export const WeatherImg = styled.img`
  animation: up-down 1s infinite ease-in-out alternate;
  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-12px);
    }
  }
`;

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

  /* @media ${({ theme }) => theme.device.mobile} {
    scale: 65%;
    margin-left: -10%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    scale: 100%;
    margin-right: 10%;
  } */
`;

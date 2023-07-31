import styled from "styled-components";

export const Footer = () => {
  return <Copyright>api 제공 : openweathermap | 제작 : 서지영</Copyright>;
};

const Copyright = styled.div`
  margin-top: 16px;
  font-size: 13px;
  line-height: 14px;
  color: #898a8f;
  text-align: center;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 144px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 48px;
  }
`;

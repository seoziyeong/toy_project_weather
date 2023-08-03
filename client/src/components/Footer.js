import styled from "styled-components";

export const Footer = () => {
  return <Copyright>api 제공 : openweathermap | 제작 : 서지영</Copyright>;
};

const Copyright = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  font-size: 13px;
  line-height: 14px;
  color: #898a8f;
  text-align: center;
`;

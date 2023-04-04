import styled from "styled-components";

export const Footer = () => {
  return (
    <Copyright>
      api 제공 : openweathermap | 제작 : 서지영 (
      <a href="https://github.com/seoziyeong" target="_blank" rel="noreferrer">
        github
      </a>
      )
    </Copyright>
  );
};

const Copyright = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  font-size: 13px;
  line-height: 14px;
  color: #898a8f;
  text-align: center;

  a:link,
  a:visited {
    color: #898a8f;
  }

  a:hover {
    color: #b9bac2;
  }
`;

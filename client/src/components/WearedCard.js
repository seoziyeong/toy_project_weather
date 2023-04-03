import styled from "styled-components";
import { GrayText } from "./atom/GrayText";

export const WearedCard = ({ weather }) => {
  function handleTitle() {
    if (weather >= 30) {
      return `매우 더운 한여름 날씨!
가볍게 입되 자외선 차단에 신경쓰세요.`;
    } else if (weather >= 27) {
      return `꽤 덥게 느껴져요.
옷차림을 가볍게 입어도 좋겠어요.`;
    } else if (weather >= 20) {
      return `따뜻한 날씨예요.
얇은 겉옷을 챙기셔도 좋아요. `;
    } else if (weather >= 17) {
      return `활동하기 좋은 날씨예요.
그래도 옷차림은 든든히!`;
    } else if (weather >= 12) {
      return `선선한 날씨예요.
간절기 겉옷을 꼭 챙기세요. `;
    } else if (weather >= 10) {
      return `조금 쌀쌀해요.
얇게 여러겹 껴입는 게 좋겠어요.`;
    } else if (weather >= 6) {
      return `꽤 춥게 느껴져요.
추위를 막아주는 옷을 입어야 해요.`;
    } else if (weather <= 2) {
      return `매우 추운 한겨울 날씨!
따뜻히 입어서 대비해야 해요.`;
    }
  }

  return (
    <WearedCardStyled>
      <GrayText>오늘은</GrayText>
      <Title>{handleTitle()}</Title>
    </WearedCardStyled>
  );
};

const WearedCardStyled = styled.div`
  position: absolute;
  width: 486px;
  height: 272px;
  right: 102px;
  top: 72px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(12, 12, 14, 0.03);
  border-radius: 32px;
  padding: 40px;
`;

const Title = styled.pre`
  font-weight: 700;
  font-size: 24px;
  color: #0c0c0e;
  margin: 24px 0;
  font-family: Pretendard Variable;
`;

import { useState } from "react";
import styled from "styled-components";
import useGetAirData from "../hooks/useGetAirData";
import useGetCurrentData from "../hooks/useGetCurrentData";
import { getToastStatus } from "../utils/getToastStatus";
import { getToastText } from "../utils/getToastText";
import { getToastIcon } from "../utils/getToastIcon";
import { getToastCssColors } from "../utils/getToastCssColors";

export const Toast = () => {
  const currentData = useGetCurrentData();
  const airData = useGetAirData();
  const status = getToastStatus(currentData, airData);

  const [position, setPosition] = useState(true);
  function handleClose() {
    setPosition(!position);
  }

  if (status === "") {
    return <></>;
  }

  return (
    <StyledToast
      status={status}
      position={position}
      onClick={() => {
        if (position) handleClose();
      }}
    >
      <pre>{getToastText(status)}</pre>
      <Icon>{getToastIcon(status)}</Icon>
    </StyledToast>
  );
};

const StyledToast = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  padding: 24px 40px;
  height: 90px;
  border-radius: 32px;
  display: ${({ status }) => (status ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  color: ${({ status }) => status && getToastCssColors(status).font};
  border: 2px solid ${({ status }) => status && getToastCssColors(status).border};
  background-color: ${({ status }) => status && getToastCssColors(status).bg};
  opacity: 0.9;

  @keyframes positionHidden {
    from {
      transform: translateY(0);
      opacity: 0.9;
    }
    to {
      transform: translateY(50%);
      opacity: 0;
    }
  }
  animation: ${({ position }) => {
    if (!position) return "positionHidden 1s";
  }};
  animation-fill-mode: forwards; // animation from 상태로 되돌아가지 않음

  pre {
    font-weight: 600;
    font-size: 18px;
    font-family: Pretendard Variable;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    right: 5%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 57.5%;
    width: 400px;
    right: 16px;
  }
`;

const Icon = styled.div`
  font-size: 34px;
  font-family: Tossface;
  user-select: none;
`;

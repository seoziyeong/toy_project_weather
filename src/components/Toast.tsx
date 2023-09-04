import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetAirData from "../hooks/useGetAirData";
import useGetCurrentData from "../hooks/useGetCurrentData";
import { setToastStatus } from "../utils/setToastStatus";
import { showAdviceInToast } from "../utils/showAdviceInToast";
import { showToastIcon } from "../utils/showToastIcon";
import { setColorHexCodeForToast } from "../utils/setColorHexCodeForToast";
import { CurrentBaseTypes } from "types/current/currentTypes";
import { AirBaseTypes } from "types/air/airTypes";
import { ToastStatusTypes } from "types/common/ToastStatusTypes";

export const Toast = () => {
  const currentData: CurrentBaseTypes = useGetCurrentData();
  const airData: AirBaseTypes = useGetAirData();

  const [position, setPosition] = useState(true);
  const [status, setStatus] = useState<ToastStatusTypes>("ordinary");

  useEffect(() => {
    if (currentData) {
      setStatus(setToastStatus(currentData, airData));
    }
  }, [currentData]);

  function handleClose() {
    setPosition(!position);
  }

  return (
    <>
      {currentData && airData && (
        <StyledToast
          $status={status}
          $position={position}
          onClick={() => {
            if (position) handleClose();
          }}
        >
          <pre>{showAdviceInToast(status)}</pre>
          <Icon>{showToastIcon(status)}</Icon>
        </StyledToast>
      )}
    </>
  );
};

const StyledToast = styled.div<{ $status: ToastStatusTypes; $position: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  padding: 24px 40px;
  height: 90px;
  border-radius: 32px;
  display: ${({ $status }) => ($status !== "ordinary" ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  color: ${({ $status }) => setColorHexCodeForToast($status).font};
  border: 2px solid ${({ $status }) => setColorHexCodeForToast($status).border};
  background-color: ${({ $status }) => setColorHexCodeForToast($status).bg};
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
  animation: ${({ $position }) => {
    if (!$position) return "positionHidden 1s";
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

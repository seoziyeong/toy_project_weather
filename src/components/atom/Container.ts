import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.desktop} {
    gap: 24px;
    flex-direction: row;
  }
`;

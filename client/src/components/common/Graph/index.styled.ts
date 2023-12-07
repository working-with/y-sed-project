import styled, { css } from "styled-components";
import { GraphProps } from ".";

export const Body = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
`;

export const GraphItem = styled.div<GraphProps>`
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.PALETTE.orange[400]};
  }
  ${({ clicked }) =>
    clicked
      ? css`
          background: ${({ theme }) => theme.PALETTE.orange[400]};
        `
      : css`
          background: ${({ theme }) => theme.PALETTE.gray};
        `}
`;

export const First = styled(GraphItem)`
  width: 250px;
  height: 250px;
`;

export const Second = styled(GraphItem)`
  width: 325px;
  height: 325px;
`;

export const Third = styled(GraphItem)`
  width: 426px;
  height: 425px;
`;

export const Fourth = styled(GraphItem)`
  width: 550px;
  height: 550px;
`;

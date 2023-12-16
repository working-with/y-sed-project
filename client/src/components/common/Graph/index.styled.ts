import styled, { css } from "styled-components";
import { GraphProps } from ".";

export const Body = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const GraphItem = styled.div<GraphProps>`
  border-radius: 24px;
  cursor: pointer;

  > div:hover {
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
  width: 9rem;
  height: 9rem;
`;

export const Second = styled(GraphItem)`
  width: 12rem;
  height: 12rem;
`;

export const Third = styled(GraphItem)`
  width: 15rem;
  height: 15rem;
`;

export const Fourth = styled(GraphItem)`
  width: 18rem;
  height: 18rem;
`;

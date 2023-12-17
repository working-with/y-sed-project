import styled, { css } from "styled-components";
import { GraphProps } from ".";

export const Body = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const GraphItem = styled.div<GraphProps>`
  border-radius: 15px;
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
  width: 7rem;
  height: 7rem;
`;

export const Second = styled(GraphItem)`
  width: 10rem;
  height: 10rem;
`;

export const Third = styled(GraphItem)`
  width: 13rem;
  height: 13rem;
`;

export const Fourth = styled(GraphItem)`
  width: 16rem;
  height: 16rem;
`;

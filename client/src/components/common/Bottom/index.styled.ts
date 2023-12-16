import styled, { css } from "styled-components";

import { BottomProps } from ".";
import { flexAlignCenter, flexCenter } from "../../../style/common";

export const Body = styled.div<BottomProps>`
  height: 16rem;
  ${flexAlignCenter}
  gap: 3rem;
  ${({ top }) =>
    top &&
    css`
      justify-content: center;
    `}

  ${({ button }) =>
    button &&
    css`
      justify-content: space-between;
    `}

  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.PALETTE.blue[100]};
`;

export const Image = styled.img`
  width: 12rem;
`;

export const Div = styled.div`
  width: 12rem;
  height: 2.5rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.PALETTE.black};
  background-color: ${({ theme }) => theme.PALETTE.white};
  margin-top: 1rem;
  ${flexCenter}

  > span {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 2rem; /* 260% */
    letter-spacing: 0.4px;
  }
`;

export const Content = styled.div`
  ${flexCenter}
  text-align: center;
  width: 100%;

  > pre {
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 3.5rem;
    letter-spacing: 0.1rem;
    white-space: "pre-wrap";
  }
`;

export const Button = styled.div`
  cursor: pointer;

  > img {
    width: 7rem;
  }
`;

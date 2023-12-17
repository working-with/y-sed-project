import styled, { css } from "styled-components";

import { BottomProps } from ".";
import { flexAlignCenter, flexCenter } from "../../../style/common";

export const Body = styled.div<BottomProps>`
  height: 14rem;
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
  width: 10rem;
`;

export const Div = styled.div`
  width: 10rem;
  height: 2rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.PALETTE.black};
  background-color: ${({ theme }) => theme.PALETTE.white};
  margin-top: 0.2rem;
  ${flexCenter}

  > span {
    font-size: 1.4rem;
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
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.7rem;
    letter-spacing: 0.1rem;
    white-space: "pre-wrap";
  }
`;

export const Button = styled.div`
  cursor: pointer;

  > img {
    width: 5rem;
  }
`;

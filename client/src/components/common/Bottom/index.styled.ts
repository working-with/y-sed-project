import styled, { css } from "styled-components";

import { BottomProps } from ".";
import { flexAlignCenter, flexCenter } from "../../../style/common";

export const Body = styled.div<BottomProps>`
  height: 430px;
  ${flexAlignCenter}
  gap: 100px;
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

	padding: 45px 79px;
  background-color: ${({ theme }) => theme.PALETTE.blue[100]};
`;

export const Image = styled.img`
  width: 363.022px;
  height: 249.695px;
`;

export const Div = styled.div`
  width: 360px;
  height: 75px;

  border-radius: 16px;
  border: 7px solid ${({ theme }) => theme.PALETTE.black};
  background-color: ${({ theme }) => theme.PALETTE.white};

  ${flexCenter}

  > span {
    font-size: 40px;
    font-weight: 900;
    line-height: 104px; /* 260% */
    letter-spacing: 0.4px;
  }
`;

export const Content = styled.div`
  ${flexCenter}
  text-align: center;
  width: 1400px;

  > pre {
    font-size: 80px;
    font-weight: 700;
    line-height: 104px; /* 130% */
    letter-spacing: 0.4px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;

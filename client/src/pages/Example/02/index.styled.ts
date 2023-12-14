import styled, { css } from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

interface ImageProps {
  click?: boolean;
  changeNum: number;
}

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
  ${flexCenter}
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  z-index: 2;

  ${({ changeNum, click }) =>
    changeNum === 1 &&
    click &&
    css`
      transform: translate(-380%, 90%);
    `}
  ${({ changeNum }) =>
    changeNum === 2 &&
    css`
      transform: translate(-200%, 90%);
    `}
	${({ changeNum }) =>
    changeNum === 3 &&
    css`
      transform: translate(20%, 90%);
    `}
	${({ changeNum }) =>
    changeNum === 4 &&
    css`
      transform: translate(300%, 90%);
    `}
`;

export const GraphItem = styled.div<ImageProps>`
  border-radius: 24px;

  ${({ click }) =>
    click
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

  ${({ changeNum }) =>
    (changeNum === 1 || changeNum === 0) &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Second = styled(GraphItem)`
  width: 325px;
  height: 325px;

  ${({ changeNum }) =>
    changeNum === 2 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Third = styled(GraphItem)`
  width: 426px;
  height: 425px;

  ${({ changeNum }) =>
    changeNum === 3 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Fourth = styled(GraphItem)`
  width: 550px;
  height: 550px;

  ${({ changeNum }) =>
    changeNum === 4 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

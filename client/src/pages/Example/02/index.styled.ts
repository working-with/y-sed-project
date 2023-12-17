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
  gap: 1.5rem;
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  z-index: 2;
  width: 4.5rem;

  ${({ changeNum, click }) =>
    changeNum === 1 &&
    click &&
    css`
      transform: translate(-480%, 100%);
    `}
  ${({ changeNum }) =>
    changeNum === 2 &&
    css`
      transform: translate(-260%, 90%);
    `}
	${({ changeNum }) =>
    changeNum === 3 &&
    css`
      transform: translate(35%, 90%);
    `}
	${({ changeNum }) =>
    changeNum === 4 &&
    css`
      transform: translate(390%, 90%);
    `}
`;

export const GraphItem = styled.div<ImageProps>`
  border-radius: 15px;

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
  width: 7rem;
  height: 7rem;

  ${({ changeNum }) =>
    (changeNum === 1 || changeNum === 0) &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Second = styled(GraphItem)`
  width: 10rem;
  height: 10rem;

  ${({ changeNum }) =>
    changeNum === 2 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Third = styled(GraphItem)`
  width: 13rem;
  height: 13rem;

  ${({ changeNum }) =>
    changeNum === 3 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

export const Fourth = styled(GraphItem)`
  width: 16rem;
  height: 16rem;

  ${({ changeNum }) =>
    changeNum === 4 &&
    css`
      background: ${({ theme }) => theme.PALETTE.orange[400]};
    `}
`;

import styled, { css } from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../../style/common";

interface ImageProps {
  click: boolean;
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
}

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
  ${flexCenter}
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  z-index: 2;

  ${({ first, click }) =>
    first &&
    click &&
    css`
      transform: translate(-380%, 90%);
    `}
  ${({ second }) =>
    second &&
    css`
      transform: translate(-200%, 90%);
    `}
	${({ third }) =>
    third &&
    css`
      transform: translate(20%, 90%);
    `}
	${({ fourth }) =>
    fourth &&
    css`
      transform: translate(300%, 90%);
    `}
`;

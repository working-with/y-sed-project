import styled, { css } from "styled-components";
import { bodyContainer, flexCenter, quizHeight } from "../../../style/common";

interface ImgProps {
  yesBtn?: boolean;
  noBtn?: boolean;
}

export const Body = styled.div`
  ${bodyContainer}
`;

export const Top = styled.div`
  ${flexCenter}
  padding-bottom: 4rem;
`;

export const Content = styled.div<{ quiz?: boolean }>`
  ${flexCenter}
  ${quizHeight}
	flex-direction: column;

  > img:last-child {
    width: 30rem;
  }
`;

export const Qox = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 31rem;
  height: 19.5rem;
  margin: 0 auto;

  > div {
    position: fixed;
    ${flexCenter}
    gap: 3rem;
    transform: translate(12%, 35%);

    > img {
      width: 11rem;
    }
  }

  & img:hover {
    transform: scale(1.25);
  }
`;

export const YesImg = styled.img<ImgProps>`
  cursor: pointer;

  ${({ yesBtn }) =>
    yesBtn &&
    css`
      transform: scale(1.4);
    `}
`;

export const NoImg = styled.img<ImgProps>`
  cursor: pointer;

  ${({ noBtn }) =>
    noBtn &&
    css`
      transform: scale(1.4);
    `}
`;

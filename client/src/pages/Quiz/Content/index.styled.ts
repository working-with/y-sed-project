import styled, { css } from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

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
  ${height}
	flex-direction: column;

  > img:last-child {
    width: 40rem;
  }
`;

export const Qox = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 41rem;
  height: 25.5rem;
  margin: 0 auto;
  transform: translate(-0%, 11.8%);

  > div {
    position: fixed;
    ${flexCenter}
    gap: 5rem;
    transform: translate(12%, 35%);

    > img {
      width: 14rem;
      height: 14rem;
    }
  }

  & img:hover {
    transform: scale(1.25);
  }
`;

export const YesImg = styled.img<ImgProps>`
  ${({ yesBtn }) =>
    yesBtn &&
    css`
      transform: scale(1.3);
    `}
`;

export const NoImg = styled.img<ImgProps>`
  ${({ noBtn }) =>
    noBtn &&
    css`
      transform: scale(1.3);
    `}
`;

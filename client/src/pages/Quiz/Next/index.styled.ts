import styled, { keyframes } from "styled-components";
import { bodyContainer, flexCenter, height, quizHeight } from "../../../style/common";

interface ContentProps {
  experiment: number;
  numberOxId: number;
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-160%, -60%) scale(1);
  }
  100% {
    opacity: 1;
    transform:translate(-160%, -60%) scale(1.4); 
  }
`;

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div<ContentProps>`
  ${({ experiment, numberOxId }) => (experiment === 0 && numberOxId === 2 ? `${height}` : `${quizHeight}`)}
  ${flexCenter}
`;

export const Middle = styled.div`
  ${flexCenter}
`;

export const ImageBox = styled.div`
  position: absolute;

  > img {
    width: 15rem;
    position: fixed;
    transform: translate(-160%, -60%);
    animation: ${fadeOut} 2s 1 ease alternate;

    opacity: 0;
    animation-fill-mode: forwards; /* 애니메이션 종료 후에 상태 유지 */
  }
`;

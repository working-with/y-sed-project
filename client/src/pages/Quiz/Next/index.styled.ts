import styled, { keyframes } from "styled-components";
import { bodyContainer, flexCenter, quizHeight } from "../../../style/common";

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-90%, -60%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-90%, -60%) scale(1.4); 
  }
`;

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${quizHeight}
  ${flexCenter}
`;

export const Middle = styled.div`
  ${flexCenter}
`;

export const ImageBox = styled.div`
  position: absolute;

  > img {
    width: 20rem;
    position: fixed;
    transform: translate(-90%, -60%);
    animation: ${fadeOut} 2s 1 ease alternate;

    opacity: 0;
    animation-fill-mode: forwards; /* 애니메이션 종료 후에 상태 유지 */
  }
`;

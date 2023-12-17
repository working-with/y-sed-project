import styled, { keyframes } from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform:translate(90%, -40%) scale(1); /* 초기 크기 */
  }
  100% {
    opacity: 0;
    transform:translate(90%, -40%) scale(1.4); /* 크기를 커지게 설정 (원하는 크기로 수정) */
  }
`;

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
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
    transform: translate(90%, -40%);
    animation: ${fadeOut} 2s 1 ease alternate;

    opacity: 0; /* 초기에 투명하게 설정 */
    animation-fill-mode: forwards; /* 애니메이션 종료 후에 상태 유지 */
  }
`;

import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div<{ quiz?: boolean }>`
  ${flexCenter}
  ${height}
	flex-direction: column;
  gap: 60px;

  > img:last-child {
    width: 1401px;
    height: 862px;
  }
`;

export const Qox = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 1401px;
  height: 870px;
  margin: 0 auto;
  transform: translate(-0%, 5.9%);

  > div {
    position: fixed;
    ${flexCenter}
    gap: 137px;
    transform: translate(25%, 50%);
  }

  & img:hover {
    transform: scale(1.1);
  }
`;

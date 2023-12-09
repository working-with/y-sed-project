import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
  ${flexCenter}
`;

export const ImageBox = styled.div`
  height: 876px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 51px 75px;
  width: 1185px;
`;

export const Div = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 1389px;
  height: 878px;
  margin: 0 auto;
  transform: translate(0, -8px);

  > div {
    position: fixed;
    ${flexCenter}
    gap: 137px;
    transform: translate(25%, 50%);
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 2;
  transform: translate(-135%, 40%);
`;

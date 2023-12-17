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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem 1.2rem;
`;

export const Div = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 36rem;
  height: 22rem;
  margin: 0 auto;

  > div {
    position: fixed;
    ${flexCenter}
    gap: 5rem;
    transform: translate(12.5%, 40%);

    > img {
      width: 12rem;
    }
  }
`;

export const Image = styled.img`
  width: 5rem;
  position: absolute;
  z-index: 2;
  transform: translate(-170%, 60%);
`;

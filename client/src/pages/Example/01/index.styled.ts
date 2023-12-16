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
  gap: 2rem 2rem;
`;

export const Div = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 43rem;
  height: 29rem;
  margin: 0 auto;

  > div {
    position: fixed;
    ${flexCenter}
    gap: 5rem;
    transform: translate(13%, 48%);

    > img {
      width: 15rem;
      height: 15rem;
    }
  }
`;

export const Image = styled.img`
  width: 8rem;
  position: absolute;
  z-index: 2;
  transform: translate(-120%, 40%);
`;

import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
`;

export const Top = styled.div`
  ${flexCenter}
  padding: 72px 0 392px 0;
`;

export const Middle = styled.div`
  ${flexCenter}
`;

export const ImageBox = styled.div`
  position: absolute;

  > img {
    width: 600px;
    height: 500px;
    position: fixed;
    transform: translate(50%, -40%);
  }
`;

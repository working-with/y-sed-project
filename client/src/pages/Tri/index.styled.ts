import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const ImgBox = styled.div`
  ${height}
  ${flexCenter}
	gap: 82px;

  > img {
    width: 910px;
    height: 569px;
  }
`;

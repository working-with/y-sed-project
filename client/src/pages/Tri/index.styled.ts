import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const ImgBox = styled.div`
  ${height}
  ${flexCenter}
	gap: 2rem;

  > img {
    width: 32rem;
  }
`;

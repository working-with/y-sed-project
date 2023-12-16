import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
  ${flexCenter}
	gap: 45px;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 2;
  transform: translate(570%, 200%);
  width: 6rem;
`;

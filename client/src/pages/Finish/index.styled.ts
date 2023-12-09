import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Top = styled.div``;

export const Content = styled.div`
  ${height}
  ${flexCenter}
    flex-direction: column;
  gap: 140px;

  > img:nth-child(2) {
    width: 861px;
    height: 633.361px;
  }
`;

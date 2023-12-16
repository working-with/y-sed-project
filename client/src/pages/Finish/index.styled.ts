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
  gap: 2rem;

  > img:nth-child(2) {
    width: 25rem;
    margin: 30px 0 110px 0;
  }
`;

export const Image = styled.img`
  width: 25rem;
  margin-bottom: 1rem;
`;

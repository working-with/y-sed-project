import styled from "styled-components";
import { bodyContainer, flexCenter, height, quizHeight } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Top = styled.div``;

export const Content = styled.div`
  ${quizHeight}
  ${flexCenter}
  flex-direction: column;
  gap: 2rem;

  > img {
    width: 25rem;
  }
`;

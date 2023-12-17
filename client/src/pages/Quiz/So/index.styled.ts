import styled from "styled-components";
import { bodyContainer, flexCenter, quizHeight } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${quizHeight}
  ${flexCenter}
  flex-direction: column;
`;

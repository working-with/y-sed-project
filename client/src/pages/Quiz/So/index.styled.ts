import styled from "styled-components";
import { bodyContainer, flexCenter, height } from "../../../style/common";

export const Body = styled.div`
  ${bodyContainer}
`;

export const Content = styled.div`
  ${height}
  ${flexCenter}
  flex-direction: column;
  gap: 300px;
`;

export const Status = styled.div`
  margin-bottom: 170px;
`;

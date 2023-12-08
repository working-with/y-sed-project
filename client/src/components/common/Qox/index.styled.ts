import styled from "styled-components";
import { flexCenter } from "../../../style/common";

export const Body = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  width: 1401px;
  height: 870px;
  margin: 0 auto;
  transform: translate(-0%, 5.9%);

  > div {
    position: fixed;
    ${flexCenter}
    gap: 137px;
    transform: translate(25%, 50%);
  }
`;

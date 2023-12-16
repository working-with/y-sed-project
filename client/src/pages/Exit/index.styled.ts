import styled from "styled-components";
import { bodyContainer, flexCenter } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
  ${flexCenter}
    flex-direction: column;
  gap: 70px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.PALETTE.black};
  font-size: 4rem;
  font-weight: 800;
  line-height: 20px; /* 23.529% */
  letter-spacing: 3.9px;
`;

export const ButtonBox = styled.div`
  ${flexCenter}
  gap: 4rem;
`;

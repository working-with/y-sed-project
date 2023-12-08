import styled from "styled-components";
import { bodyContainer, flexCenter } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
  ${flexCenter}
    flex-direction: column;
  gap: 82px;
`;

export const TitleBox = styled.div`
  height: 654px;
  ${flexCenter}

  > span {
    font-size: 128px;
    font-weight: 700;
    line-height: 20px; /* 15.625% */
    letter-spacing: 0.4px;
  }
`;

export const ButtonBox = styled.div`
  > button {
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.PALETTE.white};

      &:visited {
        text-decoration: none;
        color: ${({ theme }) => theme.PALETTE.white};
      }
    }
  }
`;

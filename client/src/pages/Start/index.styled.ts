import styled from "styled-components";
import { bodyContainer, flexCenter } from "../../style/common";

export const Body = styled.div`
  ${bodyContainer}
  ${flexCenter}
  flex-direction: column;
  gap: 3rem;
`;

export const TitleBox = styled.div`
  height: 16rem;
  ${flexCenter}

  > span {
    font-size: 4rem;
    font-weight: 700;
    line-height: 20px; /* 15.625% */
    letter-spacing: 0.4px;
  }

  > img {
    width: 23rem;
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

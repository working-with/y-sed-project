import styled, { css } from "styled-components";
import { bodyContainer, flexCenter, flexAlignCenter } from "../../style/common";

interface ButtonProps {
  clicked?: boolean;
}

export const Body = styled.div`
  ${bodyContainer}
  ${flexCenter}
`;

export const Content = styled.div`
  ${flexCenter}
  flex-direction: column;
  gap: 4rem;
`;

export const Wrapper = styled.div`
  ${flexAlignCenter}

  & button {
    margin: 0 20px;
  }
`;

export const TitleBox = styled(Wrapper)`
  margin-right: 4rem;
  width: 14rem;
  height: 6rem;
  ${flexCenter}

  > span {
    font-size: 3rem;
  }
`;

export const Input = styled.input`
  width: 22rem;
  font-size: 3rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.PALETTE.black};
  text-align: center;

  &:focus {
    outline: none;
    text-align: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 10rem;
  height: 5rem;
  border-radius: 1.5rem;
  font-size: 2.5rem;
  background-color: ${({ theme }) => theme.PALETTE.blue[200]};
  color: ${({ theme }) => theme.PALETTE.white};

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${({ theme }) => theme.PALETTE.red[200]};
    `}
`;

export const FirstInput = styled(Input)`
  width: 10rem;
  margin-right: 2rem;
`;

export const TwoInput = styled(Input)`
  width: 10rem;
`;

export const ButtonBox = styled.div`
  ${flexCenter}
  gap: 6rem;

  & a {
    color: ${({ theme }) => theme.PALETTE.white};
    text-decoration: none;
  }

  & a:visited {
    color: ${({ theme }) => theme.PALETTE.white};
  }
`;

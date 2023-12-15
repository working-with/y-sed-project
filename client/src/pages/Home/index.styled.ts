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
  gap: 145px;
`;

export const Wrapper = styled.div`
  ${flexAlignCenter}

  & button {
    margin: 0 20px;
  }
`;

export const TitleBox = styled(Wrapper)`
  margin-right: 75px;
  width: 483px;
  height: 222px;
  ${flexCenter}

  > span {
    font-size: 119px;
  }
`;

export const Input = styled.input`
  width: 860px;
  font-size: 120px;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.PALETTE.black};
  text-align: center;

  &:focus {
    outline: none;
    text-align: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 410px;
  height: 170px;
  border-radius: 70px;
  font-size: 75px;
  background-color: ${({ theme }) => theme.PALETTE.blue[200]};
  color: ${({ theme }) => theme.PALETTE.white};

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${({ theme }) => theme.PALETTE.red[200]};
    `}
`;

export const FirstInput = styled(Input)`
  width: 380px;
  margin-right: 100px;
`;

export const TwoInput = styled(Input)`
  width: 380px;
`;

export const ButtonBox = styled.div`
  ${flexCenter}
  gap: 200px;

  & a {
    color: ${({ theme }) => theme.PALETTE.white};
    text-decoration: none;
  }

  & a:visited {
    color: ${({ theme }) => theme.PALETTE.white};
  }
`;

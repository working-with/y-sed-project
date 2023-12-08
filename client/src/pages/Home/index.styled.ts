import styled from "styled-components";
import { bodyContainer, flexCenter, flexAlignCenter } from "../../style/common";

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

export const ButtonBox = styled.div`
  ${flexCenter}
  gap: 200px;
`;

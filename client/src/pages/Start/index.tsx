import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import useCloseBtn from "../../hooks/useCloseBtn";
import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";

import * as S from "./index.styled";

import Button from "../../components/common/Button";

function Start() {
  useCloseBtn();

  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleBtnClick = () => {
    setClick(true);
  };

  const handleHelloClick = () => {
    navigate("/tri");
  };

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const userInitials = name.slice(0, 2);
  const kidName = name.includes("이") ? `${userInitials}아` : `${userInitials}야`;

  return (
    <S.Body>
      <S.TitleBox>
        {!click && <img src="/assets/img/icon/smileIcon.svg" alt="smile_icon" />}
        {click && <span>안녕 {kidName}~!</span>}
      </S.TitleBox>

      <S.ButtonBox>
        <Button variant="blue" onClick={handleBtnClick}>
          {click ? <div onClick={handleHelloClick}>안녕?</div> : "시작하기"}
        </Button>
      </S.ButtonBox>
    </S.Body>
  );
}

export default Start;

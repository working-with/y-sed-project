import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import useCloseBtn from "../../hooks/useCloseBtn";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";

function Tri() {
  useCloseBtn();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/example/1");
    }, 20000);
  }, []);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  return (
    <S.Body>
      <S.ImgBox>
        <img src={`/assets/img/storyImg/1/1-${userInfo.gender === "여자" ? "G1" : "B1"}.svg`} />
        <img src={`/assets/img/storyImg/7/7-${userInfo.gender === "여자" ? "G1" : "B1"}.svg`} />
      </S.ImgBox>

      <Bottom>
        내가 {name}나 다른 아이들에게
        <br />
        일어날 수 있는 몇 가지 이야기를
        <br />
        읽어줄거야. 잘 들어줄 수 있지?
      </Bottom>
    </S.Body>
  );
}

export default Tri;

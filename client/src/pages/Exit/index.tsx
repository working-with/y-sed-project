import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { userInfoAtom } from "../../recoil/atoms/user.atom";

import * as S from "./index.styled";

import Button from "../../components/common/Button";

function Exit() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const handleCloseClick = () => {
    navigate("/");

    setUserInfo({
      kidId: "",
      name: "",
      gender: "",
      code: "",
    });
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <S.Body>
      <div>
        <S.Title>정말로 종료하시겠습니까?</S.Title>
      </div>

      <S.ButtonBox>
        <Button shape="red" onClick={handleCloseClick}>
          예
        </Button>
        <Button shape="blue" onClick={handleCancelClick}>
          아니요
        </Button>
      </S.ButtonBox>
    </S.Body>
  );
}

export default Exit;

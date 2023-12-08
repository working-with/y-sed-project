import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import * as S from "./index.styled";

function Exit() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/");
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

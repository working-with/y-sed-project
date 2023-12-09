import { useNavigate } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";

function ExFin() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/begin");
  };

  return (
    <S.Body>
      <S.Content>
        <Button variant="green" onClick={handleStartClick}>
          시작하기
        </Button>
      </S.Content>

      <Bottom>
        대단한데?
        <br />
        우리 이제 시작해볼까?
      </Bottom>
    </S.Body>
  );
}

export default ExFin;

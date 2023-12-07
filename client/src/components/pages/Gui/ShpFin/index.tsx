import * as S from "./index.styled";

import Bottom from "../../../common/Bottom";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";

function ShpFin() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/beg");
  };

  return (
    <>
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
    </>
  );
}

export default ShpFin;

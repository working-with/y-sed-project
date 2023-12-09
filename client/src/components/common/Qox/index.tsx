import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

function Qox() {
  const navigate = useNavigate();

  const btnOClick = () => {
    navigate("/so");
  };

  const btnXClick = () => {
    navigate("/next");
  };

  return (
    <S.Body>
      <div>
        <img src="/assets/img/icon/blueO.svg" onClick={btnOClick} />
        <img src="/assets/img/icon/redX.svg" onClick={btnXClick} />
      </div>
    </S.Body>
  );
}

export default Qox;

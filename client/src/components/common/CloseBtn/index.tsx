import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

function CloseBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/exit");
  };

  return <S.Image src="/assets/img/icon/grayX.svg" onClick={handleClick} />;
}

export default CloseBtn;

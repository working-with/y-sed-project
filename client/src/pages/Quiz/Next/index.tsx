import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";

const imgSrc = {
  q1: "/assets/img/icon/Q2.svg",
  q2: "/assets/img/icon/Q3.svg",
  q3: "/assets/img/icon/100.svg",
};

function Next() {
  return (
    <S.Body>
      <S.Content>
        <S.Top>
          <img src={imgSrc.q1} />
        </S.Top>

        <S.Middle>
          <Button variant="green">다음으로</Button>
        </S.Middle>
      </S.Content>

      <Bottom>대사</Bottom>
    </S.Body>
  );
}

export default Next;

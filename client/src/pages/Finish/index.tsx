import { useState } from "react";
import Bottom from "../../components/common/Bottom";
import COMMON from "../../constants/common";
import * as S from "./index.styled";

function Finish() {
  const [finish, setFinish] = useState(true);

  return (
    <S.Body>
      <S.Content>
        {finish ? (
          <>
            <img src="/assets/img/icon/100.svg" />
            <img src="/assets/img/icon/happyIcon.svg" />
          </>
        ) : (
          <img src="/assets/img/icon/smileIcon.svg" />
        )}
      </S.Content>

      <Bottom top={true}>{finish ? COMMON.FIN1 : COMMON.FIN2}</Bottom>
    </S.Body>
  );
}

export default Finish;

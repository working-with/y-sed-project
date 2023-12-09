import { useState } from "react";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import common from "../../utils/common";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";

function Finish() {
  const [finish, setFinish] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { FIN1, FIN2 } = common(name);

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

      <Bottom top={true}>{finish ? FIN1 : FIN2}</Bottom>
    </S.Body>
  );
}

export default Finish;

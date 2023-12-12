import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import common from "../../utils/common";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";
import StatusBar from "../../components/common/StatusBar";

function Finish() {
  const [userReset, setUserReset] = useRecoilState(userInfoAtom);

  const [finish, setFinish] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { FIN1, FIN2 } = common(name);

  useEffect(() => {
    setTimeout(() => {
      setFinish(false);

      setUserReset({
        kidId: "",
        name: "",
        code: "",
        gender: "",
      });
    }, 10000);
  }, []);

  return (
    <S.Body>
      <S.Content>
        {finish ? (
          <>
            <StatusBar status={100} />
            <img src="/assets/img/icon/happyIcon.svg" alt="happy_icon" />
          </>
        ) : (
          <img src="/assets/img/icon/smileIcon.svg" alt="smile_icon" />
        )}
      </S.Content>

      <Bottom top={true}>{finish ? FIN1 : FIN2}</Bottom>
    </S.Body>
  );
}

export default Finish;

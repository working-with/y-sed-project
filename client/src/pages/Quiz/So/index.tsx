import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import common from "../../../utils/common";
import getName from "../../../utils/getName";

import * as S from "./index.styled";

import Graph from "../../../components/common/Graph";
import Bottom from "../../../components/common/Bottom";

function So() {
  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { SO } = common(name);

  return (
    <S.Body>
      <S.Content>
        <Graph />
      </S.Content>

      <Bottom button={true} color="bluePlay">
        {SO}
      </Bottom>
    </S.Body>
  );
}

export default So;

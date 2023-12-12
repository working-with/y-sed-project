import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import common from "../../../utils/common";
import getName from "../../../utils/getName";

import * as S from "./index.styled";

import Graph from "../../../components/common/Graph";
import Bottom from "../../../components/common/Bottom";
import StatusBar from "../../../components/common/StatusBar";

function So() {
  const navigate = useNavigate();
  const params = useParams();

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { SO } = common(name);

  const handleBtnClick = () => {
    if (params.experimentId === "9" && params.oxId === "2") {
      navigate("/finish");
    } else navigate(`/quiz/${params.experimentId}/next/${params.oxId}`);
  };

  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    setStatus(Number(params.oxId));
  }, []);

  return (
    <S.Body>
      <S.Content>
        <S.Status>
          <StatusBar status={status} />
        </S.Status>

        <Graph />
      </S.Content>

      <Bottom button={true} color="bluePlay" onClick={handleBtnClick}>
        {SO}
      </Bottom>
    </S.Body>
  );
}

export default So;

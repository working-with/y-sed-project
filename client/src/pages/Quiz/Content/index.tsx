import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import common from "../../../utils/common";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import StatusBar from "../../../components/common/StatusBar";

function Content() {
  const navigate = useNavigate();
  const params = useParams();

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { QOX, SQX } = common(name);

  const handleOClick = () => {
    navigate(`/quiz/${params.experimentId}/so/${params.oxId}`);
  };

  const handleXClick = () => {
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
        <S.Qox>
          <div>
            <img src="/assets/img/icon/blueO.svg" alt="O" onClick={handleOClick} />
            <img src="/assets/img/icon/redX.svg" alt="X" onClick={handleXClick} />
          </div>
        </S.Qox>

        <StatusBar status={status} />
        <img src="/assets/img/storyImg/1/1-G1.svg" alt="storyImage" />
      </S.Content>

      <Bottom>{QOX}</Bottom>
    </S.Body>
  );
}

export default Content;

// QOX -> script -> SQX

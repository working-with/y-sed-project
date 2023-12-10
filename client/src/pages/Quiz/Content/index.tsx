import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import common from "../../../utils/common";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

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

  return (
    <S.Body>
      <S.Content>
        <S.Qox>
          <div>
            <img src="/assets/img/icon/blueO.svg" onClick={handleOClick} />
            <img src="/assets/img/icon/redX.svg" onClick={handleXClick} />
          </div>
        </S.Qox>

        <img src="/assets/img/icon/0.svg" />
        <img src="/assets/img/storyImg/1/1-G1.svg" />
      </S.Content>

      <Bottom>{QOX}</Bottom>
    </S.Body>
  );
}

export default Content;

// QOX -> script -> SQX

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import getRandomNext from "../../../utils/getNextMessage";
import NEXT_MESSAGE from "../../../constants/nextMessage";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";
import StatusBar from "../../../components/common/StatusBar";

function Next() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;
  const numberOxId = Number(oxId);
  const experiment = Number(experimentId);

  const handleNextClick = () => {
    if (oxId === "2") {
      navigate(`/quiz/${experiment + 1}/begin/${(numberOxId + 1) % 3}`);
    } else {
      navigate(`/quiz/${experimentId}/content/${numberOxId + 1}`);
    }
  };

  return (
    <S.Body>
      <S.Content>
        <S.Top>
          <StatusBar status={numberOxId} />
        </S.Top>

        <S.Middle>
          <Button variant="green" onClick={handleNextClick}>
            다음으로
          </Button>
        </S.Middle>
      </S.Content>

      <Bottom>{numberOxId === 2 ? NEXT_MESSAGE[experiment] : getRandomNext()}</Bottom>
    </S.Body>
  );
}

export default Next;

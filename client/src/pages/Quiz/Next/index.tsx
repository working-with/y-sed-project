import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";
import StatusBar from "../../../components/common/StatusBar";

function Next() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;

  const handleNextClick = () => {
    if (oxId === "2") {
      navigate(`/quiz/${Number(experimentId) + 1}/begin/${(Number(oxId) + 1) % 3}`);
    } else {
      navigate(`/quiz/${experimentId}/content/${Number(oxId) + 1}`);
    }
  };

  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    setStatus(Number(params.oxId));
  }, []);

  return (
    <S.Body>
      <S.Content>
        <S.Top>
          <StatusBar status={status} />
        </S.Top>

        <S.Middle>
          <Button variant="green" onClick={handleNextClick}>
            다음으로
          </Button>
        </S.Middle>
      </S.Content>

      <Bottom>대사</Bottom>
    </S.Body>
  );
}

export default Next;

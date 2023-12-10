import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Narration() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/quiz/${params.experimentId}/content/0`);
    }, 10000);
  }, []);

  return (
    <S.Body>
      <S.Content>
        <img src="/assets/img/storyImg/9/9-G1.svg" alt="이미지" />
      </S.Content>

      <Bottom top={true}>나레이션 부분</Bottom>
    </S.Body>
  );
}

export default Narration;

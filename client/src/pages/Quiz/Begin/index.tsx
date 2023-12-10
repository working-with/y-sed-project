import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Begin() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/quiz/${params.experimentId}/narration/0`);
    }, 10000);
  }, []);

  return (
    <S.Body>
      <S.Content>
        <img src="/assets/img/storyImg/1/1-G1.svg" />
      </S.Content>

      <Bottom top={true}>
        이제 이야기를 들려줄거야!
        <br />잘 들어보자.
      </Bottom>
    </S.Body>
  );
}

export default Begin;

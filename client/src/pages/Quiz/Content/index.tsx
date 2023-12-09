import { useState } from "react";

import * as S from "./index.styled";

import Qox from "../../../components/common/Qox";
import Bottom from "../../../components/common/Bottom";

function Content() {
  const [quiz, setQuiz] = useState<boolean>(false);

  return (
    <S.Body>
      <S.Content>
        <Qox />

        <img src="/assets/img/icon/0.svg" />
        <img src="/assets/img/storyImg/1/1-G1.svg" />
      </S.Content>

      <Bottom>대사</Bottom>
    </S.Body>
  );
}

export default Content;

// {COMMON.BEG}
// {QUIZ_01.NAR1}
// {QUIZ_01.NAR2}
// {QUIZ_01.NAR3}
// {QUIZ_01.NAR4}

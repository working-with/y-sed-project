import { useState } from "react";

import * as S from "./index.styled";

import QUIZ_01 from "../../constants/quiz01";

import Qox from "../../components/common/Qox";
import Bottom from "../../components/common/Bottom";

function Quiz01() {
  const [quiz, setQuiz] = useState<boolean>(false);

  return (
    <S.Body>
      <S.Content>
        {quiz && <Qox />}

        <img src="/assets/img/icon/0.svg" />
        <img src="/assets/img/storyImg/1/1-G1.svg" />
      </S.Content>

      <Bottom top={quiz ? false : true}>{QUIZ_01.NAR1}</Bottom>
    </S.Body>
  );
}

export default Quiz01;

// {COMMON.BEG}
// {QUIZ_01.NAR1}
// {QUIZ_01.NAR2}
// {QUIZ_01.NAR3}
// {QUIZ_01.NAR4}

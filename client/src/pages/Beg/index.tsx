import { useState } from "react";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";
import COMMON from "../../constants/common";

const imgUrl = {
  q1: "/assets/img/storyImg/1/1-G1.svg",
  q2: "/assets/img/storyImg/2/2-G1.svg",
  q3: "/assets/img/storyImg/3/3-G1.svg",
  q4: "/assets/img/storyImg/4/4-G1.svg",
  q5: "/assets/img/storyImg/5/5-1.svg",
  q6: "/assets/img/storyImg/6/6-G1.svg",
  q7: "/assets/img/storyImg/7/7-G1.svg",
  q8: "/assets/img/storyImg/8/8-G1.svg",
  q9: "/assets/img/storyImg/9/9-G1.svg",
};

function Beg() {
  const [quiz, setQuiz] = useState<boolean>(true);

  return (
    <S.Body>
      <S.Content>
        <img src={imgUrl.q9} />
      </S.Content>

      <Bottom top={true}>{COMMON.BEG}</Bottom>
    </S.Body>
  );
}

export default Beg;

// {COMMON.BEG}
// {QUIZ_01.NAR1}
// {QUIZ_01.NAR2}
// {QUIZ_01.NAR3}
// {QUIZ_01.NAR4}

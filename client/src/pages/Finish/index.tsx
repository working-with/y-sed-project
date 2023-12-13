import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import common from "../../utils/common";
import axiosRequest from "../../api";
import { ResData } from "../../@types";
import { Survey } from "../../@types/Survey";
import { quizAnswerAtom } from "../../recoil/atoms/quiz.atom";
import { lastImageAtom } from "../../recoil/atoms/image.atom";
import STATUS_CODE from "../../constants/statusCode";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";
import StatusBar from "../../components/common/StatusBar";

function Finish() {
  const [userReset, setUserReset] = useRecoilState(userInfoAtom);
  const [quizAnswer, setQuizAnswer] = useRecoilState(quizAnswerAtom);
  const [lastImage, setLastImage] = useRecoilState(lastImageAtom);

  const [finish, setFinish] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { FIN1, FIN2 } = common(name);

  const getAnswer = async () => {
    const answer = {
      survey: quizAnswer,
    };

    const response = await axiosRequest.requestAxios<ResData<Survey>>("patch", `/v1/kid/${userInfo.kidId}`, answer);

    if (response.status === STATUS_CODE.OK) {
      alert("실험이 종료되었습니다!");
    }
  };

  useEffect(() => {
    if (quizAnswer.length !== 0) {
      getAnswer();
    }

    setTimeout(() => {
      setFinish(false);

      setUserReset({
        kidId: "",
        name: "",
        code: "",
        gender: "",
      });

      setQuizAnswer(() => []);
      setLastImage("");
    }, 10000);
  }, []);

  return (
    <S.Body>
      <S.Content>
        {finish ? (
          <>
            <StatusBar status={100} />
            <img src="/assets/img/icon/happyIcon.svg" alt="happy_icon" />
          </>
        ) : (
          <img src="/assets/img/icon/smileIcon.svg" alt="smile_icon" />
        )}
      </S.Content>

      <Bottom top={true}>{finish ? FIN1 : FIN2}</Bottom>
    </S.Body>
  );
}

export default Finish;

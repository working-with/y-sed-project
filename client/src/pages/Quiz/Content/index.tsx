import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import common from "../../../utils/common";
import axiosRequest from "../../../api";
import { ResData, Script } from "../../../@types";
import { lastImageAtom } from "../../../recoil/atoms/image.atom";
import { Question } from "../../../@types/Question";
import { quizAnswerAtom } from "../../../recoil/atoms/quiz.atom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import StatusBar from "../../../components/common/StatusBar";

function Content() {
  // 실험 번호와 실험 문항의 번호 추출
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;

  // 아동 정보에서 이름 얻기
  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  // 백에서 받아오는 스크립트 제외 부분
  const { QOX, SQX } = common(name);

  // 실험 가장 마지막 이미지가 퀴즈 배경 이미지
  const image = useRecoilValue(lastImageAtom);

  // 위에 퍼센트 바 상태 변경
  const [status, setStatus] = useState<number>(11);

  // 백에서 받아오는 스크립트 받는 부분
  const [script, setScript] = useState<Question[]>();

  useEffect(() => {
    const getContent = async () => {
      const response = await axiosRequest.requestAxios<ResData<Script>>(
        "get",
        `/v1/experiment/script?code=0${experimentId}`,
      );
      const data = response.data.data;
      const test = data[0].question;

      setScript(test);
    };

    getContent();
  }, []);

  // sqx 스크립트 나올 차례 -> ~이도 그럴 것 같아? 안 그럴 것 같아?
  const [sqx, setSqx] = useState<boolean>(false);

  useEffect(() => {
    // 퀴즈가 0번째 일 경우 status 변경은 qox 스크립트가 나온 후에 status를 변경해 줌
    if (Number(oxId) === 0) {
      setTimeout(() => {
        // 백에서 받아온 스크립트 진행 후 퀴즈 문항에 대해 제대로 나오게 변경
        setStatus(Number(oxId));

        setTimeout(() => {
          // qox -> 퀴즈 본문 -> sqx 스크립트 / ~이는 그럴 것 같아 부분
          setSqx(true);
        }, 10000);
      }, 10000);
    } else {
      // 퀴즈가 0번째가 아닐 경우 바로 변경
      setStatus(Number(oxId));

      setTimeout(() => {
        setSqx(true);
      }, 10000);
    }
  }, []);

  // ox 버튼 클릭 상태 업데이트
  const [yesBtn, setYesBtn] = useState<boolean>(false);
  const [noBtn, setNoBtn] = useState<boolean>(false);

  const handleOClick = () => {
    setYesBtn(true);
    setNoBtn(false);
  };

  const handleXClick = () => {
    setNoBtn(true);
    setYesBtn(false);
  };

  // quiz 정답 저장
  const [quizAnswer, setQuizAnswer] = useRecoilState(quizAnswerAtom);

  const handleNextBtnClick = () => {
    // x 버튼 클릭 후 next 누를 때
    if (noBtn) {
      // x 버튼 클릭 후 next 누를 때 quizAnswer 상태 업데이트
      const newQuiz = {
        [`${experimentId}-${Number(oxId) + 1}`]: {
          booleanAnswer: 0,
          scaleAnswer: null,
        },
      };

      setQuizAnswer((prev: any) => [...prev, newQuiz]);

      // x 버튼 클릭 후 9-2 일 경우
      if (experimentId === "9" && oxId === "2") {
        navigate("/finish");
      } else navigate(`/quiz/${experimentId}/next/${oxId}`);

      // o 버튼 클릭 후 next 누를 때
    } else if (yesBtn) {
      navigate(`/quiz/${params.experimentId}/so/${params.oxId}`);
    } else {
      alert("O 또는 X 버튼을 입력 후에 다음으로 넘어가 주세요!");
    }
  };

  return (
    <S.Body>
      <S.Content>
        <S.Qox>
          <div>
            <S.YesImg src="/assets/img/icon/blueO.svg" alt="O" onClick={handleOClick} yesBtn={yesBtn} />
            <S.NoImg src="/assets/img/icon/redX.svg" alt="X" onClick={handleXClick} noBtn={noBtn} />
          </div>
        </S.Qox>

        {/* 11 -> 0 */}
        <StatusBar status={status} />
        <img src={image} alt="storyImage" />
      </S.Content>

      {/* QOX -> script -> SQX */}
      <Bottom button={sqx && true} color={yesBtn || noBtn ? "bluePlay" : ""} onClick={handleNextBtnClick}>
        {/* 1: 자 이제부터 내가 들려주는 말이 */}
        {status === 11 && QOX}

        {/* 2: 본문 */}
        {status !== 11 && script && !sqx && `"${script[status].script}"`}

        {/* 3: 니 마음과 같은지 아닌지 */}
        {sqx && SQX}
      </Bottom>
    </S.Body>
  );
}

export default Content;

// 같은 키를 가지고 있는지 확인하는 방법
// quizAnswer.find((el: any) => Object.keys(el)[0] === `${experimentId}-${Number(oxId) + 1}`);

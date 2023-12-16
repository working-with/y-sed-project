import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [userReset, setUserReset] = useRecoilState(userInfoAtom);
  const [quizAnswer, setQuizAnswer] = useRecoilState(quizAnswerAtom);
  const [lastImage, setLastImage] = useRecoilState(lastImageAtom);

  const [finish, setFinish] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

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
  }, []);

  // tts
  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [FIN1, FIN2];

  useEffect(() => {
    const currentAudio = audioRef.current;

    const plusCurrentTTS = () => {
      setCurrentTTS(prev => prev + 1);
    };

    if (currentAudio && text[currentTTS]) {
      currentAudio.addEventListener("ended", plusCurrentTTS);

      const getVoice = async () => {
        const postData = {
          name: userInfo.lastName,
          voiceType: userInfo.gender ? "nhajun" : "vdain",
          script: text[currentTTS],
        };

        const response = await axiosRequest.requestAxios<ResData<Blob>>("post", "/v1/voice", postData);
        const data = response.data;

        const url = URL.createObjectURL(new Blob([data]));

        currentAudio.src = url;
        currentAudio.play().catch(e => console.log(e));
      };

      getVoice();

      if (currentTTS === 2) {
        setUserReset({
          kidId: "",
          name: "",
          code: "",
          gender: "",
        });

        setQuizAnswer(() => []);
        setLastImage("");
      }

      return () => {
        currentAudio.removeEventListener("ended", plusCurrentTTS);
      };
    }

    if (!text[currentTTS]) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [audioRef.current, currentTTS, finish]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        {currentTTS === 0 ? (
          <>
            <StatusBar status={100} />
            <img src="/assets/img/icon/happyIcon.svg" alt="happy_icon" />
          </>
        ) : (
          <S.Image src="/assets/img/icon/smileIcon.svg" alt="smile_icon" />
        )}
      </S.Content>

      <Bottom top={true}>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
    </S.Body>
  );
}

export default Finish;

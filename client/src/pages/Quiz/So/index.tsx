import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import common from "../../../utils/common";
import getName from "../../../utils/getName";
import { quizAnswerAtom } from "../../../recoil/atoms/quiz.atom";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";

import * as S from "./index.styled";

import Graph from "../../../components/common/Graph";
import Bottom from "../../../components/common/Bottom";
import StatusBar from "../../../components/common/StatusBar";

function So() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  const { SO } = common(name);

  const [quizAnswer, setQuizAnswer] = useRecoilState(quizAnswerAtom);

  const handleBtnClick = () => {
    if (selectedIndex !== null) {
      const newQuiz = {
        [`${experimentId}-${Number(oxId) + 1}`]: {
          booleanAnswer: 1,
          scaleAnswer: (selectedIndex && selectedIndex + 1) || (selectedIndex === 0 && selectedIndex + 1),
        },
      };

      setQuizAnswer((prev: any) => [...prev, newQuiz]);

      if (experimentId === "9" && oxId === "2") {
        navigate("/finish");
      } else navigate(`/quiz/${experimentId}/next/${oxId}`);
    } else {
      alert("그래프를 클릭해 주세요!");
    }
  };

  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    setStatus(Number(oxId));
  }, []);

  // graph click
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleGraphClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // tts
  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [SO];

  useEffect(() => {
    const currentAudio = audioRef.current;

    const plusCurrentTTS = () => {
      setCurrentTTS((prev: number) => prev + 1);
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

      return () => {
        currentAudio.removeEventListener("ended", plusCurrentTTS);
      };
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        <S.Status>
          <StatusBar status={status} />
        </S.Status>

        <Graph onClick={handleGraphClick} index={selectedIndex} />
      </S.Content>

      <Bottom button={true} color={selectedIndex === null ? "" : "bluePlay"} onClick={handleBtnClick}>
        {SO}
      </Bottom>
    </S.Body>
  );
}

export default So;

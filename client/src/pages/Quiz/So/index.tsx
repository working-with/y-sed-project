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
    const currentAudio = audioRef.current;

    if (selectedIndex !== null) {
      if (currentAudio) currentAudio.pause();

      const newQuiz = {
        [`${experimentId}-${Number(oxId) + 1}`]: {
          booleanAnswer: 1,
          scaleAnswer: (selectedIndex && selectedIndex + 1) || (selectedIndex === 0 && selectedIndex + 1),
        },
      };

      setQuizAnswer((prev: any) => [...prev, newQuiz]);

      // 실험 문항이 9번이고 oxId가 2번일 경우 끝
      if (experimentId === "9" && oxId === "2") return navigate("/finish");

      // 실험 문항이 0번일 경우
      if (experimentId === "0") return navigate(`/quiz/${experimentId}/next/${oxId}`);

      // 실험 문항이 0번이 아니고 oxId가 2번일 경우 || 실험 문항이 0번이 아니고 oxId가 2번이 아닐 경우
      if (experimentId !== "0" && oxId === "2") return navigate(`/quiz/${experimentId}/next/${oxId}`);
      else return navigate(`/quiz/${experimentId}/content/${Number(oxId) + 1}`);
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

      <StatusBar status={status} />

      <S.Content>
        <Graph onClick={handleGraphClick} index={selectedIndex} />
      </S.Content>

      <Bottom button={true} color={selectedIndex === null ? "" : "bluePlay"} onClick={handleBtnClick}>
        {SO}
      </Bottom>
    </S.Body>
  );
}

export default So;

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import getNextMessage from "../../../utils/getNextMessage";
import NEXT_MESSAGE from "../../../constants/nextMessage";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";
import { userInfoAtom } from "../../../recoil/atoms/user.atom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";
import StatusBar from "../../../components/common/StatusBar";

function Next() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;
  const numberOxId = Number(oxId);
  const experiment = Number(experimentId);

  const handleNextClick = () => {
    if (oxId === "2") {
      navigate(`/quiz/${experiment + 1}/begin/${(numberOxId + 1) % 3}`);
    } else {
      navigate(`/quiz/${experimentId}/content/${numberOxId + 1}`);
    }
  };

  const userInfo = useRecoilValue(userInfoAtom);

  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [numberOxId === 2 ? NEXT_MESSAGE[experiment] : getNextMessage(experiment, numberOxId)];

  useEffect(() => {
    const currentAudio = audioRef.current;

    const plusCurrentTTS = () => {
      setCurrentTTS((prev: number) => prev + 1);
    };

    if (currentAudio && text[currentTTS]) {
      currentAudio.addEventListener("ended", plusCurrentTTS);

      const getVoice = async () => {
        const postData = {
          name: userInfo.name,
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
        <S.Top>
          <StatusBar status={numberOxId} />
        </S.Top>

        <S.Middle>
          <Button variant="green" onClick={handleNextClick}>
            다음으로
          </Button>
        </S.Middle>
      </S.Content>

      <Bottom>{text[0]}</Bottom>
    </S.Body>
  );
}

export default Next;

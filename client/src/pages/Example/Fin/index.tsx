import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosRequest from "../../../api";
import { ResData } from "../../../@types";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../recoil/atoms/user.atom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import Button from "../../../components/common/Button";

function ExFin() {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = ["대단한데? 우리 이제 시작해볼까?"];

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

  const handleStartClick = () => {
    const currentAudio = audioRef.current;
    if (currentAudio) currentAudio.pause();

    navigate("/quiz/1/begin/0");
  };

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        <Button variant="green" onClick={handleStartClick}>
          시작하기
        </Button>
      </S.Content>

      <Bottom>
        대단한데?
        <br />
        우리 이제 시작해볼까?
      </Bottom>
    </S.Body>
  );
}

export default ExFin;

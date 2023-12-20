import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import IconBox from "../../../components/common/IconBox";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";

function Ex03() {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = ["그럼 우리가 방금 배운거\n 간단하게 실험 해볼까?"];

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

    if (!text[currentTTS]) {
      setTimeout(() => {
        navigate("/quiz/0/begin/0");
      }, 3000);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Image src="/assets/img/icon/click.svg" />

      <S.Content>
        <IconBox iconName="smileIcon" />
        <IconBox iconName="sadIcon" />
      </S.Content>

      <Bottom>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
    </S.Body>
  );
}

export default Ex03;

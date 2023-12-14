import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import IconBox from "../../../components/common/IconBox";

// gui01 - 03
function Ex01() {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [
    `각 이야기 마다, ${name}가\n 느낄 수 있는 다양한 마음이 있어.`,
    "이야기가 끝난 후에는 내가\n 이 마음에 대해 물어볼건데,",
    `이 마음이 ${name}와 같은지 아닌지`,
  ];

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

    if (!text[currentTTS]) {
      setTimeout(() => {
        navigate("/example/2");
      });
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        {currentTTS === 2 && (
          <>
            <S.Image src="/assets/img/icon/click.svg" />
            <S.Div>
              <div>
                <img src="/assets/img/icon/blueO.svg" alt="o" />
                <img src="/assets/img/icon/redX.svg" alt="x" />
              </div>
            </S.Div>
          </>
        )}

        <S.ImageBox>
          <IconBox iconName="smileIcon" />
          <IconBox iconName="angryIcon" />
          <IconBox iconName="sadIcon" />
          <IconBox iconName="happyIcon" />
        </S.ImageBox>
      </S.Content>

      <Bottom>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
    </S.Body>
  );
}

export default Ex01;

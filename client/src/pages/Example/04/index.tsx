import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import ExGraph from "../../../components/pages/Example/ExGraph";

interface Ex04Props {
  sad?: boolean;
}

const imgUrl = {
  smile: "/assets/img/icon/smileIcon.svg",
  sad: "/assets/img/icon/sadIcon.svg",
};

// shp09랑 공용
function Ex04({ sad }: Ex04Props) {
  const userInfo = useRecoilValue(userInfoAtom);

  const [change, setChange] = useState<boolean>(false);

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [sad ? `"나는 지금 슬퍼요."` : `"나는 지금 재미있어요!"`];

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
        setChange(true);
      }, 3000);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      {!change && (
        <>
          <S.Content>
            <S.Image src={sad ? imgUrl.sad : imgUrl.smile} />
          </S.Content>

          <Bottom>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
        </>
      )}

      {change && <ExGraph sad={sad ? true : false} />}
    </S.Body>
  );
}

export default Ex04;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import axiosRequest from "../../../api";
import { ResData } from "../../../@types";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

// gui04 ~ guiShp04
function Ex02() {
  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  const navigate = useNavigate();

  const [click, setClick] = useState(true);

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [
    `그리고 얼만큼 ${name}와\n 같은지 알려줄래?`,
    "가장 작은 네모는 너의 마음과\n 아주 조금 비슷하다는 걸 말해.", // 1
    "그 다음 네모는 조금 비슷한 거고,", // 2
    "그 다음 네모는 꽤 많이,", // 3
    "마지막 가장 큰 네모는 너의 마음과\n 아주 많이 비슷하다는거야!", // 4
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
      setClick(false);

      setTimeout(() => {
        navigate("/example/3");
      }, 1500);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        {currentTTS !== 0 && click && (
          <S.Image src="/assets/img/icon/click.svg" click={click} changeNum={currentTTS !== 0 ? currentTTS : 0} />
        )}

        <S.Div>
          <S.First changeNum={currentTTS} />
          <S.Second changeNum={currentTTS} />
          <S.Third changeNum={currentTTS} />
          <S.Fourth changeNum={currentTTS} />
        </S.Div>
      </S.Content>

      <Bottom>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
    </S.Body>
  );
}

export default Ex02;

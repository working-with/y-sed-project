import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import useCloseBtn from "../../hooks/useCloseBtn";
import axiosRequest from "../../api";
import { ResData } from "../../@types";

import * as S from "./index.styled";

import Bottom from "../../components/common/Bottom";

function Tri() {
  useCloseBtn();

  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  // 1) 연수리 - 남자 아이 - 하준 (남성, 아동) BOY = 'nhajun'
  // 2) 연수리 - 여자 아이 - 다인 (여성, 아동) GIRL = 'vdain'
  // 3) 이야기 들려주는 부분(스토리) -  고은(여성, 청년) WOMAN = 'ngoeun'

  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [`내가 ${name}나 다른 아이들에게 일어날 수 있는 몇 가지 이야기를 읽어줄거야. 잘 들어줄 수 있지?`];

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
        navigate("/example/1");
      }, 1500);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.ImgBox>
        <img src={`/assets/img/storyImg/1/1-${userInfo.gender ? "B1" : "G1"}.svg`} alt="tri_image" />
        <img src={`/assets/img/storyImg/7/7-${userInfo.gender ? "B1" : "G1"}.svg`} alt="tri_image" />
      </S.ImgBox>

      <Bottom>
        내가 {name}나 다른 아이들에게
        <br />
        일어날 수 있는 몇 가지 이야기를
        <br />
        읽어줄거야. 잘 들어줄 수 있지?
      </Bottom>
    </S.Body>
  );
}

export default Tri;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import useCloseBtn from "../../hooks/useCloseBtn";
import { userInfoAtom } from "../../recoil/atoms/user.atom";
import getName from "../../utils/getName";
import axiosRequest from "../../api";
import { ResData } from "../../@types";

import * as S from "./index.styled";

import Button from "../../components/common/Button";

function Start() {
  useCloseBtn();

  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleBtnClick = () => {
    setClick(true);
  };

  const handleHelloClick = () => {
    navigate("/tri");
  };

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  const kidName = name.includes("이") ? `${name.slice(0, name.length - 1)}아` : `${name}야`;

  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [`안녕 ${kidName}~!`];

  useEffect(() => {
    const currentAudio = audioRef.current;

    const plusCurrentTTS = () => {
      setCurrentTTS((prev: number) => prev + 1);
    };

    if (currentAudio && text[currentTTS] && click) {
      currentAudio.pause();
      currentAudio.src = "";

      currentAudio.addEventListener("ended", plusCurrentTTS);

      const getVoice = async () => {
        const postData = {
          name: userInfo.lastName,
          voiceType: userInfo.gender === 1 ? "nhajun" : "vdain",
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
  }, [audioRef.current, currentTTS, click]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.TitleBox>
        {!click && <img src="/assets/img/icon/smileIcon.svg" alt="smile_icon" />}
        {click && <span>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</span>}
      </S.TitleBox>

      <S.ButtonBox>
        <Button variant="blue" onClick={handleBtnClick}>
          {click ? <div onClick={handleHelloClick}>안녕?</div> : "시작하기"}
        </Button>
      </S.ButtonBox>
    </S.Body>
  );
}

export default Start;

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import axiosRequest from "../../../api";
import { Experiment, ResData } from "../../../@types";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Begin() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId } = params;

  const userInfo = useRecoilValue(userInfoAtom);

  const [image, setImage] = useState<string>();

  useEffect(() => {
    const getImage = async () => {
      const response = await axiosRequest.requestAxios<ResData<Experiment>>(
        "get",
        `/v1/experiment?gender=${userInfo.gender}&code=0${experimentId}`,
      );
      const data = response.data.data;
      const exImage = data[0].image[0].url;

      setImage(exImage);
    };

    getImage();
  }, []);

  // tts
  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = ["이제 이야기를 들려줄 거야! 잘 들어보자."];

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
        navigate(`/quiz/${experimentId}/narration/0`);
      }, 3000);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        <img src={image && image} alt="begin_experiment_Image" />
      </S.Content>

      <Bottom top={true}>
        이제 이야기를 들려줄거야!
        <br />잘 들어보자.
      </Bottom>
    </S.Body>
  );
}

export default Begin;

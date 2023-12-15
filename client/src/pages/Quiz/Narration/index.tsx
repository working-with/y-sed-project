import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import axiosRequest from "../../../api";
import { Experiment, Image, ResData } from "../../../@types";
import getNarration from "../../../utils/getNarration";
import getName from "../../../utils/getName";
import { lastImageAtom } from "../../../recoil/atoms/image.atom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Narration() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId } = params;

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  const [image, setImage] = useState<Image[]>();
  const [lastImage, setLastImage] = useRecoilState(lastImageAtom);

  useEffect(() => {
    const getContent = async () => {
      const response = await axiosRequest.requestAxios<ResData<Experiment>>(
        "get",
        `/v1/experiment?gender=${userInfo.gender}&code=0${experimentId}`,
      );
      const data = response.data.data;
      const exImage = data[0].image;

      setImage(exImage);
      setLastImage(exImage[exImage.length - 1].url);
    };

    getContent();
  }, []);

  // experimentId에 맞게 narration 가져오기
  const exId = Number(experimentId) - 1;
  const { narration } = getNarration({ name, exId });

  const [currentTTS, setCurrentTTS] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text =
    Number(experimentId) === (1 || 6)
      ? [narration[0][0], narration[0][1], narration[0][2], narration[1][0]]
      : Number(experimentId) === (2 || 7 || 9)
      ? [narration[0][0], narration[1][0]]
      : Number(experimentId) === (3 || 5 || 8)
      ? [narration[0][0], narration[0][1], narration[1][0]]
      : [narration[0][0], narration[0][1], narration[1][0], narration[1][1]];

  // [narration[0][0], narration[0][1], narration[0][2], narration[1][0]] 1, 6
  // [narration[0][0], narration[1][0]] 2, 7, 9
  // [narration[0][0], narration[0][1], narration[1][0]] 3, 5, 8
  // [narration[0][0], narration[0][1], narration[1][0], narration[1][1]] 4

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
          voiceType: "ngoeun",
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
        navigate(`/quiz/${experimentId}/content/0`);
      }, 3000);
    }
  }, [audioRef.current, currentTTS]);

  return (
    <S.Body>
      <audio ref={audioRef} />

      <S.Content>
        <img
          src={currentTTS === text.length - 1 || !text[currentTTS] ? image && image[1].url : image && image[0].url}
          alt="이미지"
        />
      </S.Content>

      <Bottom top={true}>{!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}</Bottom>
    </S.Body>
  );
}

export default Narration;

// image && text.length - 1 ? image[0].url : image[1].url
// experiment?.map((el) => el.url)
// {narration[number].map((el) => )}

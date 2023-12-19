import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { userInfoAtom } from "../../../../recoil/atoms/user.atom";
import getName from "../../../../utils/getName";
import axiosRequest from "../../../../api";
import { ResData } from "../../../../@types";

import * as S from "./index.styled";

import Graph from "../../../common/Graph";
import Bottom from "../../../common/Bottom";
import Ex04 from "../../../../pages/Example/04";

interface ExGraphProps {
  sad?: boolean;
}

// shp07 - 08
function ExGraph({ sad }: ExGraphProps) {
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.lastName);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [btnClick, setBtnClick] = useState<boolean>(false);

  const handleGraphClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
    setCurrentTTS((prev: number) => prev + 1);
  };

  const handleBlueBtnClick = () => {
    const currentAudio = audioRef.current;
    if (currentAudio) currentAudio.pause();

    setBtnClick(true);
    if (sad) navigate("/example/finish");
  };

  const [currentTTS, setCurrentTTS] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const text = [
    `그리고 얼만큼 ${name} 마음과\n 같은지 알려줄래?`,
    sad ? `와! 좋았어!\n다음으로 가볼까?` : `잘했어!\n이제 옆에 파란 버튼을 눌러보자.`,
  ];

  useEffect(() => {
    const currentAudio = audioRef.current;

    const plusCurrentTTS = () => {
      // setCurrentTTS((prev: number) => prev + 1);
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

  return (
    <S.Body>
      <audio ref={audioRef} />

      {!btnClick && (
        <>
          <S.Content>
            <Graph onClick={handleGraphClick} index={selectedIndex} />
          </S.Content>

          <Bottom button={true} color={selectedIndex !== null ? "bluePlay" : ""} onClick={handleBlueBtnClick}>
            {!text[currentTTS] ? text[text.length - 1] : text[currentTTS]}
          </Bottom>
        </>
      )}

      {/* Shp06 컴포넌트를 selectedItemIndex가 null이 아닌 경우에만 렌더링 */}
      {btnClick && <Ex04 sad={true} />}
    </S.Body>
  );
}

export default ExGraph;

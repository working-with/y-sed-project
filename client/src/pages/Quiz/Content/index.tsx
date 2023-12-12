import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";
import common from "../../../utils/common";
import axiosRequest from "../../../api";
import { ResData, Script } from "../../../@types";
import { lastImageAtom } from "../../../recoil/atoms/image.atom";
import { Question } from "../../../@types/Question";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import StatusBar from "../../../components/common/StatusBar";

function Content() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId, oxId } = params;

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const { QOX, SQX } = common(name);

  const image = useRecoilValue(lastImageAtom);

  const handleOClick = () => {
    navigate(`/quiz/${params.experimentId}/so/${params.oxId}`);
  };

  const handleXClick = () => {
    if (experimentId === "9" && oxId === "2") {
      navigate("/finish");
    } else navigate(`/quiz/${experimentId}/next/${oxId}`);
  };

  const [status, setStatus] = useState<number>(11);

  // quiz content script -> ~이의 마음
  const [script, setScript] = useState<Question[]>();

  // sqx 스크립트 나올 차례 -> ~이도 그럴 것 같아? 안 그럴 것 같아?
  const [sqx, setSqx] = useState<boolean>(false);

  useEffect(() => {
    const getContent = async () => {
      const response = await axiosRequest.requestAxios<ResData<Script>>(
        "get",
        `/v1/experiment/script?code=0${experimentId}`,
      );
      const data = response.data.data;
      const test = data[0].question;

      setScript(test);
    };

    getContent();
  }, []);

  useEffect(() => {
    if (Number(oxId) === 0) {
      setTimeout(() => {
        setStatus(Number(oxId));

        setTimeout(() => {
          setSqx(true);
        }, 10000);
      }, 10000);
    } else {
      setStatus(Number(oxId));

      setTimeout(() => {
        setSqx(true);
      }, 10000);
    }
  }, []);

  return (
    <S.Body>
      <S.Content>
        <S.Qox>
          <div>
            <img src="/assets/img/icon/blueO.svg" alt="O" onClick={handleOClick} />
            <img src="/assets/img/icon/redX.svg" alt="X" onClick={handleXClick} />
          </div>
        </S.Qox>

        {/* 11 -> 0 */}
        <StatusBar status={status} />
        <img src={image} alt="storyImage" />
      </S.Content>

      {/* QOX -> script -> SQX */}
      <Bottom button={sqx && true}>
        {/* 1: 자 이제부터 내가 들려주는 말이 */}
        {status === 11 && QOX}
        {/* 2: 본문 */}
        {status !== 11 && script && !sqx && `"${script[status].script}"`}
        {/* 3: 니 마음과 같은지 아닌지 */}
        {sqx && SQX}
      </Bottom>
    </S.Body>
  );
}

export default Content;

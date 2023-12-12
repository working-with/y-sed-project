import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (image) {
      setTimeout(() => {
        navigate(`/quiz/${experimentId}/narration/0`);
      }, 20000);
    }
  }, []);

  return (
    <S.Body>
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

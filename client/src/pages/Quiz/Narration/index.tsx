import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import axiosRequest from "../../../api";
import { Experiment, Image, ResData } from "../../../@types";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Narration() {
  const navigate = useNavigate();
  const params = useParams();

  const { experimentId } = params;

  const userInfo = useRecoilValue(userInfoAtom);

  const [image, setImage] = useState<Image[]>();

  useEffect(() => {
    const getContent = async () => {
      const response = await axiosRequest.requestAxios<ResData<Experiment>>(
        "get",
        `/v1/experiment?gender=${userInfo.gender}&code=0${experimentId}`,
      );
      const data = response.data.data;
      const exImage = data[0].image;

      setImage(exImage);
    };

    getContent();
  }, []);

  useEffect(() => {
    if (image) {
      // setTimeout(() => {
      //   navigate(`/quiz/${experimentId}/content/0`);
      // }, 10000);
    }
  }, []);

  return (
    <S.Body>
      <S.Content>
        <img src={image && image[0].url} alt="이미지" />
      </S.Content>

      <Bottom top={true}>나레이션 부분</Bottom>
    </S.Body>
  );
}

export default Narration;

// experiment?.map((el) => el.url)

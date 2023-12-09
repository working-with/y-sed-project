import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import IconBox from "../../../components/common/IconBox";

function Ex03() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/example/4");
    }, 10000);
  }, []);

  return (
    <S.Body>
      <S.Image src="/assets/img/icon/click.svg" />

      <S.Content>
        <IconBox iconName="smileIcon" />
        <IconBox iconName="sadIcon" />
      </S.Content>

      <Bottom>
        그럼 우리가 방금 배운거
        <br />
        간단하게 실험 해볼까?
      </Bottom>
    </S.Body>
  );
}

export default Ex03;

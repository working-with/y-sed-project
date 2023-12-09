import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

function Narration() {
  return (
    <S.Body>
      <S.Content>
        <img src="/assets/img/storyImg/9/9-G1.svg" alt="이미지" />
      </S.Content>

      <Bottom top={true}>나레이션 부분</Bottom>
    </S.Body>
  );
}

export default Narration;

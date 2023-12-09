import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { userInfoAtom } from "../../../../recoil/atoms/user.atom";
import getName from "../../../../utils/getName";

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
  const name = getName(userInfo.name);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [btnClick, setBtnClick] = useState<boolean>(false);

  const handleGraphClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleBlueBtnClick = () => {
    setBtnClick(true);

    if (sad) navigate("/example/finish");
  };

  return (
    <S.Body>
      {!btnClick && (
        <>
          <S.Content>
            <Graph onGraphClick={handleGraphClick} />
          </S.Content>

          <Bottom button={true} color={selectedIndex ? "bluePlay" : ""} onClick={handleBlueBtnClick}>
            {selectedIndex
              ? sad
                ? `와! 좋았어\n다음으로 가볼까?`
                : `잘했어!\n이제 옆에 파란 버튼을 눌러보자.`
              : `그리고 얼만큼 ${name} 마음과\n같은지 알려줄래?`}
          </Bottom>
        </>
      )}

      {/* Shp06 컴포넌트를 selectedItemIndex가 null이 아닌 경우에만 렌더링 */}
      {btnClick && <Ex04 sad={true} />}
    </S.Body>
  );
}

export default ExGraph;

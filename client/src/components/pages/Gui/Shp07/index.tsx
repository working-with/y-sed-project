import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

import { userInfoAtom } from "../../../../recoil/atoms/user.atom";
import getName from "../../../../utils/getName";

import * as S from "./index.styled";

import Graph from "../../../common/Graph";
import Bottom from "../../../common/Bottom";
import Shp06 from "../../../../pages/Gui/04";

// shp07 - 08
function Shp07() {
  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [btnClick, setBtnClick] = useState<boolean>(false);

  const handleGraphItemClick = (index: number) => {
    setSelectedItemIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleBlueBtnClick = () => {
    setBtnClick(true);
    // setBtnClick(false); // 이 부분을 주석 처리 또는 제거
  };

  useEffect(() => {
    console.log(btnClick, "버튼 클릭");
    console.log(selectedItemIndex, "선택된 아이템 번호");
  }, [btnClick, selectedItemIndex]);

  return (
    <S.Body>
      {!btnClick && (
        <>
          <S.Content>
            <Graph onGraphItemClick={handleGraphItemClick} />
          </S.Content>
          <Bottom button={true} color={selectedItemIndex !== null ? "bluePlay" : ""} onClick={handleBlueBtnClick}>
            {selectedItemIndex !== null
              ? `잘했어!\n이제 옆에 파란 버튼을 눌러보자.`
              : `그리고 얼만큼 ${name}이와\n같은지 알려줄래?`}
          </Bottom>
        </>
      )}

      {/* Shp06 컴포넌트를 selectedItemIndex가 null이 아닌 경우에만 렌더링 */}
      {btnClick && <Shp06 sad={true} />}
    </S.Body>
  );
}

export default Shp07;

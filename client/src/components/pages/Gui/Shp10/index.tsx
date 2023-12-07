import { useRecoilValue } from "recoil";
import { useState } from "react";

import { userInfoAtom } from "../../../../recoil/atoms/user.atom";
import getName from "../../../../utils/getName";

import * as S from "./index.styled";

import Graph from "../../../common/Graph";
import Bottom from "../../../common/Bottom";
import ShpFin from "../ShpFin";

// shp10 - 11
function Shp10() {
  const userInfo = useRecoilValue(userInfoAtom);
  const { name } = getName(userInfo.name);

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [btnClick, setBtnClick] = useState<boolean>(false);

  const handleGraphItemClick = (index: number) => {
    setSelectedItemIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleBlueBtnClick = () => {
    setBtnClick(true);
  };

  return (
    <S.Body>
      {!btnClick && (
        <>
          <S.Content>
            <Graph onGraphItemClick={handleGraphItemClick} />
          </S.Content>
          <Bottom button={true} color={selectedItemIndex !== null ? "bluePlay" : ""} onClick={handleBlueBtnClick}>
            {selectedItemIndex !== null
              ? `와! 좋았어.\n다음으로 가볼까?`
              : `그리고 얼만큼 ${name}이와\n같은지 알려줄래?`}
          </Bottom>
        </>
      )}

      {btnClick && <ShpFin />}
    </S.Body>
  );
}

export default Shp10;

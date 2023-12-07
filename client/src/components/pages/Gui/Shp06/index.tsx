import { useEffect, useState } from "react";

import * as S from "./index.styled";

import Bottom from "../../../common/Bottom";
import Shp10 from "../Shp10";

interface Shp06Props {
  sad?: boolean;
}

const imgUrl = {
  smile: "/assets/img/icon/smileIcon.svg",
  sad: "/assets/img/icon/sadIcon.svg",
};

// shp09랑 공용
function Shp06({ sad }: Shp06Props) {
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (sad) {
        setChange(true);
      }
    }, 10000);
  }, [change]);

  return (
    <S.Body>
      {!change && (
        <>
          <S.Content>
            <S.Image src={sad ? imgUrl.sad : imgUrl.smile} />
          </S.Content>

          <Bottom>{sad ? `"나는 지금 슬퍼요."` : `"나는 지금 재미있어요!"`}</Bottom>
        </>
      )}

      {change && <Shp10 />}
    </S.Body>
  );
}

export default Shp06;

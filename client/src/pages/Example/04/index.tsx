import { useEffect, useState } from "react";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import ExGraph from "../../../components/pages/Example/ExGraph";

interface Ex04Props {
  sad?: boolean;
}

const imgUrl = {
  smile: "/assets/img/icon/smileIcon.svg",
  sad: "/assets/img/icon/sadIcon.svg",
};

// shp09랑 공용
function Ex04({ sad }: Ex04Props) {
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 10000);
  }, []);

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

      {change && <ExGraph sad={sad ? true : false} />}
    </S.Body>
  );
}

export default Ex04;

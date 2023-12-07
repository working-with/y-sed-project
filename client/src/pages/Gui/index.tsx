import { useEffect, useMemo, useRef, useState } from "react";

import * as S from "./index.styled";

import Gui01 from "../../components/pages/Gui/Gui01";
import Shp04 from "../../components/pages/Gui/Shp04";
import Shp05 from "../../components/pages/Gui/Shp05";
import Shp06 from "../../components/pages/Gui/Shp06";
import Shp07 from "../../components/pages/Gui/Shp07";

function Gui() {
  const [useEffectValue, setUseEffectValue] = useState<number>(1);
  const intervalIdRef = useRef<number | null>(null);

  const components = useMemo(() => {
    switch (useEffectValue) {
      case 1:
        return <Gui01 />;
      case 2:
        return <Shp04 />;
      case 3:
        return <Shp05 />;
      case 4:
        return <Shp06 />;
      case 5:
        return <Shp07 />;
      default:
        return <Gui01 />;
    }
  }, [useEffectValue]);

  useEffect(() => {
    // intervalIdRef.current에 현재 동작 중인 interval을 저장
    intervalIdRef.current = window.setInterval(() => {
      setUseEffectValue(prevValue => (prevValue % 5) + 1);
    }, 50000);

    // 컴포넌트가 언마운트될 때 interval을 정리합니다.
    return () => {
      // 현재 동작 중인 interval을 clearInterval
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(useEffectValue);
    // useEffectValue가 11일 때, 현재 동작 중인 interval을 clearInterval
    if (useEffectValue === 5 && intervalIdRef.current !== null) {
      window.clearInterval(intervalIdRef.current);
    }
  }, [useEffectValue]);

  return <S.Body>{components}</S.Body>;
}

export default Gui;

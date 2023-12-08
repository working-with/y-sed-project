import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

import { includeCloseState } from "../recoil/atoms/closeBtn.atom";

const useCloseBtn = () => {
  const setIncludeClose = useSetRecoilState(includeCloseState);

  useEffect(() => {
    setIncludeClose(false);

    return () => {
      setIncludeClose(true);
    };
  }, [setIncludeClose]);
};

export default useCloseBtn;

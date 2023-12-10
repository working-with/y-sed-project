import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { includeCloseState } from "../../../recoil/atoms/closeBtn.atom";

import CloseBtn from "../CloseBtn";

function Layout() {
  const includeClose = useRecoilValue(includeCloseState);

  return (
    <>
      {includeClose && <CloseBtn />}
      <Outlet />
    </>
  );
}

export default Layout;

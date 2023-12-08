import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";
import IconBox from "../../../components/common/IconBox";
import { useNavigate } from "react-router-dom";

// gui01 - 03
function Gui01() {
  const navigate = useNavigate();

  const [comment, setComment] = useState<boolean>(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setComment(true);

      // gui03
      setTimeout(() => {
        setBackground(true);

        setTimeout(() => {
          navigate("/gui/2");
        }, 20000);
      }, 20000);
    }, 20000);
  }, []);

  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  return (
    <S.Body>
      <S.Content>
        {background && (
          <>
            <S.Image src="/assets/img/icon/click.svg" />
            <S.Div>
              <div>
                <img src="/assets/img/icon/blueO.svg" />
                <img src="/assets/img/icon/redX.svg" />
              </div>
            </S.Div>
          </>
        )}

        <S.ImageBox>
          <IconBox iconName="smileIcon" />
          <IconBox iconName="angryIcon" />
          <IconBox iconName="sadIcon" />
          <IconBox iconName="happyIcon" />
        </S.ImageBox>
      </S.Content>

      <Bottom>
        {background ? (
          `이 마음이 ${name}와\n같은지 아닌지`
        ) : (
          <>
            {!comment && `각 이야기 마다, ${name}가\n느낄 수 있는 다양한 마음이 있어.`}
            {comment && "이야기가 끝난 후에는 내가\n이 마음에 대해 물어볼건데,"}
          </>
        )}
      </Bottom>
    </S.Body>
  );
}

export default Gui01;

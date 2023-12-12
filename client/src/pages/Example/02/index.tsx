import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../../recoil/atoms/user.atom";
import getName from "../../../utils/getName";

import * as S from "./index.styled";

import Bottom from "../../../components/common/Bottom";

// gui04 ~ guiShp04
function Ex02() {
  const userInfo = useRecoilValue(userInfoAtom);
  const name = getName(userInfo.name);

  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  useEffect(() => {
    let timeoutId1: NodeJS.Timeout;
    let timeoutId2: NodeJS.Timeout;
    let timeoutId3: NodeJS.Timeout;
    let timeoutId4: NodeJS.Timeout;

    const runAnimation = async () => {
      timeoutId1 = setTimeout(() => {
        setClick(true);
        setFirst(true);

        timeoutId2 = setTimeout(() => {
          setFirst(false);
          setSecond(true);

          timeoutId3 = setTimeout(() => {
            setSecond(false);
            setThird(true);

            timeoutId4 = setTimeout(() => {
              setThird(false);
              setFourth(true);

              setTimeout(() => {
                navigate("/example/3");
              }, 10000);
            }, 10000);
          }, 10000);
        }, 10000);
      }, 10000);
    };

    runAnimation();

    // Cleanup 함수를 반환하여 컴포넌트가 언마운트되면 실행될 수 있도록 합니다.
    return () => {
      // 모든 타이머를 클리어합니다.
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
    };
  }, []);

  return (
    <S.Body>
      <S.Content>
        {click && (
          <S.Image
            src="/assets/img/icon/click.svg"
            click={click}
            first={first}
            second={second}
            third={third}
            fourth={fourth}
          />
        )}

        <S.Div>
          <S.First first={first} />
          <S.Second second={second} />
          <S.Third third={third} />
          <S.Fourth fourth={fourth} />
        </S.Div>
      </S.Content>

      <Bottom>
        {!click && `그리고 얼만큼 ${name}와\n같은지 알려줄래?`}

        {click && first && "가장 작은 네모는 너의 마음과\n아주 조금 비슷하다는 걸 말해."}
        {second && "그 다음 네모는 너의 마음과\n약간 비슷하다는 거야."}
        {third && "그 다음 네모는 너의 마음과\n꽤 많이 비슷하다는 뜻이고,"}
        {fourth && "마지막 가장 큰 네모는 너의 마음과\n아주 많이 비슷하다는거야!"}
      </Bottom>
    </S.Body>
  );
}

export default Ex02;

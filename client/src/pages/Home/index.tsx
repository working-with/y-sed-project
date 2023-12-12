import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CSVLink } from "react-csv";

import { userInfoAtom } from "../../recoil/atoms/user.atom";
import useCloseBtn from "../../hooks/useCloseBtn";
import validateInput from "../../utils/validateInput";
import axiosRequest from "../../api";
import { KidInformation, ResData } from "../../@types";
import MESSAGE from "../../constants/message";
import STATUS_CODE from "../../constants/statusCode";
import getHeaders from "../../utils/getHeaders";

import * as S from "./index.styled";

import Button from "../../components/common/Button";

function Home() {
  useCloseBtn();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 여자: 0 / 남자: 1
    setUserInfo((prev: any) => ({
      ...prev,
      [name]: value,
      gender: value === "여자" ? 0 : 1,
    }));
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleStartClick = async () => {
    const fail = validateInput(userInfo).filter(info => info.checked);

    if (fail.length > 0) {
      const errorMessage = fail[0].message;
      alert(errorMessage);
    } else {
      const response = await axiosRequest.requestAxios<ResData<KidInformation>>("post", "/v1/kid", userInfo);

      if (response.status === STATUS_CODE.CREATED) {
        navigate("/start");
      }
    }
  };

  // excel-download
  const [state, setState] = useState<KidInformation[]>([]);

  const data = [{ name: "조아연", code: "A1234", gender: 0 }];

  const handleExcelDownClick = async () => {
    if (window.confirm(MESSAGE.EXCEL_DOWN)) {
      const response = await axiosRequest.requestAxios<ResData<KidInformation[]>>("get", "/v1/kid");
      setState(response.data);
      console.log(response.data);
    }
  };

  return (
    <S.Body>
      <S.Content>
        <S.Wrapper>
          <S.TitleBox>
            <span>아동 이름</span>
          </S.TitleBox>
          <S.Input name="name" onChange={handleChange} />
        </S.Wrapper>

        <S.Wrapper>
          <S.TitleBox>
            <span>아동 코드</span>
          </S.TitleBox>
          <S.Input name="code" onChange={handleChange} />
        </S.Wrapper>

        <S.Wrapper>
          <S.TitleBox>
            <span>성별</span>
          </S.TitleBox>
          <S.Input name="gender" onChange={handleChange} />
        </S.Wrapper>

        <S.ButtonBox>
          <Button variant="green" onClick={handleExcelDownClick}>
            <CSVLink data={data} headers={getHeaders} filename="아동 실험 전체 코드">
              엑셀 다운
            </CSVLink>
          </Button>

          <Button variant="blue" onClick={handleStartClick}>
            시작하기
          </Button>
        </S.ButtonBox>
      </S.Content>
    </S.Body>
  );
}

export default Home;

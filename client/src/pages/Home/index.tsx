import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { CSVLink } from "react-csv";

import { userInfoAtom, userSelector } from "../../recoil/atoms/user.atom";
import useCloseBtn from "../../hooks/useCloseBtn";
import validateInput from "../../utils/validateInput";
import axiosRequest from "../../api";
import { KidInformation, ResData } from "../../@types";
import MESSAGE from "../../constants/message";
import STATUS_CODE from "../../constants/statusCode";
import getHeaders from "../../utils/getHeaders";

import * as S from "./index.styled";

import Button from "../../components/common/Button";

interface Excel {
  data: Data[];
}

interface Data {
  id: string;
  createdAt: Date;
  name: string;
  code: string;
  gender: number;
  survey: [
    {
      [key: string]: DefaultData;
    },
  ];
}

interface DefaultData {
  [key: string]: number | null | string;
}

function Home() {
  useCloseBtn();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const userSelectors = useRecoilValue(userSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prev: KidInformation) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserInfo({
      kidId: "",
      code: "",
      gender: "",
      firstName: "",
      lastName: "",
    });
  }, []);

  const [xxClick, setXXClick] = useState<boolean>(false); // 여자
  const [xyClick, setXYClick] = useState<boolean>(false); // 남자

  const handleGenderClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;

    // 여자: 0 / 남자: 1
    if (value === "여자") {
      setXXClick(true);
      setXYClick(false);

      setUserInfo((prev: KidInformation) => ({
        ...prev,
        gender: 0,
      }));
    } else {
      setXYClick(true);
      setXXClick(false);

      setUserInfo((prev: KidInformation) => ({
        ...prev,
        gender: 1,
      }));
    }
  };

  const handleStartClick = async () => {
    const fail = validateInput(userSelectors).filter(info => info.checked);

    if (fail.length > 0) {
      const errorMessage = fail[0].message;
      alert(errorMessage);
    } else {
      const response = await axiosRequest.requestAxios<ResData<KidInformation>>("post", "/v1/kid", userSelectors);
      const data = response.data;

      if (response.status === STATUS_CODE.CREATED) {
        setUserInfo((prev: KidInformation) => ({
          ...prev,
          kidId: data.kidId,
        }));

        navigate("/start");
      }
    }
  };

  // excel-download
  const [state, setState] = useState<DefaultData[]>([]);

  const handleExcelDownClick = async () => {
    if (window.confirm(MESSAGE.EXCEL_DOWN)) {
      const response = await axiosRequest.requestAxios<ResData<Excel>>("get", "/v1/kid");
      const data = response.data.data;

      const sampleData: DefaultData[] = [];

      // data 안에 객체 안에 survey 라는 배열 존재 1-1: {scale: , boolean}
      for (let i = 0; i < data.length; i++) {
        const { name, code, gender, survey } = data[i];
        const currentData: DefaultData = { name, code, gender };

        for (let j = 0; j < survey?.length; j++) {
          const [qNum, answers] = Object.entries(survey[j])[0];
          const { scaleAnswer, booleanAnswer } = answers;

          const [ex, ox] = qNum.split("-");

          currentData[`${ex}-${ox}-booleanAnswer`] = booleanAnswer;
          currentData[`${ex}-${ox}-scaleAnswer`] = scaleAnswer;
        }

        sampleData.push(currentData);
      }

      setState(sampleData);
    }
  };

  const csvLink = useRef<CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }>(null);

  useEffect(() => {
    if (state.length > 0) {
      csvLink.current?.link.click();
      setState([]);
    }
  }, [state]);

  return (
    <S.Body>
      <S.Content>
        <S.Wrapper>
          <S.TitleBox>
            <span>아동 이름</span>
          </S.TitleBox>
          <S.FirstInput name="firstName" onChange={handleChange} />
          <S.TwoInput name="lastName" onChange={handleChange} />
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

          <S.Button clicked={xxClick} value="여자" onClick={handleGenderClick}>
            여자
          </S.Button>
          <S.Button clicked={xyClick} value="남자" onClick={handleGenderClick}>
            남자
          </S.Button>
        </S.Wrapper>

        <S.ButtonBox>
          <Button variant="green" onClick={handleExcelDownClick}>
            엑셀 다운
          </Button>
          <CSVLink ref={csvLink} data={state} headers={getHeaders()} filename="아동 실험 전체 코드" />

          <Button variant="blue" onClick={handleStartClick}>
            시작하기
          </Button>
        </S.ButtonBox>
      </S.Content>
    </S.Body>
  );
}

export default Home;

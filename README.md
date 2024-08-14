# y-sed-project

<img width="1000" alt="y-sed-project" src="https://github.com/user-attachments/assets/b6388c87-f7f9-45a0-bd0e-de412db62d74">

## 프로젝트 소개

연세대학교 아동가족학과 사회정서발달연구실에서 진행한 <strong>생애 초기 가정 환경과 유아의 공감 관련 행동 발달을 알아보기 위한 실험 연구 프로젝트</strong>입니다. 이를 위해 설문 조사를 위한 웹 사이트가 제작되었습니다. 이 프로젝트는 성별에 따라 맞춤형 사진과 음성 나레이션 기능을 제공하며, 음성이 끝나면 페이지가 자동으로 넘어가는 방식으로 퀴즈를 통해 설문 조사를 진행합니다. 조사 결과는 엑셀 파일로 다운로드할 수 있습니다. 연구는 만 4~5세 유아와 어머니를 대상으로 하며, 인스타그램 및 예약 링크를 통해 참여할 수 있습니다.
<br /><br />
(현재 2024년 8월 14일 기준으로 조사는 종료되었습니다.)

- Instagram > https://www.instagram.com/p/C1v9EYhrb5R/?igsh=aTQ0bTB1cjdmZXll
- 예약 링크 > https://whattime.co.kr/ysed225/ysed225?time_zone=Asia%2FSeoul&times=2024-01-09T00%3A00%3A00%2B09%3A00

<br />

## 팀원 소개

| 팀원 | 담당 |
| :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| 김희영 | 연세대학교 아동가족학과 사회정서발달연구실 기획 및 소통 |
| 남혜민 | 백엔드 및 배포 |
| 조아연 | 프론트엔드 |

<br />

## 핵심 기능

### 프로젝트 연구자 입력
- 아동 이름, 아동 코드, 성별 입력
- 성별에 따라 이후에 표시될 이미지가 자동으로 여자 아이 또는 남자 아이 사진으로 변경

### TTS 서비스
- 네이버 CLOVA API를 사용하여 TTS(음성 합성) 서비스 제공
- 각 페이지의 지문을 페이지 전환 시 자동으로 재생, 음성이 끝난 후 페이지가 자동으로 이동

### OX 퀴즈 및 그래프 선택
- OX 퀴즈의 O 클릭 시, 그래프(1-4)에서 퀴즈별 수치 선택 가능 / X 클릭 시 다음 퀴즈로 이동
- 퀴즈 완료 후 축하 MP3 자동 재생

### 엑셀 다운로드
- react-csv를 사용하여 아동이 입력한 퀴즈 답안을 엑셀 파일로 다운로드

<br />

## 기술 스택

#### FE
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

#### BE
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-dd2c00?style=for-the-badge&logo=firebase&logoColor=white)

<br />

## 화면 디자인

> Galaxy Tab의 가로 사이즈를 기준으로 화면이 제작되었으며, 음성 자동 재생 후 페이지가 넘어갑니다.

| 연구자 입력 | 프로젝트 시작 |
| :-------------------------------------------: | :------------: |
| <img width="1440" alt="연구자 입력" src="https://github.com/user-attachments/assets/9f0db4f8-b67c-42b8-82bc-28ceb1be9fff"> | <img width="1440" alt="프로젝트 시작" src="https://github.com/user-attachments/assets/b9a70780-25fb-4d18-9fec-b5b50532a422"> |  
| 예시 1 | 예시 2 |  
| <img width="1440" alt="예시 1" src="https://github.com/user-attachments/assets/2cb73d34-aa7f-43c2-b576-1263446e6aa5"> | <img width="1440" alt="예시 2" src="https://github.com/user-attachments/assets/d94f566c-d7a1-4903-9725-0d977ba226b7"> |
| 퀴즈 전 나레이션 | OX 퀴즈 |  
| <img width="1440" alt="퀴즈 전 나레이션" src="https://github.com/user-attachments/assets/38933819-4192-473d-af0e-f174c005f0cc"> | <img width="1440" alt="OX 퀴즈" src="https://github.com/user-attachments/assets/1ce4a835-29b2-4205-9b73-041e4105c282"> |
| 1-4 그래프 선택 | 다음 버튼 페이지 |  
| <img width="1440" alt="1-4 그래프 선택" src="https://github.com/user-attachments/assets/d947b29b-8748-4033-a644-e183259ccf65"> | <img width="1440" alt="다음 버튼 페이지" src="https://github.com/user-attachments/assets/b5bf4b77-7b79-43f3-8258-443ccd0aeeed"> |
| 프로젝트 완료 | 프로젝트 중도 포기 |  
| <img width="1440" alt="프로젝트 완료" src="https://github.com/user-attachments/assets/9cfde5db-d9bf-4416-93e4-11b660f5f078"> | <img width="1440" alt="프로젝트 중도 포기" src="https://github.com/user-attachments/assets/bd94f511-b20b-459d-8a0b-5845663eaf79"> |

<br />

## 실행 방법
해당 Repository의 실행 방법에 대해 안내드립니다. 아래의 지침에 따라 실행해 주세요.

1. Git Repository를 클론해 주세요.
```
git clone https://github.com/working-with/y-sed-project.git
```
2. 클라이언트와 서버의 모든 패키지를 설치해 주세요.

```
// 클라이언트와 서버 패키지 설치
// 아래 명령어 중 하나를 선택하여 입력하세요.

npm i
npm install
```
3. 환경변수(.env)를 클라이언트 및 서버의 최상위 폴더에 작성해 주세요.
```
// client env

# TTS
CLOVA_REQUEST_URL=내용
CLOVA_CLIENT_ID=내용
CLOVA_CLIENT_SECRET=내용
```
```
// server env

PORT=8080

# Database
FIREBASE_API_KEY=내용
FIREBASE_AUTH_DOMAIN=내용
FIREBASE_PROJECT_ID=내용
FIREBASE_STORAGE_BUCKET=내용
FIREBASE_MESSAGING_SENDER_ID=내용
FIREBASE_APP_ID=내용

# TTS
CLOVA_REQUEST_URL=https://naveropenapi.apigw.ntruss.com/내용
CLOVA_CLIENT_ID=내용
CLOVA_CLIENT_SECRET=내용
```
4. 환경 변수를 입력한 후, 클라이언트와 서버를 실행해 주세요.
```
npm run start
```

---

무단 사용 및 도용, 복제 및 배포를 금합니다.<br />
Copyright 2024 연세대학교 아동가족학과 사회정서발달연구실. All rights reserved.

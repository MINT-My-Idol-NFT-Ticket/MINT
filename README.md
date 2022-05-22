<div align="center">
  <br />
  <img src="./readme_assets/logo_light.png" alt="MINT" height="150px" />
  <br />
  <h3>My Idol NFT Ticket</h3>
  <div>
  </div>
  <br />
</div>

## 목차

1. [**웹 서비스 소개**](#1)
1. [**개발 기간 및 일정**](#2)
1. [**기술 스택**](#3)
1. [**주요 기능**](#4)
1. [**서비스 아키텍처**](#5)
1. [**MINT 서비스 화면**](#6)
1. [**개발 팀 소개**](#7)
1. [**와이어 프레임**](#8)
1. [**요구사항 정의서**](#9)
1. [**기능 명세서**](#10)
1. [**개체-관계 모델(ERD)**](#11)
1. [**협업**](#12)
1. [**실행 방법**](#13)

<br />

<div id="1"></div>

## 💁 웹 서비스 소개
---
```🗯 Hyperledger Besu(Permissioned Blockchain Network)로 구성된 SSAFY Network 환경에서 개발되었습니다.```

**MINT** 는 콘서트 티켓을 NFT로 발급해주는 서비스입니다.

콘서트를 예매하면 해당 콘서트를 입장할 수 있는 티켓을 NFT로 발급해줍니다.

콘서트가 시작된 후 NFT티켓에 담겨있는 콘텐츠를 확인해 볼 수 있습니다. 원한다면 판매도 진행할 수 있는 거래 플랫폼도 이용할 수 있습니다.

[데모 영상](https://ipfs.io/ipfs/bafybeibs375wvc2hj3khve6sf6b2whxy7fsm6j2unvkgaghhtrlp25mioy/%EC%8B%9C%EC%97%B0%20%EC%98%81%EC%83%81.mp4)

<br />

> SSAFY Wallet이 있다면 누구든 사용가능합니다.

<br />

<div id="2"></div>

## 📅 개발 기간
---
2022.03.07 ~ 2022.04.08

<br />

<div id="3"></div>

## 🛠 기술 스택
---
### **Front-end**

| <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React.js" width="50px" height="50px" /> | <img src="https://mui.com/static/logo.png" alt="MUI" width="50px" height="50px" /> |<img src="https://i.imgur.com/GX0qzK1.jpeg" alt="Web3.js" width="50px" height="50px" /> |
| :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                             HTML5                                                              |                                                             CSS3                                                             |                                                               React                                                               |                                        MUI                                         |                                                                              Web3.js                                                                              |

### **Back-end**

| <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" width="50px" height="50px" /> |                                                                              <img src="https://i2.wp.com/thinkground.studio/wp-content/uploads/2020/05/200525_spring-boot-1.png?w=310&ssl=1" alt="Spring-Boot" width="50px" height="50px" />                                                                               | <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" width="50px" height="50px" /> |
| :--------------------------------------------------------------------------------------------------------------------------: |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|  :----------------------------------------------------------------------------------------------------------------------------: |
|                                                             Java                                                             |                                                                                                               Spring-Boot                                                                                                                                                                                  |                                                             MySQL                                                              |

### **Blockchain**

| <img src="https://solidity-kr.readthedocs.io/ko/latest/_images/logo.svg" alt="HTML5" width="50px" height="50px" /> | <img src="https://chainstack.com/wp-content/uploads/2021/12/hardhat.png" alt="CSS3" width="50px" height="50px" /> | <img src="https://openzeppelin.com/images/card.jpg" alt="MUI" width="50px" height="50px" /> |
|:------------------------------------------------------------------------------------------------------------------:| :--------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|
|                                                      Solidity                                                      |                                                      Hardhat                                                      |                                                                                   OpenZeppelin


### **DevOps**

| <img src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="NGiNX" width="50px" height="50px" /> | <img src="https://pbs.twimg.com/profile_images/1351702967561252865/aXfcETIt_400x400.jpg" alt="aws" width="50px" height="50px" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="Jenkins" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="docker" width="50px" height="50px" /> |
| :-------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|                                                         NGiNX                                                         |                                                               aws                                                                |                                                                            Jenkins                                                                            |                                                              docker                                                              |

<br />

<div id="4"></div>

## 💡 주요 기능
---
- 콘서트 티켓 예매시 NFT로 발급
- 콘서트 티켓 결제는 ERC20을 구현한 Ssafy Token을 이용(단위 : SSF) 
- 양면 NFT 티켓 (앞면은 티켓 입장권, 뒷면은 포토 카드) 
- 티켓에 3D 애니메이션 제공 
- NFT 포토 카드 사용자 간 거래 서비스 제공

<br />

<div id="5"></div>

## 📂 서비스 아키텍처
---
<img src="./readme_assets/arc.png" alt="아키텍처(Architecture)" width="1000px" />

<br />

<div id="6"></div>

## 🎥 MINT 서비스 화면
---
#### 콘서트 예매
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/68576770/162355196-9a0419ce-585d-4136-bc74-f3c439a55ca9.gif)

#### 3D NFT 티켓 조회(콘서트 시작 전)
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/68576770/162354522-240469f4-53f9-4353-9c40-a93f7024b2ec.gif)

#### 내가 가진 NFT 티켓 목록 조회
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/68576770/162356800-1c48a0d2-b4cc-4003-9d4f-0059a0a5b56f.gif)

#### 거래 가능한 NFT 티켓 구매
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/68576770/162356291-e5193584-5495-4ee1-8ecb-1a5ff53b175a.gif)

#### 거래 가능한 NFT 티켓 목록
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/68576770/162354923-2828d970-4293-46ec-8e7a-0e6bfbe7f9e6.gif)

#### 예매한 콘서트 취소
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/68576770/162358907-acfd92a2-0671-437b-b55d-f0363f340f41.gif)

#### 메인 화면(콘서트 목록)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/68576770/162354815-35f52890-18fd-41b7-ab94-8adab91fbc20.gif)

#### 지갑 연동
![ezgif com-gif-maker](https://user-images.githubusercontent.com/68576770/162354725-51c77048-37a3-4807-9898-f57ce8866967.gif)

#### 외부 앱(SSAFY WALLET) 이용 방법 안내
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/68576770/162359230-266e4d7e-b5f7-496d-a1db-7b12a699da30.gif)

<br />

<div id="7"></div>

## 👪 개발 팀 소개
---
<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/David-Lee-dev" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/57592095?v=4" alt="이주현 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/DECOY-DUCK" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/51963264?v=4" alt="오재문 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/maltepoo" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/78013903?v=4" alt="김정빈 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/BusChanny" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/80505099?v=4" alt="박창현 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/Chae-EunJeong" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/68576770?v=4" alt="정채은 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/David-Lee-dev" target="_blank">
        이주현<br />(Front-end & 팀장)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DECOY-DUCK" target="_blank">
        오재문<br />(Back-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/maltepoo" target="_blank">
        김정빈<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/BusChanny" target="_blank">
        박창현<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Chae-EunJeong" target="_blank">
        정채은<br />(Blockchain)
      </a>
    </td>
  </tr>
</table>

<br />

<br />

| 이름  |        역할        | <div align="center">개발 내용</div>                                                                                      |
|:---:| :----------------: |:---------------------------------------------------------------------------------------------------------------------|
| 이주현 | Front-end<br />팀장 | Web3 트랜젝션 기능 개발<br />NFT 토큰 발급 및 삭제 기능 개발<br/> NFT 토큰 거래 기능 개발<br/>메인페이지 개발<br />알림창 생성 함수 개발<br /> IPFS 서버 연동<br /> |
| 오재문 |      Back-end      | AWS 서버 배포<br /> 백엔드 API 개발<br />                                                                                     |
| 김정빈 |      Front-end      | 3D 모델링<br /> 마크업, UI/UX 설계<br /> 검색, 콘서트 예매 기능 개발                                                                    |
| 박창현 |     Front-end      | NFT 토큰 조회 기능 개발<br /> 백엔드 API 개발                                                                                     |
| 정채은 |     Blockchain      | 스마트 컨트랙트 작성<br>web3.js 연동 테스트                                                                                        |

<br />

<div id='8'></div>

## 🎨 와이어 프레임
---
<img src="./readme_assets/wireframe.JPG" alt="와이어 프레임" width="1000px" />

<br /> 

<div id='9'></div>

## 📃 요구사항 정의서
---
<img src="./readme_assets/requirements.JPG" alt="요구사항 정의서" width="1000px" />

<br />

<div id='10'></div>

## 🗂 기능 명세서
---
<img src="./readme_assets/functions.JPG" alt="기능 명세서" width="1000px" />

<br />

<div id='11'></div>

## 📐 개체-관계 모델(ERD) 
---
<img src="./readme_assets/erd.JPG" alt="개체-관계 모델(ERD)" width="1000px" />

<br />

<div id='12'></div>

## 👨‍👨‍👦‍👦 협업
---
#### Gitlab
- 메인 브랜치는 ```dev```입니다.
- 각자 작업시에는 ```{이름}/{작업내용}``` 의 브랜치를 생성하고, 깃랩으로 푸시한 후 dev 브랜치로 머지하여 사용했습니다. 
- 노션에 작성한 코드 컨벤션, 깃 컨벤션을 따라 작업했습니다.

#### JIRA
- 일정, 작업을 관리하기 위해 지라를 사용했습니다.
- 매주 월요일 오전에 회의를 통해 한 주동안 진행해야 할 계획을 정하고, 정한 이슈들을 스프린트로 등록했습니다. 
- 스프린트는 일주일 단위로 진행했고, 스토리 포인트는 1시간에 1포인트로 두었습니다.
- 기능 명세서의 대분류를 Epic, 중분류를 Story로 해서 이슈를 생성했습니다.

#### Notion
- 회의록, 팀 공지사항 등 매일 확인할 사항을 관리했습니다. 
- 각자 공부하거나 참고할만한 자료를 올려 다함께 공유했습니다. 
- 팀 규칙, 코드 컨벤션, 깃 컨벤션을 노션에 작성하여 규칙을 바로 확인할 수 있게 했습니다.

#### Mattermost
- gitlab으로 코드를 push, branch merge 등을 하거나 젠킨스 빌드 성공 여부를 메시지 알림으로 받았습니다.
- jira 변경 사항에 대한 알림을 메시지로 받게 해서 활용했습니다.

<br />

<div id='13'></div>

## 💻 실행 방법
---
### Front-end
```bash
git clone [레포지토리]

cd front

npm install

npm run start
```

<br />

### Back-end
```bash

gradlew.bat 파일 실행

radlew clean build 

build/libs 폴더로 이동

java -jar backend-0.0.1-SNAPSHOT.jar
```

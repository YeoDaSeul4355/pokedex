# ✨ 포켓몬 API를 활용한 포켓몬 도감 사이트

![pokeMain](https://github.com/YeoDaSeul4355/pokedex/assets/125419623/1eb9579b-dc55-497d-b2f6-c79a79165bd5)

> View Demo : https://pokedex-jjul.netlify.app/

## 👋 소개

PokeAPI를 활용하여 포켓몬의 정보를 다룬 포켓몬 도감 사이트는 React와 TypeScript, 그리고 Redux 툴킷을 활용하여 개발되었습니다.
또한 firebase DB를 활용하여 사용자의 정보를 저장하고, Google을 연동하여 로그인합니다. 이 프로젝트에서 TypeScript를 통해 타입 안정성을 확보하는 방법과, Redux 툴킷을 활용하여 상태 관리를 용이하게 처리하는 방법, Firebase Realtime Database는 실시간으로 데이터를 동기화하고 관리하는 방법을 학습하였습니다.

<br><br>

## 🔧 사용 스택 
* React
* React Hooks
* React Router
* TypeScript
* CSS3 & SCSS
* Redux and Redux Toolkit
* Firebase
* Firestore
* Axios for API
* Hosting the app on Netlify

<br><br>

## ✍️ 구현 내역

* 포켓몬 서치
* 구글 계정을 연동하여 로그인
* 포켓몬 스택 비교
* 포켓몬 정보
* 포켓몬 리스트

<br><br>

## 🔍 학습 내용 정리

✍️  react-router-dom : React 기반의 웹 애플리케이션에서 브라우저 기반 라우팅을 처리하기 위한 패키지입니다. React Router 라이브러리의 DOM 버전이며, React Router는 싱글 페이지 애플리케이션(SPA)에서 브라우저의 URL과 페이지 컴포넌트를 매핑하고 관리하는 기능을 제공합니다.
<br>
  * useLocation : 현재 URL 정보를 얻을 수 있게 해주는 기능입니다.
  * Link : 애플리케이션에서 클라이언트 측 네비게이션을 제공하는 역할을 합니다.
  * BrowserRouter : 브라우저 기반의 라우팅을 처리하기 위해 사용되는 최상위 라우터 컴포넌트입니다.
  * Route, Routes : 웹 애플리케이션의 라우팅을 다루기 위해 사용됩니다.
  * useParams : URL 경로에서 동적으로 설정된 파라미터들을 추출할 수 있게 해주는 기능입니다.

✍️  Redux : Redux는 Flux 아키텍처의 아이디어를 바탕으로 만들어진 상태 관리 패턴이며, 애플리케이션의 상태를 중앙 집중화하여 관리하는 방법을 제공합니다. 이를 통해 복잡한 애플리케이션에서 상태 관리를 용이하게 만들고 예측 가능한 상태 변화를 구현할 수 있습니다.

<br> 
Redux의 주요 구성 요소 : Action, Reducer, Store, Dispatch 
<br>

  * useAppDispatch : Redux를 사용하는 리액트 애플리케이션에서 Redux store에 액션을 디스패치(dispatch)하는 데 사용되는 custom hook입니다.
  * useAppSelector : Redux를 사용하는 리액트 애플리케이션에서 Redux store의 상태(state)를 선택하기 위해 사용되는 custom hook입니다.
  * useSelector :  Redux store의 상태를 선택하기 위해 사용되는 커스텀 훅입니다. 컴포넌트 내에서 useSelector를 사용하여 store의 특정 상태를 선택하고 해당 상태의 값에 접근할 수 있습니다.
  * useDispatch : Redux store에 액션을 디스패치하기 위해 사용되는 커스텀 훅입니다. useDispatch를 사용하여 액션을 디스패치하고 상태를 변경할 수 있습니다.
  * useStore : Redux store 객체에 접근하기 위해 사용되는 커스텀 훅입니다. 주로 상태와 액션을 직접 다루어야 할 경우에 사용됩니다.
  

<br><br>

## 📸 상세페이지

![Compare](https://github.com/YeoDaSeul4355/pokedex/assets/125419623/8c957435-f21a-4424-a951-aeaa372aae85)<br><br>
![pokeDesc](https://github.com/YeoDaSeul4355/pokedex/assets/125419623/8479ba0a-4e9a-4bc9-8abe-c29c93a120e5)<br><br>
![pokeLogin](https://github.com/YeoDaSeul4355/pokedex/assets/125419623/929395af-575c-4d08-ae06-f072dcec73bf)<br><br>
![pokeAbout](https://github.com/YeoDaSeul4355/pokedex/assets/125419623/97f2818b-dde8-45cd-8e86-cb3bf02cf70a)<br><br>


## ⚙️ 개발 환경 프로젝트 실행 방법

<b>Step 1: </b><br>
레포지토리 클론

```c
git clone https://github.com/YeoDaSeul4355/pokedex.git
```

<b>Step 2: </b><br>

```c
npm install
```

<b>Step 3: </b><br>
프로젝트 시작

```c
yarn start
```

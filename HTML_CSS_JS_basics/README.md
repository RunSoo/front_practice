### 프론트엔드 개발

🗨️ HTML, CSS, JS를 사용해 데이터를 그래픽 사용자 인터페이스(GUI)로 변환하고, 그것으로 사용자와 상호 작용할 수 있도록 하는 것

✔️ **HTML** (구조)

페이지의 제목, 문단, 표, 이미지, 동영상 등 웹의 구조를 담당

✔️ **CSS** (스타일)

실제 화면에 표시되는 방법(색상, 크기, 폰트, 레이아웃 등)을 지정해 콘텐츠를 꾸며주는 시각적인 표현(정적)을 담당

✔️**JS** (동적)

콘텐츠를 바꾸고 움직이는 등 페이지를 동작시키는 동적 처리를 담당

### 웹 표준

웹에서 사용하는 표준 기술이나 규칙

W3C의 표준화 제정 단계의 '권고안'에 해당하는 기술

✔️ 크로스 브라우징

조금은 다르게 구동되는 여러 브라우저에서 동일한 사용자 경험(같은 화면, 같은 동작 등)을 줄 수 있도록 제작하는 기술, 방법

크로스 브라우징 이슈 사라져 가는 추세

✔️ 렌더링

브라우저의 뷰포트에 웹 사이트를 출력하는 행위

### 웹 이미지

✔️ 비트맵

픽셀이 모여 만들어진 정보의 집합

<u>레스터(Raster)</u> 이미지라고도 부름

확대/축소 시 계단 현상, 품질 저하

✔️ 벡터

점, 선, 면의 위치(좌표), 색상 등 수학적 정보의 형태로 이루어진 이미지

정교한 이미지를 표현하기 어려움

### 오픈 소스 라이선스

어떤 제품을 개발하는 과정에 필요한 소스 코드나 설계도를 주구나 접근해서 열람할 수 있도록 공개하는 것

✔️ 아파치 라이선스

개인적/상업적 이용, 배포, 수정, 특허 신청 가능

✔️ MIT 라이선스

개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 나머지 사용에 대한 제약 없음

✔️ BSD 라이선스

MIT와 동일

✔️ Beerware

오픈소스 개발자에게 만날 경우 맥주를 사줘야 하는 라이선스

### HTML 개요

🗨️ 기본 문법

✔️ 요소

`<태그> 내용 </태그>`

✔️ 부모 요소, 자식 요소

- 조상 요소, 자손 요소

✔️ 빈 태그

태그의 개념은 열리는 태그와 닫히는 태그가 있어야 하는데 두가지 종류

`<태그>`(편리) vs `<태그  />`(엄격)

HTML5에서는 모두 정상 동작

열리는 태그에 속성과 값 넣을 수 있음

- 기본적 태그에 추가적인 기능이나 상태

거의 대부분의 빈 태그들은 속성 필요하다

✔️ 글자와 상자

<b>요소가 화면에 출력되는 특성, 크게 2가지로 구분</b>

- 인라인 요소: 글자를 만들기 위한 요소들
  - `span`, `img`, `a`
- 블록 요소: 상자(레이아웃)를 만들기 위한 요소들
  - `div`, `h1`, `p`, `ul`, `li`
- 인라인-블록 요소: 글자 요소이기는 한데 상자 요소의 특성을 몇 가지 사용할 수 있음. 수평으로 싸이지만 가로, 세로, 여백 사용할 수 있음
  - `input`
- 테이블 요소

### CSS 속성

🗨️ 개요

- 박스 모델: HTML 요소의 기본적인 모양을 만들어내는 여러가지 속성들
- 글꼴, 문자
- 배경
- 플렉스 (정렬)
- 전환 (중간 상태를 자연스럽게 연결해주는 것)
- 변환
  - 요소를 회전하거나 이동시키거나 크기 조절해주는 속성
  - 2D 변환과 3D 변환
- 띄움
- 애니메이션
  - 전환보다 더 복잡한 애니메이션 처리
- 그리드
- 다단
- 필터
  - 블러, 흑백 등

✔️ 단위

- px 픽셀
- % 백분율
- em 요소의 글꼴 크기
- rem 루트 요소의 글꼴 크기
- vw 뷰포트 가로 너비의 백분율
- vh 뷰포트 세로 너비의 백분율

브라우저는 따로 명시가 되어 있지 않으면 기본적으로 텍스트 크기 16px

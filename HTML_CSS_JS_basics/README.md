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

✔️ 색상 표현

- 색상 이름: 브라우저에서 제공하는 색상 이름
- Hex 색상코드: 16진수 색상(#000, #FFFFFF)
- RGB: 빛의 삼원색(rgb(255, 255, 255))
- RGBA: 빛의 삼원색 + 투명도(rgba(0, 0, 0, 0.5))

✔️ box-sizing

- content-box: 요소의 내용으로 크기 계산
- border-box: 요소의 내용 + padding + border로 크기 계산

✔️ overflow

- visible: 넘친 내용을 그대로 보여줌
- hidden: 넘친 내용을 잘라냄
- scroll: 넘친 내용을 잘라냄, 스크롤바 생성
- auto: 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성

✔️ display

- block: 상자(레이아웃) 요소
- inline: 글자 요소
- inline-block: 글자 + 상자 요소 (기본은 글자, 가로 세로 지정 가능)
- flex: 플렉스 박스(1차원 레이아웃)
- grid: 그리드(2차원 레이아웃)
- none: 보여짐 특성 없음, 화면에서 사라짐
- 기타: table, table-row, table-cell 등

✔️ 배경

- background-repeat
  - repeat: 이미지를 수직, 수평 반복(default)
  - repeat-x: 이미지를 수평 반복
  - repeat-y: 이미지를 수직 반복
  - no-repeat: 반복 없음
- background-position: 요소의 배경 이미지 위치
- background-size
  - auto: 이미지 실제 크기
  - 단위
  - cover: 비율 유지, 요소의 더 넓은 너비에 맞춤
  - contain: 비율 유지, 더 짧은 너비에 맞춤
- background-attachment: 요소의 배경 이미지 스크롤 특성
  - scroll: 이미지가 요소 따라 같이 스크롤
  - fixed: 이미지가 뷰포트에 고정, 스크롤 X
  - local: 요소 내 스크롤 시 이미지 같이 스크롤

✔️ position

- static: 기준 없음(default)
- relative: 요소 자신을 기준
- absolute: 위치 상 부모 요소를 기준
- fixed: 뷰포트(브라우저)를 기준
- sticky: 스크롤 영역 기준

✔️ 요소 쌓임 순서

어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정

1. 요소에 position 속성의 값이 있는 경우 위에 쌓임(기본값 static 제외)
2. 1번 조건 같은 경우, z-index 속성 숫자 값 높을 수록 위에 쌓임
3. 1번 2번 같은 경우, HTML의 다음 구조일수록 위에 쌓임

** position 속성의 값으로 absolute, fixed가 지정된 요소는 display 속성이 `block`으로 변경됨 **

✔️ flex

- display: flex container의 화면 출력 특성
  - flex: 블록 요소와 같이 flex container 정의
  - inline-flex: 인라인 요소와 같이 flex container 정의
- flex-direction: 주 축을 설정
  - row: 행 축(좌 ▶️ 우)
  - row-reverse: 행 축(우 ▶️ 좌)
  - column: 열 축(위 ▶️ 아래)
  - column-reverse: 열 축(아래 ▶️ 위)
- flex-wrap: flex items 묶음(줄 바꿈) 여부
  - nowrap: 묶음(줄 바꿈) 없음
  - wrap: 여러 줄로 묶음
  - wrap-reverse: wrap의 반대 방향으로 묶음
- justify-content: 주 축의 정렬 방법
  - flex-start: flex items를 시작점으로 정렬
  - flex-end: flex items를 끝점으로 정렬
  - center: 가운데 정렬
  - space-between: 각 item 사이 균등 정렬
  - space-around: 각 item의 외부 여백 균등하게 정렬
- align-content: 교차 축의 **여러 줄** 정렬 방법
  - stretch: flex items를 시작점으로 정렬
  - flex-start: flex items를 시작점으로 정렬
  - flex-end: flex items를 끝점으로 정렬
  - center: flex items를 가운데 정렬
  - space-between: 각 flex item 사이를 균등하게 정렬
  - space-around: 각 flex item의 외부 여백을 균등하게 정렬
- align-items: 교차 축의 **한 줄** 정렬 방법
  - stretch: flex items를 교차 축으로 늘임
  - flex-start: flex items를 각 줄의 시작점으로 정렬
  - flex-end: flex items를 각 줄의 끝점으로 정렬
  - center: flex items를 각 줄의 가운데 정렬
- order: flex item의 순서
  - 0: 순서 없음
  - 숫자: 숫자가 작을 수록 먼저
- flex-grow: flex item의 증가 너비 비율
  - 0: 증가 비율 없음
  - 숫자: 증가 비율
- flex-shrink: flex item의 감소 너비 비율
  - 1: flex container 너비에 따라 감소 비율 적용
  - 숫자: 감소 비율
- flex-basis: flex item의 공간 배분 전 기본 너비
  - auto: 요소의 content 너비
  - 단위: px, em, rem 등 단위로 지정

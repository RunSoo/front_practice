# '입문자를 위한 반응형 웹 기초 강의' 정리

<hr/>

### 강의 소개

- 다양한 환경에서 동일한 경험 제공할 수 있는 웹 문서 -> 반응형 웹
- 기초 지식 + 실습

### 개요

- 모바일의 등장으로 본격화 초기에는 모바일 전용 URL 제공(ex: 네이버)
- 기기에 최적화된 콘텐츠 계속 생산 현실적으로 어려움
- 가변성이 가장 중요
- 뷰포트: 현재 화면에 보여지고 있는 영역

  - 배율 조정 문제 때문에 화면마다 다르게 나타남
  - 메타 태그로 뷰포트 설정

  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  ```

  [01.html](https://github.com/RunSoo/front_practice/blob/main/reactive-web/01.html)

  - 너비를 기기의 너비로 하고 배율을 1.0으로 하겠다.
  - 이거 없으면 글자 크기가 모바일로 바꾸면 유지가 안됨

### 상대 단위 em rem

- 픽셀: 절대 길위 단위. 가변성이 없어 반응형에는 적합하지 않음
- em과 rem: em은 부모요소의 글꼴 크기, rem은 루트 요소의 글꼴 크기
- em으로 외부 여백 크기를 정할 때는 자기 자신의 글자 크기를 기준으로 함


  [02.html](https://github.com/RunSoo/front_practice/blob/main/reactive-web/02.html)

### 상대 단위 더 살펴보기

- 뷰포트 단위 vw vh vmin vmax
- em과 rem은 브라우저나 기기화면 크기 따라 달라지지는 않으므로 진정한 반응형 단위는 아님
  - 1vw: 뷰포트 너비의 100분의 1
  - 1vh: 뷰포트 높이 100분의 1
  - 1vmin: 뷰포트 높이와 너비 중 작은 쪽 100분의 1
  - 1vmax: 뷰포트 높이와 너비 중 큰 쪽 100분의 1
 
    
    [03.html](https://github.com/RunSoo/front_practice/blob/main/reactive-web/03.html)

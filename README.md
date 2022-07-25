# Classting Coding Test

![NPM Version][npm-image]
[![Build Status][travis-image]][travis-url]

Classting 온라인 과제 시험으로 React.js를 사용하여 만든 퀴즈 사이트입니다.

![](https://user-images.githubusercontent.com/66737450/180738862-fe97222a-12c0-410e-89b8-e562834d4f1a.png)

## 실행 방법

Terminal:

```sh
npm start
```

## 사용 예제

### 메인 페이지

![](https://user-images.githubusercontent.com/66737450/180738862-fe97222a-12c0-410e-89b8-e562834d4f1a.png)
`최대한 깔끔하고 포인트 있게 구현할려고 했습니다`

### 시작버튼

![](https://user-images.githubusercontent.com/66737450/180740759-1f340bc4-1889-43f4-8ad4-7eed208b729f.png)
`로고에 마우스를 hover하면 start 버튼이 나옵니다`

### 시작버튼2

![](https://user-images.githubusercontent.com/66737450/180741014-3bf666cd-ce70-4dc2-aacd-2f225636a5d3.png)
`준비되셨으면 시작하기 버튼을 누르고 퀴즈를 풀어주세요!`

### 퀴즈페이지

![](https://user-images.githubusercontent.com/66737450/180741119-9a8a25b1-cd34-42cd-a3af-d52f5db77c00.png)
`문제는 총 10문제로 영어로 되어 있습니다!`

### 퀴즈 결과

![](https://user-images.githubusercontent.com/66737450/180742873-18c02593-51a1-4d50-9317-aa9163ad410d.png)
`정오답 결과와 비율을 차트로 표현했으며 같은 문제 다시 풀기, 새로운 문제 풀기, 메인화면으로 가는 버튼들이 있습니다`

## 개발 환경

```sh
React.js
Styled-Components
React-Query
TypeScript
```

## 아쉬운점

1. 시간계산

- Date Picker 라이브러리를 쓰지 않고 new Date() 로만 구현할려다 보니까 코드가 조금 길어진 것 같습니다. 라이브러리를 쓰던지 더욱 더 효율적인 방법이 있을 것 같습니다.

2. 데이터 Saving

- 사용자가 문제 푼 데이터를 저장 했다가 같은 문제를 다시 풀었을 때 비교할 수 있는 차트를 못 만든게 아쉽습니다.

3. 전역관리

- 정오답 갯수와 데이터를 Recoil로 전역관리를 할려고 했으나 result 페이지를 모달 컴포넌트로 만드느라 구현하지 못 한게 아쉽습니다.

4. 테스트 코드 작성

- 처음 해 보는 테스트 코드 작성이라 제대로 작성 못 해본게 아쉽고 너무 어렵게 느껴진 것 같습니다.

- 그래도 Jest를 배우며 조금이라도 성장할 수 있는 기회라 좋았습니다. 조금 더 테스트 코드 작성에 대해 공부할려고 합니다.

## 정보

최규성 – [@깃허브](https://github.com/cks612)

[https://github.com/cks612](https://github.com/cks612)

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/npm
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics

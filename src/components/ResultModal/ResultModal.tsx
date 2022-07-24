import React, { ReactEventHandler } from "react";
import * as S from "../../styles/_ResultModalStyles";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { MyResponsivePie } from "../Chart/Chart";
import { ButtonType, ChartType } from "../../types";

const buttonData: ButtonType[] = [
  {
    id: 1,
    data: "다시 풀기",
  },
  { id: 2, data: "새 문제 다시 풀기" },
  { id: 3, data: "메인화면" },
];

const ResultModal = ({
  nextStepHandler,
}: {
  nextStepHandler: ReactEventHandler;
}) => {
  const correctAnswer: number = parseInt(
    localStorage.getItem("CorrecAnswer") || ""
  );

  const wrongAnswer: number = parseInt(
    localStorage.getItem("WrongAnswer") || ""
  );

  const data: ChartType[] = [
    {
      id: "정답",
      label: "정답",
      value: correctAnswer,
      color: "hsl(89, 70%, 50%)",
    },
    {
      id: "오답",
      label: "오답",
      value: wrongAnswer,
      color: "hsl(320, 70%, 50%)",
    },
  ];

  let startTime: Date = new Date(
    parseInt(localStorage.getItem("startTime") || "")
  );
  const endTime: Date = new Date();
  const diffMinutes = endTime.getMinutes() - startTime.getMinutes();
  const diffSeconds = endTime.getSeconds() - startTime.getSeconds();

  const correctRatio = Math.floor(
    (correctAnswer / (correctAnswer + wrongAnswer)) * 100
  );

  return (
    <>
      <S.HideScreen />
      <S.ResultModalWrapper>
        <S.ResultTitle>
          Quiz Summery
          <p>
            총 소요시간 : {diffMinutes}분 {diffSeconds}초
          </p>
        </S.ResultTitle>
        <S.ResultSummery>
          <S.ResultRatio>
            <h2>{correctRatio}%</h2>
            <p>Practice Makes Perfect!</p>
          </S.ResultRatio>
          <S.VLine />
          <S.ResultAnswersContainer>
            <S.ResultAnswersContent>
              <p>
                <i className="fa-solid fa-circle-check"></i>
                {correctAnswer} correct
              </p>
              <p>
                <i className="fa-solid fa-circle-xmark"></i>
                {wrongAnswer} to work on
              </p>
            </S.ResultAnswersContent>
          </S.ResultAnswersContainer>
        </S.ResultSummery>
        <hr />
        <S.BottomResultContainer>
          <S.ResultChart>
            <MyResponsivePie data={data} />
          </S.ResultChart>
          <S.ButtonContainer>
            {buttonData?.map((data) => {
              return (
                <button key={data.id} value={data.id} onClick={nextStepHandler}>
                  {data.data}
                </button>
              );
            })}
          </S.ButtonContainer>
        </S.BottomResultContainer>
      </S.ResultModalWrapper>
      {useLockBodyScroll};
    </>
  );
}; // 풀었던 문제 다시 풀기  => quizeData 섞기 setQuestionCount(0);
// 새 문제 다시 풀기 => setQuestionCount(0); fetch(새 문제 받아오기)
// - 그냥 메인화면 보내기

export default ResultModal;

import React from "react";
import styled from "styled-components";
import * as S from "../../styles/_CommonCssStyles";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { MyResponsivePie } from "../Chart/Chart";
import { ChartType } from "../../types";

const ResultModal = () => {
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
      color: "hsl(325, 100%, 49.411764705882355%)",
    },
    {
      id: "오답",
      label: "오답",
      value: wrongAnswer,
      color: "hsl(204.17910447761193, 35.828877005347586%, 63.33333333333333%)",
    },
  ];

  let startTime: Date = new Date(
    JSON.parse(localStorage.getItem("startTime") || "")
  );
  const endTime: Date = new Date();
  const diffMinutes = endTime.getMinutes() - startTime.getMinutes();
  const diffSeconds = endTime.getMinutes() - startTime.getMinutes();

  const correctRatio = Math.floor(
    (correctAnswer / (correctAnswer + wrongAnswer)) * 100
  );

  return (
    <>
      <HideScreen />
      <ResultModalWrapper>
        <ResultTitle>Quiz Summery</ResultTitle>
        <ResultSummery>
          <ResultRatio>
            <h2>{correctRatio}%</h2>
            <p>Practice Makes Perfect!</p>
          </ResultRatio>
          <VLine />
          <ResultAnswersContainer>
            <ResultAnswersContent>
              <p>
                <i className="fa-solid fa-circle-check"></i>
                {correctAnswer} correct
              </p>
              <p>
                <i className="fa-solid fa-circle-xmark"></i>
                {wrongAnswer} to work on
              </p>
            </ResultAnswersContent>
          </ResultAnswersContainer>
        </ResultSummery>
        <hr />
        <ResultChart>
          <MyResponsivePie data={data} />
        </ResultChart>
      </ResultModalWrapper>
      {useLockBodyScroll};
    </>
  );
};

export default ResultModal;

const HideScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 1;
`;

const ResultModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 150%;
  border: 1px solid ${({ theme }) => theme.whiteColor};
  background: ${({ theme }) => theme.backGroundColor};
  font-size: 50px;
  z-index: 1001;

  hr {
    width: 80%;
    padding: 0 20px;
  }
`;

const ResultTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  font-size: 1.5em;
  font-weight: 900;
  color: ${({ theme }) => theme.whiteColor};
  gap: 20px;
`;

const ResultSummery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.whiteColor};
`;

const ResultRatio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  gap: 10px;

  p {
    font-size: 0.3em;
  }
`;

const VLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.whiteColor};
  height: 50%;
`;
const ResultAnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  font-size: 0.5em;
`;
const ResultAnswersContent = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  i {
    padding-right: 20px;
  }
`;

const ResultChart = styled.div`
  width: 450px;
  height: 350px;
`;

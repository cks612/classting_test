import React, { useEffect, useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetQuizData } from "../../hooks/useCustomerHooks";
import { elementType, queryDataType } from "../../types";
import styled from "styled-components";
import fysOriginal from "../../utils/fysOriginal";
import SelectorsBox from "../../components/SelectorsBox/SelectorsBox";
import SponsoredSkeleton from "../../components/Skeleton/SponsoredSkeleton";
import * as S from "../../styles/_CommonCssStyles";
import ResultModal from "../../components/ResultModal/ResultModal";

const Quiz: React.FC = () => {
  const [quizData, setQuizData] = useState<elementType[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [randomSelectors, setRandomSelectors] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState("");
  const [isModalOn, setIsModalOn] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const uuid = require("react-uuid");
  const skeletonArr: number[] = [1];

  // 문제를 다 풀었다 === quuestionCount === 10 => 정오답 결과에 기록한다.
  // 풀었던 문제 다시 풀기  => quizeData 섞기 setQuestionCount(0);
  // 새 문제 다시 풀기 => setQuestionCount(0); fetch(새 문제 받아오기)
  // - 그냥 메인화면 보내기
  // 시작순간시간을 로컬에 저장 끝났을 때 시간도 저장 후 빼기

  const onSuccess = (data: queryDataType): void => {
    console.log("====", data);
    setQuizData(data.data.results);
  };

  const onError = (error: Error): void => {
    console.log("====", error);
  };

  const { isFetching, data, refetch }: UseQueryResult<queryDataType> =
    useGetQuizData(onSuccess, onError);

  const fetchDataQueryHandler = () => {
    const startTime: Date = new Date();
    localStorage.setItem("startTime", JSON.stringify(startTime));
    refetch();
  };
  const submitAnswersHandler = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const { innerText } = e.target as HTMLButtonElement;

    if (quizData[questionCount].correct_answer === innerText) {
      setCorrectAnswer(correctAnswer + 1);
    } else if (quizData[questionCount].correct_answer !== innerText) {
      setWrongAnswer(wrongAnswer + 1);
    }
    setIsSelected(innerText);
  };
  console.log(correctAnswer);
  const nextQuestionHandler = () => {
    if (questionCount === quizData.length - 1) {
      localStorage.setItem("CorrecAnswer", JSON.stringify(correctAnswer));
      localStorage.setItem("WrongAnswer", JSON.stringify(wrongAnswer));
      alert("퀴즈가 끝났습니다!");
      setIsModalOn(!isModalOn);
    } else {
      setIsSelected("");
      setQuestionCount(questionCount + 1);
    }
  };

  useEffect(() => {
    if (quizData.length) {
      quizData.map(
        (el: elementType) =>
          (el.selectors = el.incorrect_answers.concat(el.correct_answer))
      );
      setRandomSelectors(fysOriginal(quizData[questionCount].selectors));
    }
  }, [quizData, questionCount]);

  return (
    <>
      <QuizPageWrapper>
        <QuestionsContainer>
          {isFetching &&
            skeletonArr?.map(() => <SponsoredSkeleton key={uuid()} />)}

          {data ? (
            <>
              <Questions>
                {questionCount + 1}번 {quizData[questionCount].question}
              </Questions>
              <SelectorsContainer>
                {randomSelectors?.map((selector, index) => {
                  const isCorrect =
                    selector === quizData[questionCount].correct_answer;
                  return (
                    <SelectorsBox
                      key={index}
                      submitAnswersHandler={submitAnswersHandler}
                      selector={selector}
                      isCorrect={isCorrect}
                      isSelected={isSelected}
                    ></SelectorsBox>
                  );
                })}
              </SelectorsContainer>
            </>
          ) : (
            <button onClick={fetchDataQueryHandler}>start</button>
          )}

          {isSelected && (
            <NextButton onClick={nextQuestionHandler}>NEXT &gt;</NextButton>
          )}

          {isModalOn && <ResultModal></ResultModal>}
        </QuestionsContainer>
      </QuizPageWrapper>
    </>
  );
};

export default Quiz;

const QuizPageWrapper = styled.div`
  ${S.commonDisplay}
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.backGroundColor};
`;

const QuestionsContainer = styled.div`
  ${S.commonDisplay}
  flex-wrap:wrap;
  position: relative;
  max-width: 50%;
  margin: 0 auto;
  gap: 3em;
`;

const Questions = styled.h1`
  ${S.commonDisplay}
  ${S.commonH1Tag}
  width: 100%;
  top: 10em;
  height: 6em;
  padding: 20px 20px;
  border-radius: 15px;
`;

const SelectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 30px;
`;

const NextButton = styled.div`
  ${S.commonDisplay}
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: -100px;
  border: 0.5px solid ${({ theme }) => theme.whiteColor};
  border-radius: 10px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fff3;
  }
`;

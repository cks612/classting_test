import React, { useEffect, useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetQuizData } from "../../hooks/useCustomerHooks";
import { elementType, queryDataType } from "../../types";
import styled from "styled-components";
import fysOriginal from "../../utils/fysOriginal";
import SelectorsBox from "../../components/SelectorsBox/SelectorsBox";
import SponsoredSkeleton from "../../components/Skeleton/SponsoredSkeleton";
import * as S from "../../styles/_CommonCssStyles";

const Quiz: React.FC = () => {
  const [quizData, setQuizData] = useState<elementType[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [randomSelectors, setRandomSelectors] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState("");
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

  const { isLoading, data, refetch }: UseQueryResult<queryDataType> =
    useGetQuizData(onSuccess, onError, {
      enabled: true,
    });

  const fetchDataQueryHandler = () => {
    refetch();
  };

  const submitAnswersHandler = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const { innerText } = e.target as HTMLButtonElement;
    setIsSelected(innerText);
  };

  const nextQuestionHandler = () => {
    setIsSelected("");
    setQuestionCount(questionCount + 1);
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
          {isLoading &&
            skeletonArr?.map(() => <SponsoredSkeleton key={uuid()} />)}

          {data && (
            <>
              <Questions>{quizData[questionCount].question}</Questions>
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
          )}
          {isSelected && (
            <NextButton onClick={nextQuestionHandler}>NEXT &gt;</NextButton>
          )}
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

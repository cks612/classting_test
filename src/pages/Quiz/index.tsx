import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetQuizData } from "../../hooks/useCustomerHooks";
import { elementType, queryDataType } from "../../types";
import fysOriginal from "../../utils/fysOriginal";
import SelectorsBox from "../../components/SelectorsBox/SelectorsBox";
import SponsoredSkeleton from "../../components/Skeleton/SponsoredSkeleton";
import ResultModal from "../../components/ResultModal/ResultModal";
import * as S from "../../styles/_QuizPageStyles";

const Quiz: React.FC = () => {
  const [quizData, setQuizData] = useState<elementType[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [randomSelectors, setRandomSelectors] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState("");
  const [isModalOn, setIsModalOn] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const navigate = useNavigate();
  const startTime: Date = new Date();
  const uuid = require("react-uuid");
  const skeletonArr: number[] = [1];

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
    localStorage.setItem("startTime", JSON.stringify(startTime) || "");
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

  const nextStepHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value }: { value: number | string } = e.target as HTMLButtonElement;
    localStorage.clear();

    if (parseInt(value) === 1) {
      localStorage.setItem("startTime", JSON.stringify(startTime) || "");
      setQuestionCount(0);
      setIsSelected("");
      setCorrectAnswer(0);
      setWrongAnswer(0);
      setIsModalOn(!isModalOn);
    } else if (parseInt(value) === 2) {
      setQuestionCount(0);
      setCorrectAnswer(0);
      setWrongAnswer(0);
      setIsSelected("");
      setIsModalOn(!isModalOn);
      fetchDataQueryHandler();
    } else {
      setQuizData([]);
      setQuestionCount(0);
      setIsSelected("");
      setCorrectAnswer(0);
      setWrongAnswer(0);
      navigate("/");
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
      <S.QuizPageWrapper>
        <S.QuestionsContainer>
          {isFetching ? (
            skeletonArr?.map(() => <SponsoredSkeleton key={uuid()} />)
          ) : data ? (
            " "
          ) : (
            <S.StartButton onClick={fetchDataQueryHandler}>
              준비되셨나요?<p>시작하기</p>
            </S.StartButton>
          )}

          {data && (
            <>
              <S.Questions>
                <p>{questionCount + 1} / 10</p>
                {quizData[questionCount].question}
              </S.Questions>
              <S.SelectorsContainer>
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
              </S.SelectorsContainer>
            </>
          )}
          {isSelected && (
            <S.NextButton onClick={nextQuestionHandler}>NEXT &gt;</S.NextButton>
          )}
          {isModalOn && <ResultModal nextStepHandler={nextStepHandler} />}
        </S.QuestionsContainer>
      </S.QuizPageWrapper>
    </>
  );
};

export default Quiz;

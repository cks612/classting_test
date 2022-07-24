import React, { ReactEventHandler } from "react";
import * as S from "../../styles/_SelectorsBoxStyles";

const SelectorsBox = ({
  selector,
  submitAnswersHandler,
  isCorrect,
  isSelected,
}: {
  selector: string;
  submitAnswersHandler: ReactEventHandler;
  isCorrect: boolean;
  isSelected: string | boolean;
}): JSX.Element => {
  const changeStyle = (): string => {
    const userClcik: boolean = selector === isSelected;

    if (isCorrect && userClcik) {
      return "정답";
    } else if (!isCorrect && userClcik) {
      return "오답";
    } else {
      return "";
    }
  };
  return (
    <S.Questions
      onClick={submitAnswersHandler}
      isCorrect={isCorrect}
      resultStyle={changeStyle()}
      disabled={Boolean(isSelected)}
    >
      {selector}
    </S.Questions>
  );
};

export default SelectorsBox;

import React, { ReactEventHandler } from "react";
import styled, { css } from "styled-components";
import * as S from "../../styles/_CommonCssStyles";
import { Props } from "../../types";

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
    <Questions
      onClick={submitAnswersHandler}
      isCorrect={isCorrect}
      resultStyle={changeStyle()}
      disabled={Boolean(isSelected)}
    >
      {selector}
    </Questions>
  );
};

export default SelectorsBox;

const Questions = styled.button<Props>`
  ${S.commonDisplay}
  ${S.commonH1Tag}
  border: 1px solid ${({ theme }) => theme.whiteColor};
  border-radius: 10px;
  background: transparent;
  cursor: pointer;

  ${({ resultStyle }) => {
    console.log(resultStyle);
    if (resultStyle === "정답") {
      return css`
        border: 1px solid lightgreen;
        background: lightgreen;
      `;
    } else if (resultStyle === "오답") {
      return css`
        border: 1px solid red;
        background: red;
      `;
    } else {
      return css`
        border: 1px solid ${({ theme }) => theme.whiteColor};
      `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`;

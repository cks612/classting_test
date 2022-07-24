import * as S from "../styles/_CommonCssStyles";
import styled, { css } from "styled-components";
import { Props } from "../types";

export const Questions = styled.button<Props>`
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

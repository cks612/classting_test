import * as S from "../styles/_CommonCssStyles";
import styled from "styled-components";
import { devices } from "./_MediaQueryStyles";

export const HideScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 1;
`;

export const ResultModalWrapper = styled.div`
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

export const ResultTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;
  font-size: 1.5em;
  font-weight: 900;
  color: ${({ theme }) => theme.whiteColor};
  gap: 10px;

  p {
    font-size: 0.3em;
    font-weight: 500;
  }

  @media ${devices.laptopL} {
    font-size: 0.5em;
  }
`;

export const ResultSummery = styled.div`
  ${S.commonDisplay}
  height: 20%;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.whiteColor};

  @media ${devices.laptopL} {
    justify-content: stretch;
  }
`;

export const ResultRatio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  gap: 10px;

  p {
    font-size: 0.3em;
  }
  @media ${devices.tablet} {
    flex: 0 0 100%;
  }
`;

export const VLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.whiteColor};
  height: 50%;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const ResultAnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  font-size: 0.5em;

  @media ${devices.tablet} {
    flex: 0 0 0%;
  }
`;
export const ResultAnswersContent = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  i {
    padding-right: 20px;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

export const BottomResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 40px;
`;

export const ResultChart = styled.div`
  display: flex;
  flex: 0 0 50%;
  width: 450px;
  height: 300px;

  @media ${devices.tablet} {
    flex: 0 0 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 50%;
  text-align: center;
  gap: 50px;

  button {
    width: 10em;
    height: 3em;
    border: 2px solid ${({ theme }) => theme.whiteColor};
    color: ${({ theme }) => theme.whiteColor};
    background: ${({ theme }) => theme.backGroundColor};
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.grayColor};
    }

    @media ${devices.tablet} {
      display: none;
    }
  }
`;

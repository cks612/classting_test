import * as S from "../styles/_CommonCssStyles";
import styled from "styled-components";

export const QuizPageWrapper = styled.div`
  ${S.commonDisplay}
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.backGroundColor};
`;

export const QuestionsContainer = styled.div`
  ${S.commonDisplay}
  flex-wrap:wrap;
  position: relative;
  max-width: 50%;
  margin: 0 auto;
  gap: 3em;
`;

export const Questions = styled.h1`
  ${S.commonDisplay}
  ${S.commonH1Tag}
  width: 100%;
  top: 10em;
  height: 6em;
  padding: 20px 20px;
  border-radius: 15px;

  p {
    position: absolute;
    left: 0;
    top: -50px;
    font-size: 2em;
  }
`;

export const SelectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 30px;
`;

export const NextButton = styled.div`
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

export const StartButton = styled.button`
  ${S.commonDisplay}
  flex-direction: column;
  width: 200px;
  height: 100px;
  border: 3px solid #fff;
  border-radius: 20px;
  background: ${({ theme }) => theme.backGroundColor};
  color: #fff;
  font-size: 1.5em;
  font-weight: 500;
  cursor: pointer;
  animation: buttonAnimate 4s infinite;

  @keyframes buttonAnimate {
    5%,
    50% {
      transform: scale(1);
    }

    10% {
      transform: scale(0.9);
    }

    15% {
      transform: scale(1.15);
    }

    20% {
      transform: scale(1.15) rotate(-5deg);
    }

    25% {
      transform: scale(1.15) rotate(5deg);
    }

    30% {
      transform: scale(1.15) rotate(-3deg);
    }

    35% {
      transform: scale(1.15) rotate(2deg);
    }

    40% {
      transform: scale(1.15) rotate(0);
    }
  }
`;

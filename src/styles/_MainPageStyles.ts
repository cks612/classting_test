import * as S from "../styles/_CommonCssStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  ${S.commonDisplay}
  min-height: 100vh;
  background: ${({ theme }) => theme.backGroundColor};
`;

export const Title = styled.h1`
  position: relative;
  padding-right: 50px;
  padding-bottom: 20px;
  font-size: 8em;
  font-weight: 900;
  color: ${({ theme }) => theme.whiteColor};
  text-transform: uppercase;

  p {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 50px;
    font-size: 1.5rem;

    &:nth-child(2) {
      opacity: 0;
    }

    i {
      animation: iconAnimate 2s linear infinite;
    }

    @keyframes iconAnimate {
      0%,
      100% {
        transform: translateX(0px);
      }

      50% {
        transform: translateX(10px);
      }
    }
  }

  i {
    padding-left: 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: borderAnimate 4s linear infinite;
  }

  &:hover::before {
    inset: -20px 0px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 6px;
    background: ${({ theme }) => theme.backGroundColor};
    border-radius: 50%;
    z-index: 1;
  }

  @keyframes borderAnimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.div`
  ${S.commonDisplay}
  position: absolute;
  inset: 30px;
  border: 6px solid #070a1c;
  border-radius: 50%;
  overflow: hidden;
  flex-direction: column;
  z-index: 3;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: 0.5s;
    pointer-events: none;
    z-index: 3;
  }

  h2 {
    position: relative;
    color: ${({ theme }) => theme.whiteColor};
    font-size: 1.3em;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &:hover img {
    opacity: 0;
  }
`;

export const StartQuiz = styled(Link)`
  position: relative;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 25px;
  color: #070a1c;
  background: ${({ theme }) => theme.whiteColor};
  font-weight: 500;
  font-size: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: 0.5s;

  &:hover {
    letter-spacing: 0.2em;
  }
`;

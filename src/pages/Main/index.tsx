import React from "react";
import * as S from "../../styles/_MainPageStyles";

const index = () => {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        <S.Title>
          Classting
          <p>
            "Click Start to challenge our Quiz!"
            <span>
              <i className="fa-solid fa-circle-right"></i>
            </span>
          </p>
        </S.Title>
        <S.Box>
          <S.Content>
            <img
              src="https://cdn-images-1.medium.com/max/280/1*db-FS5RYeNGp5F4TENAB2A@2x.png"
              alt="classtingLogo"
            />
            <h2>Classting Assignment</h2>
            <br />
            <S.StartQuiz to="/quiz">Start</S.StartQuiz>
          </S.Content>
        </S.Box>
      </S.MainContainer>
    </S.MainWrapper>
  );
};

export default index;

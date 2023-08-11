import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { keyframes, styled } from "styled-components";

function FindingPage() {
  const param = useParams();
  const { E, I, N, S, T, F, P, J } = useParams();
  const link = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (E > I) {
        // E***
        if (N > S) {
          // EN**
          if (T > F) {
            // ENT*
            if (P > J) {
              // ENTP
              link("/result/3");
            } else {
              // ENTJ
              link("/result/0");
            }
          } else {
            // ENF*
            if (P > J) {
              // ENFP
              link("/result/4");
            } else {
              // ENFJ
              link("/result/1");
            }
          }
        } else {
          // ES**
          if (T > F) {
            // EST*
            if (P > J) {
              // ESTP
              link("/result/14");
            } else {
              // ESTJ
              link("/result/15");
            }
          } else {
            // ENF*
            if (P > J) {
              // ESFP
              link("/result/5");
            } else {
              // ESFJ
              link("/result/2");
            }
          }
        }
      } else {
        // I***
        if (N > S) {
          // IN**
          if (T > F) {
            // INT*
            if (P > J) {
              // INTP
              link("/result/6");
            } else {
              // INTJ
              link("/result/9");
            }
          } else {
            // INF*
            if (P > J) {
              // INFP
              link("/result/7");
            } else {
              // INFJ
              link("/result/12");
            }
          }
        } else {
          // IS**
          if (T > F) {
            // IST*
            if (P > J) {
              // ISTP
              link("/result/8");
            } else {
              // ISTJ
              link("/result/10");
            }
          } else {
            // INF*
            if (P > J) {
              // ISFP
              link("/result/13");
            } else {
              // ISFJ
              link("/result/11");
            }
          }
        }
      }
    }, 3000);
  }, []);
  return (
    <Body>
      <Title>노래 찾는 중</Title>
      <SubTitle>테스트 내용을 분석하고 있어요</SubTitle>
      <Img
        src='/images/music.gif'
        onClick={() => {
          console.log(param);
        }}
      />
    </Body>
  );
}

export default FindingPage;

const titleAni = keyframes`
  0% {
    background-position-y: 0%;
  }
  50% {
    background-position-y: 100%;
  }
  100% {
    background-position-y: 0%;
  }
`;

const subTitleAni = keyframes`
  0% {
    transform:scale(1);
  }
  50% {
    transform:scale(1.1);
  }
  100% {
    transform:scale(1);
  }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

const Title = styled.div`
  font-family: Pretendard;
  margin-top: 15vh;
  font-weight: 700;
  font-size: 30px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(180deg, #00ff19 0%, #04c1fd 100%);
  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 992px) {
    font-size: 52px;
  }
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  margin-top: 1vh;
  color: white;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 22px;
  }
`;

const Img = styled.img`
  margin-top: 25vw;
  width: 200px;
  @media (min-width: 768px) {
    margin-top: 12vw;
    width: 300px;
  }

  @media (min-width: 992px) {
    margin-top: 6vw;
    width: 300px;
  }
`;

import React, { useEffect, useState } from "react";
import { keyframes, styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";

function TestingPage() {
  const [mbti, setMbti] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
    O: 0,
  });
  const [can, setCan] = useState(true);
  const [select, setSelect] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imgProgress, setImgProgress] = useState(0);
  const link = useNavigate();
  const question = [
    {
      text: "내가 선호하는 노래 장르는?",
      img: "/images/question/whatYouLoveSong.svg",
      query1: "잔잔한 발라드",
      query2: "신나는 팝송",
      query11: "I",
      query22: "E",
    },
    {
      text: "좋아하는 가수의 공연을 보러 가면",
      img: "/images/question/mic.svg",
      query1: "친구랑 가는게 좋다",
      query2: "혼자 가는게 좋다",
      query11: "E",
      query22: "I",
    },
    {
      text: "나는 여행 계획을 세울 때",
      img: "/images/question/airplane.svg",
      query1: "모든 계획을 구체적으로 세운다",
      query2: "대충 전체적인 부분만 정해둔다",
      query11: "J",
      query22: "P",
    },
    {
      text: "나는 상상하는 것을 좋아한다",
      img: "/images/question/cloud.svg",
      query1: "그렇다",
      query2: "아니다",
      query11: "N",
      query22: "S",
    },
    {
      text: "친구가 고민상담을 한다면",
      img: "/images/question/sad.svg",
      query1: "공감하고 위로해준다",
      query2: "해결책을 말해준다",
      query11: "F",
      query22: "T",
    },
    {
      text: "나는 사람을 판단하는 기준이",
      img: "/images/question/graph.svg",
      query1: "명확하다",
      query2: "그때그때 느낌에 따라 다르다",
      query11: "S",
      query22: "N",
    },
    {
      text: "나는 무언가를 했을 때",
      img: "/images/question/nice.svg",
      query1: "결과가 중요하다",
      query2: "과정이 중요하다",
      query11: "T",
      query22: "F",
    },
    {
      text: "나는 계획적인 사람이다",
      img: "/images/question/calender.svg",
      query1: "그렇다",
      query2: "아니다",
      query11: "J",
      query22: "P",
    },
    {
      text: "나는 혼자일때가 편하다",
      img: "/images/question/cloudFace.svg",
      query1: "그렇다",
      query2: "아니다",
      query11: "I",
      query22: "E",
    },
    {
      text: "내 기분은 얼굴에 잘 드러난다",
      img: "/images/question/cat.svg",
      query1: "그렇다",
      query2: "아니다",
      query11: "F",
      query22: "T",
    },
    {
      text: "만약 중요한 시험을 망쳤다면",
      img: "/images/question/document.svg",
      query1: "작년보다 얼마나 떨어졌지? 큰일났네",
      query2: "어떻게든 되겠지",
      query11: "J",
      query22: "P",
    },
    {
      text: "1달동한 하루 한끼만 먹고 살기",
      img: "/images/question/meal.svg",
      query1: "원하는 음식 아무거나 가능?",
      query2: "헛소리 ㄴㄴ",
      query11: "N",
      query22: "S",
    },
    {
      text: "1달동한 하루 한끼만 먹고 살기",
      img: "/images/question/meal.svg",
      query1: "원하는 음식 아무거나 가능?",
      query2: "헛소리 ㄴㄴ",
      query11: "I",
      query22: "E",
    },
  ];

  const onClick = (num, prop) => {
    if (can == false) return;
    setSelect(num);
    onPoint(prop);
    setCan(false);
    fastImg();
    setTimeout(() => {
      setProgress(progress + 1);
      setSelect(0);
      setCan(true);
    }, 500);
    return () => {
      clearTimeout();
    };
  };

  const fastImg = () => {
    setTimeout(() => {
      setImgProgress(imgProgress + 1);
    }, 300);
    return () => {
      clearTimeout();
    };
  };

  useEffect(() => {
    if (progress != question.length - 1) return;
    setCan(false);
    setTimeout(() => {
      link(
        `/find/${mbti.E}/${mbti.I}/${mbti.N}/${mbti.S}/${mbti.T}/${mbti.F}/${mbti.P}/${mbti.J}`
      );
    }, 500);
    return () => {
      clearTimeout();
    };
  }, [progress]);

  const onImg = () => {
    return question[imgProgress].img;
  };

  const onPoint = (prop) => {
    setMbti({ ...mbti, [prop]: mbti[prop] + 1 });
  };

  return (
    <Body>
      <ProgressBackGround>
        <ProgressBar
          progress={progress}
          percent={question.length - 1}></ProgressBar>
      </ProgressBackGround>
      <Question>{question[progress].text}</Question>
      <Img src={onImg()} />
      <BtnBox>
        <SelectBtn
          onClick={() => {
            onClick(1, question[progress].query11);
          }}
          num={1}
          select={select}>
          <span>{question[progress].query1}</span>
        </SelectBtn>
        <SelectBtn
          onClick={() => {
            onClick(2, question[progress].query22);
          }}
          num={2}
          select={select}>
          <span>{question[progress].query2}</span>
        </SelectBtn>
      </BtnBox>
    </Body>
  );
}

export default TestingPage;

const buttonAni = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity:1;
    background: linear-gradient(135deg, #81FBB8 0%, #28C76F 100%);
  }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const ProgressBackGround = styled.div`
  margin-top: 5vh;
  background-color: #9c9c9c;
  width: 320px;
  height: 16px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 440px;
  }

  @media (min-width: 992px) {
    width: 560px;
  }
`;

const ProgressBar = styled.div`
  background-color: #0fdf65;
  transition: 0.5s ease-in-out;
  width: ${(prop) => (320 / prop.percent) * prop.progress + "px"};
  height: 16px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: ${(prop) => (440 / prop.percent) * prop.progress + "px"};
  }

  @media (min-width: 992px) {
    width: ${(prop) => (560 / prop.percent) * prop.progress + "px"};
  }
`;

const Question = styled.div`
  font-family: Pretendard;
  margin-top: 5vh;
  color: white;
  font-weight: 700;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 992px) {
    font-size: 40px;
  }
`;

const Img = styled.img`
  margin-top: 5vh;
  width: 200px;
  height: 200px;
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 992px) {
    width: 400px;
    height: 400px;
  }
`;

const BtnBox = styled.div`
  margin-top: 7vh;
  width: 330px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 450px;
    height: 260px;
  }

  @media (min-width: 992px) {
    margin-top: 5vh;
    width: 650px;
    height: 220px;
  }
`;

const SelectBtn = styled.div`
  font-family: Pretendard;
  cursor: pointer;
  font-weight: 700;
  border-radius: 16px;
  font-size: 16px;
  color: white;
  width: 300px;
  padding-left: 30px;
  height: 80px;
  display: flex;
  align-items: center;
  /* background-color: #1e1e1e #0fdf65; */
  background: ${(prop) =>
    prop.num == prop.select
      ? "linear-gradient(135deg, #81FBB8 0%, #28C76F 100%);"
      : "#1e1e1e"};
  /* animation: ${(prop) =>
    prop.num == prop.select
      ? css`
          ${buttonAni} 1.5s ease-in forwards
        `
      : null}; */
  @media (min-width: 768px) {
    width: 420px;
    height: 110px;
    border-radius: 20px;
    font-size: 18px;
  }

  @media (min-width: 992px) {
    width: 620px;
    height: 100px;
    border-radius: 20px;
    font-size: 18px;
  }
`;

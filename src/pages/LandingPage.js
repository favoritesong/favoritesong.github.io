import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { styled, keyframes } from "styled-components";
import { faSearch, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Album1 from "../components/Album1";
import Album2 from "../components/Album2";
import Demo from "../components/demoVer";

function LandingPage() {
  const containerRef = useRef(null);
  const link = useNavigate();

  // useEffect(() => {
  //   let inChildren = (
  //     <React.Fragment>
  //       <Album1 />
  //       <Album2 />
  //     </React.Fragment>
  //   );
  //   if (matchMedia("screen and (min-width: 992px)").matches) {
  //     inChildren = (
  //       <React.Fragment>
  //         <Album1 />
  //         <Album2 />
  //       </React.Fragment>
  //     );
  //   } else if (matchMedia("screen and (min-width: 768px)").matches) {
  //     inChildren = (
  //       <React.Fragment>
  //         <Album1 />
  //         <Album2 />
  //       </React.Fragment>
  //     );
  //   }

  //   ReactDOM.render(inChildren, containerRef.current);
  // }, []);

  const onClick = () => {
    link("/test");
  };

  return (
    <Body>
      <Title>최애곡 찾기 테스트</Title>
      <SearchBar>
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <SearchText>나와 가장 잘 어울리는 노래는?</SearchText>
      </SearchBar>
      <DemoBox>
        <Demo />
      </DemoBox>
      <Btn
        onClick={() => {
          onClick();
        }}>
        <span>
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span>&nbsp;&nbsp;&nbsp;시작하기</span>
      </Btn>
    </Body>
  );
}

export default LandingPage;

const titleFadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const btnFadein = keyframes`
  from {
      opacity: 0;
      transform:translateY(50px);
    }
    to {
      opacity: 1;
      transform:translateY(0px)
    }
  `;

const DemoBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #2d018b 0%, #000 100%);
`;

const Title = styled.div`
  margin-top: 8vh;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 30px;
  background: linear-gradient(#00ff19, #04c1fd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${titleFadein} 1s linear forwards;
  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 992px) {
    font-size: 52px;
  }
`;

const SearchBar = styled.div`
  margin-bottom: 10vh;
  margin-top: 4vh;
  background-color: rgba(0, 0, 0, 0);
  border: 2px white solid;
  width: 250px;
  height: 34px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  animation: ${titleFadein} 1s linear forwards;
  @media (min-width: 768px) {
    width: 400px;
    height: 38px;
  }

  @media (min-width: 992px) {
    width: 550px;
    height: 42px;
  }
`;

const SearchIcon = styled.span`
  font-size: 17px;
  color: white;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 19px;
    margin-left: 12px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
    margin-left: 14px;
  }
`;

const SearchText = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-left: 8px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    margin-left: 12px;
  }
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  overflow: hidden;
  width: calc(100vw);
  display: flex;
  justify-content: space-between;
  height: 150px;
  animation: ${titleFadein} 1s linear forwards;
  @media (min-width: 768px) {
    height: 240px;
  }

  @media (min-width: 992px) {
    height: 300px;
  }
`;

const Btn = styled.div`
  font-family: Pretendard;
  cursor: pointer;
  margin-top: 15vh;
  width: 300px;
  height: 50px;
  border-radius: 30px;
  background: linear-gradient(#15d294 0%, #07c742 100%);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  :first-child {
    color: white;
    font-size: 19px;
  }
  :last-child {
    color: white;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    margin-top: 15vh;
    width: 400px;
    height: 80px;
    border-radius: 50px;
    :first-child {
      color: white;
      font-size: 22px;
    }
    :last-child {
      color: white;
      font-size: 20px;
    }
  }
  @media (min-width: 992px) {
    margin-top: 10vh;
    width: 450px;
    height: 80px;
    border-radius: 70px;
    :first-child {
      color: white;
      font-size: 26px;
    }
    :last-child {
      color: white;
      font-size: 24px;
    }
  }
`;

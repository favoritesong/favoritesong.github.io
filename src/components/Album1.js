import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

function Album1() {
  const [cover, setCover] = useState();

  const img = ["/images/albumCover/1.jpg"];

  useEffect(() => {
    const random = parseInt(Math.random() * img.length);
    setCover(img[random]);
  }, []);

  return <>{cover && <Img src={cover} />}</>;
}

export default Album1;

const move = keyframes`
  0% {
    left:0vw;
  }
  28% {
    left:-60vw;
  }
  29% {
    left:-60vw;
    display:none;
  }
  30% {
    left:160vw;
    display:none;
  }
  100%{
    left:0vw;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 30vw;
  height: 30vw;
  border-radius: 5px;
  animation: ${move} 5s infinite linear;
  @media (min-width: 768px) {
    border-radius: 10px;
    width: 24vw;
    height: 24vw;
    animation: ${move} 10s infinite linear;
  }
  @media (min-width: 992px) {
    border-radius: 15px;
    width: 15vw;
    height: 15vw;
    animation: ${move} 20s infinite linear;
  }
`;

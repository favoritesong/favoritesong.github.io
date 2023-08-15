import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

function Demo() {
  const [cover, setCover] = useState();

  const img = [
    "/images/albumCover/1.jpg",
    "/images/albumCover/2.jpg",
    "/images/albumCover/3.jpg",
    "/images/albumCover/4.jpg",
    "/images/albumCover/5.jpg",
    "/images/albumCover/6.jpg",
    "/images/albumCover/7.jpg",
    "/images/albumCover/8.jpg",
    "/images/albumCover/9.jpg",
    "/images/albumCover/10.jpg",
  ];

  useEffect(() => {
    const random = parseInt(Math.random() * img.length);
    setCover(img[random]);
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(1);
  //     const random = parseInt(Math.random() * img.length);
  //     setCover(img[random]);
  //   }, 3000);
  // }, []);

  return <React.Fragment>{cover && <Img src={cover} />}</React.Fragment>;
}

export default Demo;

const move = keyframes`
  0% {
    transform:rotateY(90deg);
  }
  100% {
    transform:rotateY(270deg);
  }
`;

const Img = styled.img`
  width: 40vw;
  height: 40vw;
  border-radius: 5px;
  animation: ${move} 3s infinite linear;
  @media (min-width: 768px) {
    border-radius: 10px;
    width: 40vw;
    height: 40vw;
  }
  @media (min-width: 992px) {
    border-radius: 15px;
    width: 15vw;
    height: 15vw;
  }
`;

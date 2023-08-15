import React from "react";
import { useParams } from "react-router-dom";
import { styled, css } from "styled-components";
import GoogleTagManager from "../google";

function ResultPage() {
  const { mbti } = useParams();
  const result = [
    {
      // ENTJ length 0
      img: "/images/useCover/bumpercar.jpg",
      title: "범퍼카",
      subTitle: "다 때려박어 범퍼카",
      subTitleEmoji: "/images/emoji/car.png",
      text1: "화끈한 성격의 보유자",
      text2: "열등감? 그게 뭔데",
      text3: "간섭 받는거 싫어함",
      text4: "남들에게 기대지 않음",
      text5: "피해 주는 것도, 피해 받는 것도 싫음",
      text6: "남들의 고민에 공감보단 해결책을 줌",
      color1: "#f05f57",
      color2: "#360940",
      tcolor: "#967070B2",
      text: "#ACACAC",
    },
    {
      // ENFJ length 1
      img: "/images/useCover/idol.jpg",
      title: "IDOL",
      subTitle: "완벽한 궁극의 IDOL",
      subTitleEmoji: "/images/emoji/star.png",
      text1: "핵인싸가 되고싶어함",
      text2: "사람들을 정말 좋아함",
      text3: "눈치 200단",
      text4: "시끄럽고 단순함",
      text5: "계획짜는것을 좋아함",
      text6: "여가시간을 혼자 보내는 것을 좋아함",
      color2: "#BC78EC",
      color1: "#3B2667",
      tcolor: "#887096B2",
      text: "#ACACAC",
    },
    {
      // ESFJ length 2
      img: "/images/useCover/loykim.jpg",
      title: "그때 헤어지면 돼",
      subTitle: "너를 사랑하는 법도 어렵지 않아요",
      subTitleEmoji: "/images/emoji/bear.png",
      text1: "남들에게 상처받아도 그 사람 배려해서 말 못함",
      text2: "내 주변 사람들 다 챙김",
      text3: "의외로 철저함",
      text4: "어색한 상황 못참고 먼저 말 검",
      text5: "고민상담 잘해줌",
      text6: "자신이 세운 계획 틀어지는거 싫어함",
      color2: "#A64DB6",
      color1: "#F1CA74",
      tcolor: "#968270B2",
      text: "#BFBFBF",
    },
    {
      // ENTP length 3
      img: "/images/useCover/bss.jpg",
      title: "파이팅 해야지",
      subTitle: "힘내야지 뭐 어쩌겠어",
      subTitleEmoji: "/images/emoji/fire.png",
      text1: "지나간 일에 후회가 없음",
      text2: "뒷일 생각 안하고 하고 싶은거 다하면서 삶",
      text3: "감정기복 심한데 남들한테 티냄",
      text4: "혼자서 다니는게 가장 편함",
      text5: "사람들을 좋아하지만 혼자만의 시간도 필요함",
      text6: "다방면에 적당한 재능. 엄청 잘하지는 않음",
      color2: "#123597",
      color1: "#97ABFF",
      tcolor: "#707296B2",
      text: "#ACACAC",
    },
    {
      // ENFP length 4
      img: "/images/useCover/anySong.jpg",
      title: "아무노래",
      subTitle: "아무노래나 일단 틀어",
      subTitleEmoji: "/images/emoji/headpon.png",
      text1: "무계획에 즉흥적인 성격",
      text2: "정신이 산만함. 잡생각 많음",
      text3: "처음엔 낯가리는데 금방 친해지고 말도 많아짐",
      text4: "뭔가에 쉽게 몰두했다 쉽게 그만둠",
      text5: "감정이 얼굴에 다 드러남",
      text6: "새롭게 친구 사귀는거 좋아함",
      color2: "#1D67C3",
      color1: "#DBB261",
      tcolor: "#708896B2",
      text: "#BFBFBF",
    },
    {
      // ESFP length 5
      img: "/images/useCover/400km.jpg",
      title: "400km",
      subTitle: "너의 속도는 400km로",
      subTitleEmoji: "/images/emoji/lacingCar.png",
      text1: "성격이 매우 급합",
      text2: "오지랖 국가대표급임",
      text3: "사람 만나는거 너무 좋은데 나가기 귀찮음",
      text4: "모임에서 침묵 흐르는거 제일 싫어함",
      text5: "아무리 걱정되는 일 있어도 좀만 지나면 무생각",
      text6: "고집이 셈",
      color2: "#5151E5",
      color1: "#72EDF2",
      tcolor: "#707F96B2",
      text: "#BFBFBF",
    },
    {
      // INTP length 6
      img: "/images/useCover/flex.jpg",
      title: "FLEX",
      subTitle: "너의 옷이 그게 뭐야 얼른 갈아입어",
      subTitleEmoji: "/images/emoji/yshirt.png",
      text1: "답답한 사람들 보면 화남",
      text2: "자기애 개쩔음",
      text3: "팩폭하지 말라는 소리 많이들음",
      text4: "잡담 잘 못함",
      text5: "웬만한 일에 상처 안받음",
      text6: "인간관계가 계산적임",
      color2: "#CF526C",
      color1: "#CFAB86",
      tcolor: "#967070B2",
      text: "#D6D5D5",
    },
    {
      // INFP length 7
      img: "/images/useCover/rain.jpg",
      title: "비",
      subTitle: "비가 내리다 말다",
      subTitleEmoji: "/images/emoji/rain.png",
      text1: "가끔 우울한 나에게 심취함",
      text2: "혼자 있는건 좋은데 외로운 건 싫음",
      text3: "사람 사귈 때 따지는거 개많음",
      text4: "자기애 강한데 자존감은 낮음",
      text5: "남얘기 잘 들어주는척 하는데 사실 딴생각함",
      text6: "관종인데 막상 관심받으면 어색하고 어쩔줄모름",
      color2: "#9452A5",
      color1: "#FFF5C3",
      tcolor: "#967092B2",
      text: "#D6D5D5",
    },
    {
      // ISTP length 8
      img: "/images/useCover/wingwing.jpg",
      title: "위잉위잉",
      subTitle: "오늘도 의미 없는 또 하루가 흘러가죠",
      subTitleEmoji: "/images/emoji/leaf.png",
      text1: "만사가 귀찮음",
      text2: "쓸데없는 소비 엄청함",
      text3: "미루고 미루고 미루고 미룸",
      text4: "공감능력 부족",
      text5: "MBTI, 타로, 사주에 관심 많음",
      text6: "하기 싫은건 절대로 안함",
      color2: "#0E197D",
      color1: "#FFDB01",
      tcolor: "#8C9670B2",
      text: "#D6D5D5",
    },
    {
      // INTJ length 9
      img: "/images/useCover/mad.jpg",
      title: "부럽지가 않어",
      subTitle: "왜냐면 나는 부럽지가 않어",
      subTitleEmoji: "/images/emoji/haaa.png",
      text1: "남한테 관심 없고 고민상담 잘 못함",
      text2: "혼자있는거 좋아하는데 단체활동엔 주도적임",
      text3: "내성적인 관종",
      text4: "동물들에게는 한없이 친절",
      text5: "자기 성격 특이한데 남한테 그런소리 듣긴 싫음",
      text6: "남 눈치 안보고 무신경",
      color2: "#002661",
      color1: "#92FFC0",
      tcolor: "#709496B2",
      text: "#D6D5D5",
    },
    {
      // ISTJ length 10
      img: "/images/useCover/gun.jpg",
      title: "우리서로사랑하지는말자",
      subTitle: "너가 아플 땐 조금 가벼운 걱정",
      subTitleEmoji: "/images/emoji/chat.png",
      text1: "가끔 공감능력 부족한 거 같다는 소리 들음",
      text2: "협동하고 이런거 싫어함",
      text3: "여행가면 나서서 계획 세움",
      text4: "철벽 잘 침",
      text5: "그냥 나혼자 하는게 젤 편하고 젤 빠름",
      text6: "내 일이랑 의견에 간섭받는 거 싫어함",
      color2: "#6018DC",
      color1: "#EEAD92",
      tcolor: "#8E7096B2",
      text: "#D6D5D5",
    },
    {
      // ISFJ length 11
      img: "/images/useCover/goodday.jpg",
      title: "좋은날",
      subTitle: "새로 바뀐 내 머리가 별로였는지",
      subTitleEmoji: "/images/emoji/sad.png",
      text1: "겉으론 무덤덤해보여도 속으론 온갖 생각 다 함",
      text2: "전화오면 받을까 말까 고민하다 받음",
      text3: "계획 세우는 거 좋아하고 메모하고 기억해둠",
      text4: "하자고 하면 거의 다 해줌",
      text5: "외로움 많이 타는데 많은 사람이랑 있는건 싫음",
      text6: "게으른 완벽주의자",
      color2: "#BB4E75",
      color1: "#FF9D6C",
      tcolor: "#967070B2",
      text: "#D6D5D5",
    },
    {
      // INFJ length 12
      img: "/images/useCover/attention.jpg",
      title: "Attention",
      subTitle: "우연히 널 마주친 척 할래",
      subTitleEmoji: "/images/emoji/eyes.png",
      text1: "친해지고 싶은 사람이 있어도 먼저 다가오길 바람",
      text2: "낯가림 심함, 눈치 빠름",
      text3: "새로운 일 시작하는거 싫어함",
      text4: "친하고 마음 맞는 애랑 단 둘이 노는거 좋아함",
      text5: "조용히 다니는데 가끔 좀 튀고싶을 때 있음",
      text6: "할거 미리 해치우는 편",
      color2: "#9708CC",
      color1: "#43CBFF",
      tcolor: "#707996B2",
      text: "#D6D5D5",
    },
    {
      // ISFP length 13
      img: "/images/useCover/instagram.jpg",
      title: "instargram",
      subTitle: "난 핸드폰을 놓지 못해",
      subTitleEmoji: "/images/emoji/phone.png",
      text1: "모든 일 미룰 수 있을 때까지 다 미룸",
      text2: "약속 있었는데 취소되면 속으로 기뻐함",
      text3: "조용한 관종, 소심한 관종",
      text4: "주변 의견, 주변 분위기 따라감",
      text5: "칭찬 받으면 그거 하루종일 생각남",
      text6: "인간관계에 신경 많이 쓰는 편",
      color2: "#5312D6",
      color1: "#E8D07A",
      tcolor: "#8C7096B2",
      text: "#D6D5D5",
    },
    {
      // ESTP length 14
      img: "/images/useCover/nangman.jpg",
      title: "낭만교향곡",
      subTitle: "난 뭐든 될 수가 있어",
      subTitleEmoji: "/images/emoji/piano.png",
      text1: "걍 대충살고 눈치도 안봄",
      text2: "모임에서 어느새 내가 분위기 주도하고 있음",
      text3: "근자감 쩔음",
      text4: "표현을 많이 함",
      text5: "어른들이 좋아함",
      text6: "손재주 좋음",
      color2: "#130CB7",
      color1: "#52E5E7",
      tcolor: "#707B96B2",
      text: "#D6D5D5",
    },
    {
      // ESTJ length 15
      img: "/images/useCover/sicha.jpg",
      title: "시차",
      subTitle: "아직 난 일하는 중이야",
      subTitleEmoji: "/images/emoji/computer.png",
      text1: "남에게 관심없고 오로지 나한테만 집중",
      text2: "목표를 이룰때까지 한 우물만 팜",
      text3: "리더역할 주도적으로 자주 함",
      text4: "싸우는 거 싫어하지만 싸워서 지는거 싫어함",
      text5: "시간약속 어기는 거 싫고 즉흥적인거 싫음",
      text6: "호불호 확실",
      color2: "#3813C2",
      color1: "#FF6FD8",
      tcolor: "#817096B2",
      text: "#D6D5D5",
    },
  ];

  const onImg = () => {
    return result[mbti].img;
  };

  const onSubImg = () => {
    return result[mbti].subTitleEmoji;
  };

  return (
    <React.Fragment>
      <Body color1={result[mbti].color1} color2={result[mbti].color2}>
        <Title>내 최애곡은?</Title>
        <Container>
          <Img src={onImg()} />
          <TextContainer>
            <MainText>{result[mbti].title}</MainText>
            <SubText text={result[mbti].text}>
              {result[mbti].subTitle}
              <SubImg src={onSubImg()} />
            </SubText>
          </TextContainer>
          <TextBox tcolor={result[mbti].tcolor}>
            {result[mbti].text1}
            <br />
            {result[mbti].text2}
            <br />
            {result[mbti].text3}
            <br />
            {result[mbti].text4}
            <br />
            {result[mbti].text5}
            <br />
            {result[mbti].text6}
          </TextBox>
        </Container>
      </Body>
    </React.Fragment>
  );
}

export default ResultPage;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(prop) =>
    css`linear-gradient(135deg, ${prop.color1} 0%, ${prop.color2} 100%);`};
`;

const Title = styled.div`
  font-family: Pretendard;
  margin-top: 3vh;
  font-size: 32px;
  font-weight: 700;
  color: white;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
`;

const Img = styled.img`
  width: 270px;
  height: 270px;
  margin-top: 2vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 992px) {
    width: 450px;
    height: 450px;
  }
`;

const SubImg = styled.img`
  width: 14px;
  position: relative;
  top: 2px;
  left: 3px;
  @media (min-width: 768px) {
    width: 18px;
    top: 2px;
    left: 3px;
  }
  @media (min-width: 992px) {
    width: 24px;
    top: 2px;
    left: 3px;
  }
`;

const TextContainer = styled.div`
  width: 246px;
  padding-left: 4px;
  @media (min-width: 992px) {
    width: 450px;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  letter-spacing: 0px;
  margin-bottom: 50px;
  font-family: Pretendard;
  width: 300px;
  padding-left: 22px;
  padding-right: 5px;
  padding-top: 20px;
  padding-bottom: 23px;
  height: 174px;
  ${(prop) =>
    css`
      background-color: ${prop.tcolor};
    `};
  margin-top: 2vh;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  @media (min-width: 768px) {
    width: 430px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 5px;
    height: 210px;
    font-size: 20px;
    line-height: 32px;
  }
  @media (min-width: 992px) {
    font-size: 32px;
    width: 910px;
    height: 250px;
    line-height: 38px;
  }
`;

const MainText = styled.div`
  margin-top: 2vh;
  width: 240px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  color: white;
  @media (min-width: 768px) {
    width: 350px;
    font-size: 28px;
  }
  @media (min-width: 992px) {
    width: 450px;
    font-size: 40px;
  }
`;

const SubText = styled.div`
  width: 240px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: ${(prop) => `${prop.text}`};
  margin-left: 5px;
  @media (min-width: 768px) {
    margin-left: 10px;
    width: 350px;
    font-size: 18px;
  }
  @media (min-width: 992px) {
    width: 450px;
    margin-left: 5px;
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: 910px;
    flex-wrap: wrap;
  }
`;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 1024px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column-reverse;
`;

const MatchBox = styled.div`
  width: 100%;
  max-width: 800px;
  //height: 300px;
  padding: 40px 20px;
  background-color: rgba(10, 10, 10, .95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const MatchHeader = styled.div`
  margin-bottom: 20px;
  font-size: 17px;
`;

const SetColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageList = styled.div``;

const ChapionImg = styled.img`
  width: 100%;
  max-width: 100px;
  @media (max-width: 1024px) {
    width: 70px;
  }
`;

const LoseChamp = styled.img`
  width: 100%;
  max-width: 100px;
  opacity: 0.2;
  @media (max-width: 1024px) {
    width: 70px;
  }
`;

export default () => (
  <Container>
    <MatchBox>
      <MatchHeader>
        8강 Match1 PC는 역시 내집컴 vs hui biao
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <ChapionImg src="images/Malphite.jpg" />
          <LoseChamp src="images/Seraphine.jpg" />
          <LoseChamp src="images/Caitlyn.jpg" />
        </ImageList>
        VS
        <ImageList>
          <LoseChamp src="images/Aatrox.jpg" />
          <ChapionImg src="images/Zed.jpg" />
          <ChapionImg src="images/Vayne.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        8강 Match2 신천지 박살낸다 vs 무한쯔꾸요미
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <ChapionImg src="images/Aatrox.jpg" />
          <LoseChamp src="images/Yone.jpg" />
          <LoseChamp src="images/Yasuo.jpg" />
        </ImageList>
        VS
        <ImageList>
          <LoseChamp src="images/Olaf.jpg" />
          <ChapionImg src="images/Rumble.jpg" />
          <ChapionImg src="images/Kled.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        8강 Match3 온천장베인스 vs 강블리가될거야
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <LoseChamp src="images/MonkeyKing.jpg" />
          <ChapionImg src="images/Jhin.jpg" />
          <ChapionImg src="images/Jayce.jpg" />
        </ImageList>
        VS
        <ImageList>
          <ChapionImg src="images/Teemo.jpg" />
          <LoseChamp src="images/Lucian.jpg" />
          <LoseChamp src="images/Caitlyn.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        8강 Match4 김에코다 vs 랩을시작한다홍
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <ChapionImg src="images/Darius.jpg" />
          <LoseChamp src="images/Ekko.jpg" />
          <ChapionImg src="images/Morgana.jpg" />
        </ImageList>
        VS
        <ImageList>
          <LoseChamp src="images/XinZhao.jpg" />
          <ChapionImg src="images/Renekton.jpg" />
          <LoseChamp src="images/Heimerdinger.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        4강 Match1 온천장베인스 vs 김에코다
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <LoseChamp src="images/Rengar.jpg" />
          <LoseChamp src="images/Jayce.jpg" />
        </ImageList>
        VS
        <ImageList>
          <ChapionImg src="images/Volibear.jpg" />
          <ChapionImg src="images/Lux.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        4강 Match2 hui biao vs 무한쯔꾸요미
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <ChapionImg src="images/Vayne_11.jpg" />
          <ChapionImg src="images/Sett.jpg" />
        </ImageList>
        VS
        <ImageList>
          <LoseChamp src="images/Rumble.jpg" />
          <LoseChamp src="images/Shen.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
    <MatchBox>
      <MatchHeader>
        결승전 김에코다 vs hui biao
      </MatchHeader>
      <SetColumn>
        <ImageList>
          <LoseChamp src="images/Volibear.jpg" />
          <LoseChamp src="images/Lux.jpg" />
        </ImageList>
        VS
        <ImageList>
          <ChapionImg src="images/Vayne_11.jpg" />
          <ChapionImg src="images/Lucian.jpg" />
        </ImageList>
      </SetColumn>
    </MatchBox>
  </Container>
)
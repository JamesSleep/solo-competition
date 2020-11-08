import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 1024px;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  font-family: 'Do Hyeon';
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 300;
  font-family: 'Do Hyeon';
  margin-bottom: 35px;
  line-height: 30px;
`;

const ScreenShot = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export default () => (
  <Container>
    <TextBox>
      <Title>
        게임 경기 규칙
      </Title>
      <Content>
        승리 조건은 챔피언 1킬 또는 1차타워 철거 시 2가지 경우로 한정한다. <br/>
        매 라운드는 3전 2선 세트 승으로 경기를 진행한다. <br/>
        매 세트 마다 사용한 챔피언은 다음 세트에서 사용 불가 <br/>
        경기는 소환사의 협곡 맵에서 진행되며, 탑 - 바텀 - 미드 라인을 각 1회씩 사용한다. <br/>
        본진으로의 귀환 횟수, 스펠 사용은 제한이 없다. <br/>
        관전 프로그램이 따로 존재하지 않으므로 시합이 종료된 시점부터 5분간 대기 후 다음 경기를 준비한다. <br/>
        5분의 대기시간은 자유롭게 이용가능하다. <br/>
        디스코드 음성 채팅은 자유롭게 사용가능하다. <br/>
      </Content>
      <Title>경기 준비</Title>
      <Content>
        참가자는 경기 시작전 본인이 사용할 챔피언 엔트리 3개를 순서를 정하여 제출한다. <br/>
        경기 시작 후 엔트리 변경은 불가능하다. <br/>
        사용할 챔피언이 LOL의 자체적인 긴급패치로 인한 글로벌밴일 경우는 변경 가능하다. <br/>
        경기 시작전까지 상대방의 챔피언은 알 수 없다. 선수 본인이 자신있다면 디스코드로 공개해도 무관하다. <br/>
        진영 선택은 조추첨 시 앞자리 배정된 사람이 먼저 정한다. <br/>
        경기 일정은 선수 개인 시간에 맞춰 준비할 예정 <br/>
      </Content>
      <Title>몰수패 규정</Title>
      <Content>
        경기 도중 각 라인 별로 정해진 기준선을 벗어나는 경우 (하단 사진 참고) <br/>
        정글 몬스터를 사냥하거나 식물을 이용하는 경우 <br/>
        지나치게 교전을 회피하여 시간을 지연시키는 경우 (귀환 후 복귀하지 않거나, 장시간 포탑뒤에서만 있는 경우) <br/>
        사전에 제출한 챔피언 엔트리 외 다른 챔피언을 사용하는 경우 <br/>
        경기 당일 정해진 시각까지 LOL, DISCORD 로그인이 되어있지 않은 경우 <br/>
        정전, 서버 문제 등의 불가피한 상황외에 탈주할 경우 <br/>
      </Content>
      <Title>라인별 기준선</Title>
      <ScreenShot src="images/mid1.png" />
      <ScreenShot src="images/mid2.png" />
      <ScreenShot src="images/mid3.png" />
      <ScreenShot src="images/top1.png" />
      <ScreenShot src="images/bottom1.png" />
    </TextBox>
  </Container>
);
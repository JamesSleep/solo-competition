import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-width: 900px;
  min-height: 1100px;
  justify-content: center;
  align-items: flex-start;
`;

const OpacityBox = styled.div`
  width: 900px;
  height: 1000px;
  background-color: rgba(0, 0, 0, .85);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const RoundBox = styled.div`
  width: 25%;
  height: 100%;
  padding: 20px 0px;
`;

const RoundHeader = styled.div`
  display: flex;
  height: 50px;
  padding-left: 10px;
  align-items: center;
  font-size: 20px;
  border-bottom: 2px solid white;
`;

const RoundBody = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MatchColumn = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0px;
`;

const PlayerBlock = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  background-color: #202020;
  border: 1px solid #2d2d2d;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const MatchDate = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerticalLine = styled.div`
  width: 3px;
  height: 210px;
  position: absolute;
  background-color: #2e2f33;
  top: -135px;
  right: -45px;
`;

const HorizontalLine = styled.div`
  width: 20px;
  height: 3px;
  position: absolute;
  background-color: #2e2f33;
  top: 75px;
  right: -45px;
`;

const HorizontalLine2 = styled.div`
  width: 20px;
  height: 3px;
  position: absolute;
  background-color: #2e2f33;
  right: -62px;
  top: -30px;
`;

const SemiFinalHLine = styled.div`
  width: 20px;
  height: 3px;
  position: absolute;
  background-color: #2e2f33;
  top: 125px;
  right: -40px;
`;
const SemiFinalHLine2 = styled.div`
  width: 20px;
  height: 3px;
  position: absolute;
  background-color: #2e2f33;
  right: -60px;
  top: 335px;
`;
const SemiFinalVLine = styled.div`
  width: 3px;
  height: 425px;
  position: absolute;
  background-color: #2e2f33;
  top: 125px;
  right: -43px;
`;

const Score = styled.div`
  position: absolute;
  right: 5px;
  color: ${props => props.win ? "#c4943f" : "#fff"};
  font-size: 16px;
  font-weight: 600;
`;

export default ({ players }) => (
  <Container>
    <OpacityBox>
      <RoundBox>
        <RoundHeader>
          8강
        </RoundHeader>
        <RoundBody>
          {players.map((player, index) => {
            if (index % 2 > 0) {
              return (
                <MatchColumn>
                  <HorizontalLine />
                  { index % 3 === 0 && <VerticalLine />}
                  { index % 7 === 0 && <VerticalLine />}
                  { index % 3 === 0 && <HorizontalLine2 />}
                  { index % 7 === 0 && <HorizontalLine2 />}
                  <PlayerBlock>
                    {players[index - 1]}
                    {index - 1 === 4 && (
                      <Score win={false}>1</Score>
                    )}
                    {index - 1 === 6 && (
                      <Score win={false}>1</Score>
                    )}
                    {index - 1 === 0 && (
                      <Score win={true}>2</Score>
                    )}
                    {index - 1 === 2 && (
                      <Score win={true}>2</Score>
                    )}
                  </PlayerBlock>
                  <MatchDate>
                    {index === 1 && "2020/11/10  PM 07:00"}
                    {index === 3 && "2020/11/10  PM 08:00"}
                    {index === 5 && "2020/11/9  PM 08:00"}
                    {index === 7 && "2020/11/9  PM 09:00"}
                  </MatchDate>
                  <PlayerBlock>
                    {player}
                    {index === 5 && (
                      <Score win={true}>2</Score>
                    )}
                    {index === 7 && (
                      <Score win={true}>2</Score>
                    )}
                    {index === 1 && (
                      <Score win={false}>1</Score>
                    )}
                    {index === 3 && (
                      <Score win={false}>1</Score>
                    )}
                  </PlayerBlock>
                </MatchColumn>
              )
            }
          })}
        </RoundBody>
      </RoundBox>
      <RoundBox>
        <RoundHeader>
          4강
        </RoundHeader>
        <RoundBody>
          <MatchColumn>
            <SemiFinalHLine />
            <SemiFinalHLine2 />
            <SemiFinalVLine />
            <PlayerBlock>
              온천장베인스
              <Score win={false}>0</Score>
            </PlayerBlock>
            <MatchDate>
              {"2020/11/12 PM 08:00"}
            </MatchDate>
            <PlayerBlock>
              김에코다
              <Score win={true}>2</Score>
            </PlayerBlock>
          </MatchColumn>
          <MatchColumn>
            <SemiFinalHLine />
            <PlayerBlock>
              hui biao
              <Score win={true}>2</Score>
            </PlayerBlock>
            <MatchDate>
              {"2020/11/13 PM 08:00"}
            </MatchDate>
            <PlayerBlock>
              무한쯔꾸요미
              <Score win={false}>0</Score>
            </PlayerBlock>
          </MatchColumn>
        </RoundBody>
      </RoundBox>
      <RoundBox>
        <RoundHeader>
          결승
        </RoundHeader>
        <RoundBody>
          <MatchColumn>
            <PlayerBlock>김에코다</PlayerBlock>
            <MatchDate>
              {"2020/11/14 PM 08:00"}
            </MatchDate>
            <PlayerBlock>hui biao</PlayerBlock>
          </MatchColumn>
        </RoundBody>
      </RoundBox>
    </OpacityBox>
  </Container>
)
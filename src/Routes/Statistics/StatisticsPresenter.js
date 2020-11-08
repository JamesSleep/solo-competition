import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 500px;
  //min-height: 1024px;
  display: flex;
  justify-content: center;
`;

const MessageBox = styled.div`
  width: 900px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  padding-left: 30px;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
`;

const Icon = styled.img``;

export default () => (
  <Container>
    <MessageBox>
      <Icon src="images/teamo.png" />
      <Text>
        준비중입니다 !
      </Text>
    </MessageBox>
  </Container>
)
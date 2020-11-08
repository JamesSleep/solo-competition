import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid 
    ${props => props.current ? "#3498db" : "transparent"};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">대진표</SLink>
      </Item>
    </List>
    <List>
      <Item current={pathname === "/matchResult"}>
        <SLink to="/matchResult">경기기록</SLink>
      </Item>
    </List>
    <List>
      <Item current={pathname === "/statistics"}>
        <SLink to="/statistics">통계</SLink>
      </Item>
    </List>
    <List>
      <Item current={pathname === "/rulePage"}>
        <SLink to="/rulePage">대회 규정</SLink>
      </Item>
    </List>
  </Header>
));
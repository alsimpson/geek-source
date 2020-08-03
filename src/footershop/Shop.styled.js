import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const Main = styled.div`
  margin: 0;
  padding: 0;
`;
const ListHeader = styled.p`
  font-weight: bold;
  color: ${colors.white};
`;
const List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  color: ${colors.grey};
  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
`;

function Shop(props) {
  return (
    <Main>
      <ListHeader>SHOP</ListHeader>
      <List>
        {props.list.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
    </Main>
  );
}

export default Shop;

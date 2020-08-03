import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const Main = styled.div`
  margin: 1% 2% 1% 2%;
  padding: 1%;
`;
const ListHeader = styled.p`
  font-weight: bold;
  color: ${colors.white};
  margin: 0;
  padding: 0;
`;
const List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  color: ${colors.grey};
  margin: 1% 0 1% 0;
  padding: 1% 0 1% 0;
  border-bottom: .5px solid ${colors.grey};
  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
  &:last-child {border: none;}
`;
const Line = styled.hr`
  width: 45px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.grey};
  margin: 1% 0 0 0;
  padding: 0;
`;

function ShopByCategory(props) {
  return (
    <Main>
      <Line />
      <ListHeader>Shop by Category</ListHeader>
      <List>
        {props.list.map((item) => (
          <ListItem key={item.id}>
            {item.name}
          </ListItem>
        ))}
      </List>
    </Main>
  );
}

export default ShopByCategory;

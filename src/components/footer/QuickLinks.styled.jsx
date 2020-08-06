import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Main = styled.div`
  margin: 0;
  padding: 0;
`;

const ListHeader = styled.p`
  font-size: 0.8 rem;
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

function StyledQuickLinks(){
  return (
    <Main>
      <ListHeader>Quick Links</ListHeader>
      <List>
        <ListItem>Returns</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>FAQs</ListItem>
        <ListItem>Customer Support</ListItem>
        <ListItem>Terms & Conditions</ListItem>
        <ListItem>Privacy Policy</ListItem>
      </List>
    </Main>
  );
}

export default StyledQuickLinks;

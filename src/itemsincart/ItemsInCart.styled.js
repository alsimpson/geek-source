import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;
const ItemsText = styled.div`
  flex: 1;
  margin: 0;
  padding: 0;
`;
const ShoppingCartImage = styled.div`
  margin: 0;
  padding: 0;
`;

function ItemsInCart(props) {
  return (
    <Main>
      <ItemsText>{props.items} items in your cart</ItemsText>
      <ShoppingCartImage>
        <ShoppingCartIcon color={props.color} />
      </ShoppingCartImage>
    </Main>
  );
}

export default ItemsInCart;

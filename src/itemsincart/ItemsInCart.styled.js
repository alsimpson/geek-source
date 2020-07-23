import React from "react";
import styled from "styled-components";
import ShoppingCart from "../assets/svg/shopping-cart-outline.svg";

const Main = styled("div")`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;
const ItemsText = styled("p")`
  flex: 1;
  margin: 10% auto;
  padding: 2px 5px 0 0;
`
const ShoppingCartImage = styled("img")`
  margin: 10% auto;
  width: 25px;
  height: 23px;
`

function ItemsInCart(props){
  return(
    <Main>
      <ItemsText>{props.items} items in your cart</ItemsText>
      <ShoppingCartImage src={ShoppingCart}/>
    </Main>
  );
}

export default ItemsInCart;

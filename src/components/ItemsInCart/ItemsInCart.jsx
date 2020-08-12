import React from "react";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import { StyledMain,
         StyledItemsText,
         StyledShoppingCartImage
        } from "./ItemsInCart.styled";

/* TODO add navigation to shopping cart page */

function ItemsInCart(props) {
  return (
    <StyledMain>
      <StyledItemsText>{props.items} items in your cart</StyledItemsText>
      <StyledShoppingCartImage>
        <ShoppingCartIcon color={props.color} />
      </StyledShoppingCartImage>
    </StyledMain>
  );
}

export default ItemsInCart;

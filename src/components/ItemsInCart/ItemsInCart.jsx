import React from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import { StyledMain,
         StyledItemsText,
         StyledShoppingCartImage
        } from "./ItemsInCart.styled";

/* TODO add navigation to shopping cart page */

function ItemsInCart({items, color}) {
  return (
    <StyledMain>
      <StyledItemsText>{items} items in your cart</StyledItemsText>
      <StyledShoppingCartImage>
        <ShoppingCartIcon color={color} />
      </StyledShoppingCartImage>
    </StyledMain>
  );
}

ItemsInCart.propTypes = {
  items: PropTypes.number,
  color: PropTypes.string
};

ItemsInCart.defaultProps = {
  items: 0,
  color: 'black'
};

export default ItemsInCart;

import React from "react";
import { ReactComponent as Icon } from "../../assets/svg/shopping-cart-outline.svg";

function ShoppingCartIcon(props) {
  return(
    <Icon fill={props.color}/>
  );
}

export default ShoppingCartIcon;

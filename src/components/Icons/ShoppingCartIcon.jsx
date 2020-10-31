import React from "react";
import Proptypes from "prop-types";
import { ReactComponent as Icon } from "../../assets/svg/shopping-cart-outline.svg";

function ShoppingCartIcon({color}) {
  return(
    <Icon fill={color}/>
  );
}

ShoppingCartIcon.propTypes = {
  color: Proptypes.string,
};

ShoppingCartIcon.defaultProps = {
  color: "black",
};

export default ShoppingCartIcon;

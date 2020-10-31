import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ShoppingCartAddIcon({size, color}) {
  return (
    <>
      <FontAwesomeIcon icon={faCartPlus} size={size} color={color} />
    </>
  );
}

ShoppingCartAddIcon.propTypes = {
  size: Proptypes.string,
  color: Proptypes.string,
};

ShoppingCartAddIcon.defaultProps = {
  size: "sm",
  color: "black"
};

export default ShoppingCartAddIcon;

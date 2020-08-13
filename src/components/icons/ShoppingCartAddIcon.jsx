import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ShoppingCartAddIcon({size}) {
  return (
    <>
      <FontAwesomeIcon icon={faCartPlus} size={size} />
    </>
  );
}

ShoppingCartAddIcon.propTypes = {
  size: Proptypes.string,
};

ShoppingCartAddIcon.defaultProps = {
  size: "sm",
};

export default ShoppingCartAddIcon;

import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";

function ShippingFastIcon({size}) {
  return (
    <>
      <FontAwesomeIcon icon={faShippingFast} size={size} />
    </>
  );
}

ShippingFastIcon.propTypes = {
  size: Proptypes.string,
};

ShippingFastIcon.defaultProps = {
  size: "2x",
};

export default ShippingFastIcon;

import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function CreditCardIcon({size}) {
  return (
    <>
      <FontAwesomeIcon icon={faCreditCard} size={size}/>
    </>
  );
}

CreditCardIcon.propTypes = {
  size: Proptypes.string,
};

CreditCardIcon.defaultProps = {
  size: "2x",
};

export default CreditCardIcon;

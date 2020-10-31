import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcApplePay } from "@fortawesome/free-brands-svg-icons";

function CcApplePayIcon({size}) {
  return <FontAwesomeIcon icon={faCcApplePay} size={size} />;
}

CcApplePayIcon.propTypes = {
  size: Proptypes.string,
};

CcApplePayIcon.defaultProps = {
  size: "lg",
};

export default CcApplePayIcon;

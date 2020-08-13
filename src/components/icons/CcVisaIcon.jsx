import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

function CcVisaIcon({size}){
  return(
    <FontAwesomeIcon icon={faCcVisa} size={size} />
  )
}

CcVisaIcon.propTypes = {
  size: Proptypes.string,
};

CcVisaIcon.defaultProps = {
  size: "lg",
};

export default CcVisaIcon;

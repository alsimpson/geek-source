import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";

function CcAmexIcon({size}) {
  return <FontAwesomeIcon icon={faCcAmex} size={size} />;
}

CcAmexIcon.propTypes = {
  size: Proptypes.string
}

CcAmexIcon.defaultProps = {
  size: "lg"
}

export default CcAmexIcon;

import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

function CcMastercardIcon({size}) {
  return <FontAwesomeIcon icon={faCcMastercard} size={size} />;
}

CcMastercardIcon.propTypes = {
  size: Proptypes.string,
};

CcMastercardIcon.defaultProps = {
  size: "lg",
};

export default CcMastercardIcon;

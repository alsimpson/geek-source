import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HeartSolid({ size }) {
  return <FontAwesomeIcon icon={faHeart} size={size} />;
}

HeartSolid.propTypes = {
  size: Proptypes.string,
};

HeartSolid.defaultProps = {
  size: "sm",
};

export default HeartSolid;

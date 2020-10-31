import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function HeartOutline({ size }) {
  return <FontAwesomeIcon icon={faHeart} size={size} />;
}

HeartOutline.propTypes = {
  size: Proptypes.string,
};

HeartOutline.defaultProps = {
  size: "sm",
};

export default HeartOutline;

import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

/*adds icon to library for access via icon name */
library.add(faAngleUp, faAngleDown, faAngleLeft, faAngleRight);

function ArrowIcon({direction, size}) {

  return (
    <FontAwesomeIcon icon={'angle-' + direction} size={size} />
  );
}

ArrowIcon.propTypes ={
  direction: PropTypes.string,
  size: PropTypes.string
};

ArrowIcon.defaultProps = {
  direction: "left",
  size: "sm"
};

export default ArrowIcon;

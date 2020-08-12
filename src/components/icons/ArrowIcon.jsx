import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

/*adds icon to library for access via icon name */
library.add(faAngleUp, faAngleDown, faAngleLeft, faAngleRight);

function ArrowIcon(props) {

  return (
    <FontAwesomeIcon icon={'angle-' + props.direction} size='sm' />
  );
}

export default ArrowIcon;

import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

function HeadsetIcon({size}) {
  return (
    <>
      <FontAwesomeIcon icon={faHeadset} size={size}/>
    </>
  );
}

HeadsetIcon.propTypes = {
  size: Proptypes.string,
};

HeadsetIcon.defaultProps = {
  size: "2x",
};

export default HeadsetIcon;

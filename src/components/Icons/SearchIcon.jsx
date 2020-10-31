import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchIcon({size}) {
  return (
    <>
      <FontAwesomeIcon icon={faSearch} size={size}/>
    </>
  );
}

SearchIcon.propTypes = {
  size: Proptypes.string,
};

SearchIcon.defaultProps = {
  size: "sm",
};

export default SearchIcon;

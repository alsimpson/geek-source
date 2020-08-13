import React from 'react';
import PropTypes from "prop-types";
import { StyledMain, StyledStars, StyledText } from "./StarRatingShow.styled";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

/*
  fontawesome library name reference for icon
  faStar = star; faStarHalfAlt = star-half-alt
*/
library.add(faStar, faStarHalfAlt);

/* calculate star types to display */
function getStars(value) {
  const stars =[];
  const [whole, half] = parseFloat(value).toString().split("."); /* split rating at decimal */
  for (let i = 0; i < whole; i++) stars.push('star');  /* add # of whole stars */
  if (half) stars.push('star-half-alt'); /* add a half star */
  return stars;
};

/* function: generate rating text */
function setReviewText(value1, value2) {
  let text = null;
  if (value2) {
    text = value1 + ' (' + value2 + ')'
  }
  return text;
};

/* Rendered component */
function StarRatingShow({Rating, Count}) {
  return (
    <StyledMain>
      <StyledStars>
        {getStars(Rating).map((star, index) => {
          return <FontAwesomeIcon key={index} icon={star} size='xs' />;
        })}
      </StyledStars>
      <StyledText>{setReviewText(Rating, Count)}</StyledText>
    </StyledMain>
  );
}

StarRatingShow.propTypes = {
  Rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StarRatingShow.defaultProps = {
  Rating: null,
  Count: null
};

export default StarRatingShow;

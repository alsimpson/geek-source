import React from 'react';
import { StyledMain } from "./StarRatingShow.styled";
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
}

/* Rendered component */
function StarRatingShow(props) {
  return (
    <StyledMain>
      {getStars(props.Rating).map((star, index) => {
        return (<FontAwesomeIcon key={index} icon={star} size='xs' />);
      })}
    </StyledMain>
  );
}

export default StarRatingShow;

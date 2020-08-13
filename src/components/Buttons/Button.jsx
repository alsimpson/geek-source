import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

function Button({text}) {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: 'BUTTON'
};

export default Button;

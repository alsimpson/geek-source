import React from "react";
import { StyledButton } from "./Button.styled";

function Button(props) {
  return (
    <StyledButton>
      {props.text}
    </StyledButton>
  )
}

export default Button;

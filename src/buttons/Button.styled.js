import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const TheButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 20px;
  padding: 10px 40px;
  margin: 10px 0px;
  border-radius: 25px;
  border-color: ${colors.secondary};
  cursor: pointer;
`;

function Button(props) {
  return (
    <TheButton>
      {props.text}
    </TheButton>
  )
}

export default Button;

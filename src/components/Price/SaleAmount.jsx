import React from "react";
import PropTypes from "prop-types";
import { StyledAmount } from "./SalesAmt.styled";

function SaleAmount({prefix, amount, size, weight, color, suffix}) {
  return (
    <StyledAmount size={size} weight={weight} color={color} >
      {prefix}
      <sup>$</sup>
      {amount}
      {suffix}
    </StyledAmount>
  )
};

SaleAmount.propTypes = {
  prefix: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  suffix: PropTypes.string
};

SaleAmount.defaultProps = {
  prefix: null,
  amount: 0.00,
  size: "10px",
  weight: "bold",
  color: "black",
  suffix: null
};

export default SaleAmount;

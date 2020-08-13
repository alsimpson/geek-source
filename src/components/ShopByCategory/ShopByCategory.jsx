import React from "react";
import PropTypes from "prop-types";
import { StyledMain, StyledLine, StyledListHeader,
         StyledList, StyledListItem } from "./ShopByCategory.styled";

/* TODO add animation to list: see shop by category requirments for details*/

function ShopByCategory({shopCategories}) {
  return (
    <StyledMain>
      <StyledLine />
      <StyledListHeader>Shop by Category</StyledListHeader>
      <StyledList>
        {shopCategories.map((item) => (
          <StyledListItem key={item.id}>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

ShopByCategory.propTypes = {
  shopCategories: PropTypes.array
};

ShopByCategory.defaultProps = {
  shopCategories: []
};

export default ShopByCategory;

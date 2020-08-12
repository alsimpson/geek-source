import React from "react";
import { StyledMain, StyledLine, StyledListHeader,
         StyledList, StyledListItem } from "./ShopByCategory.styled";

/* TODO add animation to list: see shop by category requirments for details*/

function ShopByCategory(props) {
  const categories = props.shopCategories || [];
  return (
    <StyledMain>
      <StyledLine />
      <StyledListHeader>Shop by Category</StyledListHeader>
      <StyledList>
        {categories.map((item) => (
          <StyledListItem key={item.id}>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

export default ShopByCategory;

import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import { StyledMain, StyledLine, StyledListHeader,
         StyledList, StyledListItem } from "./ShopByCategory.styled";

/* TODO add animation to list: see shop by category requirments for details*/

function ShopByCategory() {

  const categoryItems = useContext(CategoryContext);

  return (
    <StyledMain>
      <StyledLine />
      <StyledListHeader>Shop by Category</StyledListHeader>
      <StyledList>
        {categoryItems.map((item) => (
          <StyledListItem key={item.id}>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

export default ShopByCategory;

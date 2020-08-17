import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import {
  StyledMain,
  StyledList,
  StyledListHeader,
  StyledListItem,
} from "./ShopList.styled";

function ShopList() {
  const list = useContext(CategoryContext);
  return (
    <StyledMain>
      <StyledListHeader>SHOP</StyledListHeader>
      <StyledList>
        {list.map((item) => (
          <StyledListItem key={item.id}>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

export default ShopList;

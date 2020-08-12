import React from "react";
import {
  StyledMain,
  StyledList,
  StyledListHeader,
  StyledListItem,
} from "./ShopList.styled";

function ShopList(props) {
  const list = props.list || [];
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

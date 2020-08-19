import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
          <StyledListItem key={item.id}>
            <Link
              to={{
                pathname: "/category",
                state: {
                  urlSearch: "(categoryPath.id=" + item.id + ")",
                  categoryId: item.id,
                },
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.name}
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

export default ShopList;

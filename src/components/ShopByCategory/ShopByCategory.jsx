import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";
import { StyledMain, StyledLine, StyledListHeader, StyledListItem,
         StyledText, StyledList, StyledArrow } from "./ShopByCategory.styled";
import ArrowIcon from "../Icons/ArrowIcon";

function ShopByCategory() {

  const categoryItems = useContext(CategoryContext);

  const [openItem, setOpenItem] = useState(0);
  const [subCategories, setSubCategories] = useState([]);

  const onItemClick = (item) => () => {
    if (item.id === openItem || item.subCategories.length === 0) {
      setOpenItem(0);
      setSubCategories([]);
    } else {
      setOpenItem(item.id);
      setSubCategories(item.subCategories);
    }
  };

  const isOpen = (id) => id === openItem;
  const hasSubCategories = (list) => list.length > 0;

  //------------------------------------------------------------------------------/
  return (
    <StyledMain>
      <StyledLine />
      <StyledListHeader>Shop by Category</StyledListHeader>
      {categoryItems.map((i) => (
        <StyledList key={i.id}>
          <StyledListItem onClick={onItemClick(i)}>
            <StyledText bold={isOpen(i.id)}>
              <Link
                to={{
                  pathname: "/category",
                  state: {
                    urlSearch: "(categoryPath.id=" + i.id + ")",
                    categoryId: i.id,
                  },
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {i.name}
              </Link>
            </StyledText>
            <StyledArrow
              display={hasSubCategories(i.subCategories) ? "block" : "none"}
              rotate={isOpen(i.id) ? "rotate(90deg)" : "none"}
            >
              <ArrowIcon direction='right' />
            </StyledArrow>
          </StyledListItem>
          {isOpen(i.id) && (
            <>
              {subCategories.slice(0, 10).map((s) => (
                <StyledText key={s.id}>
                  <Link
                    to={{
                      pathname: "/category",
                      state: {
                        urlSearch: "(categoryPath.id=" + s.id + ")",
                        categoryId: s.id,
                      },
                    }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {s.name}
                  </Link>
                </StyledText>
              ))}
            </>
          )}
        </StyledList>
      ))}
    </StyledMain>
  );
}

export default ShopByCategory;

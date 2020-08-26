import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";
import ArrowIcon from "../Icons/ArrowIcon";
import { StyledMain,
         StyledDropDownContainer,
         StyledDropDownHeader,
         StyledDropDownHeaderTitle,
         StyledDropDownList,
         StyledListItem,
        } from "./ProductsDropDownList.styled";
import useMouseClick from "../../hooks/useMouseClick";

function ProductsDropDownList() {

  const categoryItems = useContext(CategoryContext);
  const [isOpen, setIsOpen] = useState(false);
  const { innerRef } = useMouseClick(
    () => setIsOpen(!isOpen),  //user clicked on component: toggle list
    () => setIsOpen(false)     //user clicked outside of component: close list
  );

  return (
    <StyledMain ref={innerRef}>
      <StyledDropDownContainer>
        <StyledDropDownHeader>
          <StyledDropDownHeaderTitle>PRODUCTS</StyledDropDownHeaderTitle>
          {isOpen ? (<ArrowIcon direction='up' />) : (<ArrowIcon direction='down' />)}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            {categoryItems.map((item) => (
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
          </StyledDropDownList>
        )}
      </StyledDropDownContainer>
    </StyledMain>
  );
}

export default ProductsDropDownList;

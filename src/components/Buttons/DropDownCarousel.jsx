import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArrowIcon from "../Icons/ArrowIcon";
import { StyledMain,
         StyledDropDownContainer,
         StyledDropDownHeader,
         StyledDropDownHeaderTitle,
         StyledDropDownList,
        } from "./DropDownCarousel.styled";
import useMouseClick from "../../hooks/useMouseClick";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";

function DropDownCarousel({title, listKey}) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { innerRef } = useMouseClick(
    () => setIsOpen(!isOpen), //user clicked on component: toggle list
    () => setIsOpen(false));  //user clicked outside of component: close list

  useEffect(() => {
    const newProducts = JSON.parse(localStorage.getItem(listKey)) || [];
    setProducts(newProducts);
  }, [listKey]);

  return (
    <StyledMain ref={innerRef}>
      <StyledDropDownContainer>
        <StyledDropDownHeader>
          <StyledDropDownHeaderTitle>{title}</StyledDropDownHeaderTitle>
          {isOpen ? (
            <ArrowIcon direction='up' />
          ) : (
            <ArrowIcon direction='down' />
          )}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            <ProductsCarousel
              header={title}
              products={products}
            />
          </StyledDropDownList>
        )}
      </StyledDropDownContainer>
    </StyledMain>
  );
}

DropDownCarousel.propTypes = {
  title: PropTypes.string,
  listKey: PropTypes.string,
};

DropDownCarousel.defaultProps = {
  title: "Text Here",
  listKey: "Items",
};

export default DropDownCarousel;

import React, { useState, useEffect } from "react";
import { globalVars } from "../../constants/globalvars";
import { StyledMain, StyledLine, StyledHeader, StyledCarouselArea,
         StyledProductCard, StyledImage, StyledText, StyledReviewArea,
         StyledPriceArea, StyledSalePrice, StyledNavArea,
         StyledArrow } from "./ProductsCarousel.styled";
import StarRatingShow from "../StarRatingShow/StarRatingShow";
import ShoppingCartAddIcon from "../Icons/ShoppingCartAddIcon";
import ArrowIcon from "../Icons/ArrowIcon";

/* TODO add disable function for left/right arrows when end of list */
/* TODO reduce fields in API call */
/* TODO add navigation to product page when any part of product card clicked*/

function ProductsCarousel(props) {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [hideIndex, setHideIndex] = useState([]);

  useEffect(() => {
    const getProducts = async (param) => {
      const url = "/products((offers.type=" + param + "))?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setError(response.error);
      }
    };
    getProducts(props.type);
  }, [props.type]);

  /* Right Arrow Click */
  const onRightArrowClick = (index) => {
    let indexArray = hideIndex;
    if (index < (products.length - 1)) {
      indexArray.push(index);
      setHideIndex(indexArray);   /* add slide to hide list */
      index++;
      setCurrIndex(index);
    }
  };

  /* Left Arrow Click */
  const onLeftArrowClick = (index) => {
    let indexArray = hideIndex;
    if (index > 0) {
      indexArray.pop(index);
      setHideIndex(indexArray);   /* add slide to hide list */
      index--;
      setCurrIndex(index);
    }
  };

  /* check hide list for product card index */
  const setInvisible = (index) => {
    return hideIndex.includes(index);
  };

  /*--- Render Carousel ---*/
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <StyledMain>
        <StyledLine />
        <StyledHeader>{props.header}</StyledHeader>
        <StyledCarouselArea>
          {products.map((p, index) => (
            <StyledProductCard
              key={index}
              display={setInvisible(index) ? "none" : "flex"}
            >
              <StyledImage src={p.mediumImage} alt='product' />
              <StyledText>{p.name}</StyledText>
              <StyledReviewArea>
                <StarRatingShow
                  Rating={p.customerReviewAverage}
                  Count={p.customerReviewCount}
                />
              </StyledReviewArea>
              <StyledPriceArea>
                <StyledSalePrice>&#36;{p.salePrice}</StyledSalePrice>
                <ShoppingCartAddIcon />
              </StyledPriceArea>
            </StyledProductCard>
          ))}
        </StyledCarouselArea>
        <StyledNavArea>
          <StyledArrow onClick={() => onRightArrowClick(currIndex)}>
            <ArrowIcon direction='right' />
          </StyledArrow>
          <StyledArrow onClick={() => onLeftArrowClick(currIndex)}>
            <ArrowIcon direction='left' />
          </StyledArrow>
        </StyledNavArea>
      </StyledMain>
    );
  }
}

export default ProductsCarousel;

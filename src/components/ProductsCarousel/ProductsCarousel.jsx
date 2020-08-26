import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { colors } from "../../constants/colors";
import { isOnSale } from "../../helpers/isOnSale";
import { StyledMain, StyledLine, StyledHeader, StyledCarouselArea,
         StyledProductCard, StyledImage, StyledText, StyledReviewArea,
         StyledPriceArea, StyledSalePrice, StyledNavArea,
         StyledArrow } from "./ProductsCarousel.styled";
import StarRatingShow from "../StarRatingShow/StarRatingShow";
import ShoppingCartAddIcon from "../Icons/ShoppingCartAddIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import SaleAmount from "../../components/Price/SaleAmount";

/* TODO improve styling of product card */

function ProductsCarousel({header, products}) {

    const maxIndex = (products.length - 1);
    const [currIndex, setCurrIndex] = useState(0);
    const [hideIndex, setHideIndex] = useState([]);

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
  return (
    <StyledMain>
      <StyledLine />
      <StyledHeader>{header}</StyledHeader>
      <StyledCarouselArea>
        {(products.length <= 0) && <StyledText>No product data found.</StyledText>}
        {products.map((p, index) => (
          <StyledProductCard
            key={index}
            display={setInvisible(index) ? "none" : "flex"}
          >
            <Link
              to={{
                pathname: "/product",
                state: { product: p },
              }}
              style={{ textDecoration: "none" }}
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
                <StyledSalePrice>
                  <SaleAmount
                    amount={p.salePrice}
                    size='12px'
                    weight='bold'
                    color='black'
                  />
                  {isOnSale(p.regularPrice, p.salePrice) && (
                    <SaleAmount
                      amount={<strike>{p.regularPrice}</strike>}
                      size='12px'
                      color={colors.grey}
                      weight='none'
                    />
                  )}
                </StyledSalePrice>
                <ShoppingCartAddIcon />
              </StyledPriceArea>
            </Link>
          </StyledProductCard>
        ))}
      </StyledCarouselArea>
      <StyledNavArea>
        <StyledArrow
          disabled={currIndex === 0}
          onClick={() => onLeftArrowClick(currIndex)}
        >
          <ArrowIcon direction='left' size='lg' />
        </StyledArrow>
        <StyledArrow
          disabled={currIndex === maxIndex}
          onClick={() => onRightArrowClick(currIndex)}
        >
          <ArrowIcon direction='right' size='lg' />
        </StyledArrow>
      </StyledNavArea>
    </StyledMain>
  );
}

ProductsCarousel.propTypes = {
  header: PropTypes.string,
  products: PropTypes.array,
};

ProductsCarousel.defaultProps = {
  header: "Text Here",
  products: [],
};

export default ProductsCarousel;

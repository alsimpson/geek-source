import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { colors } from "../../constants/colors";
import { globalVars } from "../../constants/globalvars";
import { isOnSale } from "../../helpers/isOnSale";
import { getSavingsAmt } from "../../helpers/getSavingsAmt";
import { StyledMain, StyledImage, StyledTextSection, StyledText,
         StyledReviewArea, StyledPriceArea, StyledSalePrice,
         StyledSaveAmt, StyledSaveItem } from "./ProductDetail.styled";
import StarRatingShow from "../StarRatingShow/StarRatingShow";
import Button from "../Buttons/Button";
import SaleAmount from "../Price/SaleAmount";
import HeartOutline from "../Icons/HeartOutline";
import HeartSolid from "../Icons/HeartSolid";

/*TODO add animation for additional image carousel */
/*TODO implement add to cart functionality */

function ProductDetail({product}) {

  const [savedItems, setSavedItems] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const newSavedItems = JSON.parse(localStorage.getItem(globalVars.keySavedItems)) || [];
    const isExisting = newSavedItems.find(({ sku }) => sku === product.sku);
    if (isExisting !== undefined) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
    setSavedItems(newSavedItems);
  }, [product]);

  const handleSaveItem = () => {
    if (!isSaved) {
      savedItems.unshift(product);
    } else {
      const pos = savedItems.findIndex(({ sku }) => sku === product.sku);
      savedItems.splice(pos, 1);
    }
    localStorage.setItem(
      globalVars.keySavedItems,
      JSON.stringify(savedItems)
    );
    setSavedItems(savedItems);
    setIsSaved(!isSaved);
  };

  return (
    <StyledMain>
      <StyledImage src={product.largeImage} alt='product' />
      <StyledTextSection>
        <StyledText size='18px' color='black' weight='bold'>
          {product.name}
        </StyledText>
        <StyledText size='12px' color='black' weight='bold'>
          Model:{product.modelNumber} &nbsp; SKU:{product.sku}
        </StyledText>
        <StyledReviewArea>
          <StarRatingShow
            Rating={product.customerReviewAverage}
            Count={product.customerReviewCount}
          />
        </StyledReviewArea>
        <StyledText size='14px' color='black' weight='none'>
          {product.longDescription}
        </StyledText>
        <StyledPriceArea>
          <StyledSalePrice>
            <SaleAmount
              amount={product.salePrice}
              size='50px'
              color={colors.secondary}
            />
            {isOnSale(product.regularPrice, product.salePrice) && (
              <StyledSaveAmt>
                <SaleAmount
                  prefix='save '
                  amount={getSavingsAmt(
                    product.regularPrice,
                    product.salePrice
                  )}
                  size='15px'
                  weight='bold'
                />
                <SaleAmount
                  prefix='&nbsp; was '
                  amount={product.regularPrice}
                  size='15px'
                  color={colors.grey}
                  weight='none'
                />
              </StyledSaveAmt>
            )}
          </StyledSalePrice>
          <Button text='ADD TO CART' />
        </StyledPriceArea>
        <StyledSaveItem disabled={isSaved} onClick={handleSaveItem}>
          {isSaved ? <HeartSolid /> : <HeartOutline />}
          {isSaved ? (
            <StyledText size='12px' color='black' weight='bold'>
              &nbsp; item saved
            </StyledText>
          ) : (
            <StyledText size='12px' color='black' weight='bold'>
              &nbsp; save item
            </StyledText>
          )}
        </StyledSaveItem>
      </StyledTextSection>
    </StyledMain>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object
};

ProductDetail.defaultProps = {
  product: {}
}

export default ProductDetail;

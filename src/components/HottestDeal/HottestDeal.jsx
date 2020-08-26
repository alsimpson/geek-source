import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
import { isOnSale } from "../../helpers/isOnSale";
import { getSavingsAmt } from "../../helpers/getSavingsAmt";
import { StyledMain, StyledLine, StyledHeader, StyledProductCard, StyledImage,
         StyledText, StyledReviewArea, StyledPriceArea, StyledSaveAmt,
         StyledButtonArea, StyledShopAllText } from "./HottestDeal.styled";
import Button from "../Buttons/Button";
import StarRatingShow from "../StarRatingShow/StarRatingShow";
import SaleAmount from "../Price/SaleAmount";

//--------------------------------------------------------------------
function HottestDeal() {

  const products = useContext(ProductsContext);
  const hotDeal = products.hottestDeal.products[0] || [];

  //-----------------------------------------------------------------------
  return (
    <StyledMain>
      <StyledLine />
      <StyledHeader>Hottest Deal</StyledHeader>
      {hotDeal.length <= 0 && <StyledText>No product data found.</StyledText>}
      <StyledProductCard>
        <StyledImage src={hotDeal.largeImage} alt='hottest deal' />
        <StyledText>{hotDeal.name}</StyledText>
        <StyledReviewArea>
          <StarRatingShow
            Rating={hotDeal.customerReviewAverage}
            Count={hotDeal.customerReviewCount}
          />
        </StyledReviewArea>
        <StyledPriceArea>
          <SaleAmount amount={hotDeal.salePrice} size='50px' color='current' />
          {isOnSale(hotDeal.regularPrice, hotDeal.salePrice) && (
            <StyledSaveAmt>
              <SaleAmount
                prefix='save '
                amount={getSavingsAmt(hotDeal.regularPrice, hotDeal.salePrice)}
                size='15px'
                weight='bold'
              />
              <SaleAmount
                prefix='was '
                amount={hotDeal.regularPrice}
                size='15px'
                color={colors.grey}
                weight='none'
              />
            </StyledSaveAmt>
          )}
        </StyledPriceArea>
        <StyledButtonArea>
          <Link
            to={{
              pathname: "/product",
              state: { product: hotDeal },
            }}
          >
            <Button text='BUY NOW' />
          </Link>
          <Link
            to={{
              pathname: "/category",
              state: {
                urlSearch: "(offers.type=deal_of_the_day)",
                categoryId: "Hottest Deals",
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <StyledShopAllText>shop all deals</StyledShopAllText>
          </Link>
        </StyledButtonArea>
      </StyledProductCard>
    </StyledMain>
  );
}

export default HottestDeal;

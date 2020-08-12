import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { globalVars } from "../../constants/globalvars";
import { StyledMain, StyledLine, StyledHeader, StyledProductCard, StyledImage,
         StyledText, StyledReviewArea, StyledPriceArea, StyledSalePrice,
         StyledRegPrice, StyledSaveAmt, StyledButtonArea,
         StyledShopAllText } from "./HottestDeal.styled";
import Button from "../Buttons/Button";
import StarRatingShow from "../StarRatingShow/StarRatingShow";

/* TODO add navigation to product page to buy now button */
/* TODO add navigation to category page to shop all deals */

//--------------------------------------------------------------------
function HottestDeal() {
  const [hotDeal, setHotDeal] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotDeal = async () => {
      const url = "/products((offers.type=deal_of_the_day))?format=json&apiKey=" +
                  globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setHotDeal(data.products[0]);
      } else {
        setError(response.error);
      }
    };
    getHotDeal()
  }, []);

  const getSavingsAmt = (amt1, amt2) => {
    return Number.parseFloat(amt1 - amt2).toFixed(2);
  };

  //-----------------------------------------------------------------------
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <StyledMain>
        <StyledLine />
        <StyledHeader>Hottest Deal</StyledHeader>
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
            <StyledSalePrice>$ {hotDeal.salePrice}</StyledSalePrice>
            <StyledRegPrice>
              <StyledSaveAmt>
                save ${getSavingsAmt(hotDeal.regularPrice, hotDeal.salePrice)}
              </StyledSaveAmt>
              was $ {hotDeal.regularPrice}
            </StyledRegPrice>
          </StyledPriceArea>
          <StyledButtonArea>
            <Button text='BUY NOW' />
            <Link
              to={{
                pathname: "/category",
                state: {
                  urlSearch: "offers.type=deal_of_the_day",
                  categoryId: "Hottest Deals",
                },
              }}
            >
              <StyledShopAllText>shop all deals</StyledShopAllText>
            </Link>
          </StyledButtonArea>
        </StyledProductCard>
      </StyledMain>
    );
  }
}

export default HottestDeal;

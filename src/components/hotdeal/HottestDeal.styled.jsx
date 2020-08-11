import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { globalVars } from "../../constants/globalvars";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";
import StyledButton from "../buttons/Button.styled";
import StarRatingShow from "../starratingshow/StarRatingShow.styled";

/* TODO add navigation to product page to buy now button */
/* TODO add navigation to category page to shop all deals */

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.mainGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;
const Line = styled.hr`
  width: 50px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const Image = styled.img`
  margin: ${gutters.noGutter};
  padding: ${gutters.halfGutter};
  object-fit: contain;
  object-position: center;
  &:hover {
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
`;
const ReviewText = styled.div`
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
  margin: 1% 0 0 2%
`;
const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
const SalePrice = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-right: ${gutters.halfGutter};
`;
const RegPrice = styled.div`
  color: ${colors.grey};
  font-size: 15px;
`;
const SaveAmt = styled.div`
  color: black;
  font-weight: bold;
  margin-top: 20%;
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const ShopAllText = styled.div`
  color: black;
  font-weight: bold;
  margin: ${gutters.noGutter};
  margin-left: ${gutters.quarterGutter};
  &:hover {cursor: pointer}
`;

//--------------------------------------------------------------------
function StyledHottestDeal() {
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
    //const savePrice = Number.parseFloat((hotDeal.regularPrice - hotDeal.salePrice)).toFixed(2);
    return (
      <Main>
        <Line />
        <Header>Hottest Deal</Header>
        <Image src={hotDeal.largeImage} alt='hottest deal' />
        <Text>{hotDeal.name}</Text>
        <ReviewArea>
          <StarRatingShow Rating={hotDeal.customerReviewAverage} />
          <ReviewText>
            {hotDeal.customerReviewAverage}({hotDeal.customerReviewCount})
          </ReviewText>
        </ReviewArea>
        <PriceArea>
          <SalePrice>$ {hotDeal.salePrice}</SalePrice>
          <RegPrice>
            <SaveAmt>
              save $
              {getSavingsAmt(hotDeal.regularPrice,hotDeal.salePrice)}
            </SaveAmt>
            was $ {hotDeal.regularPrice}
          </RegPrice>
        </PriceArea>
        <ButtonArea>
          <StyledButton text='BUY NOW' />
          <Link
            to={{
              pathname: "/category",
              state: {
                urlSearch: "offers.type=deal_of_the_day",
                categoryId: "Hottest Deals",
              },
            }}
          >
            <ShopAllText>shop all deals</ShopAllText>
          </Link>
        </ButtonArea>
      </Main>
    );
  }
}

export default StyledHottestDeal;

import React, { useState, useEffect } from "react";
import { globalVars } from "../../constants/globalvars";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";
import StyledButton from "../buttons/Button.styled";
import StarRatingShow from "../starratingshow/StarRatingShow.styled";

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
`;

function StyledHottestDeal() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotDeal, setHotDeal] = useState([]);

  useEffect(() => {
    if (!isLoaded) {
      getHotDeal()  /*TODO refactor based Wes' suggestion */
    };
  }, [isLoaded]);

/* TODO move outside to separate service help module */
  const getHotDeal = async () => {
    try {
      const url =
        "/products((offers.type=deal_of_the_day))?format=json&apiKey=" +
        globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsLoaded(true);
        setHotDeal(data.products[0]);
      } else {
        setIsLoaded(true);
        setError(response.error);
      }
    } catch (e) {
      setIsLoaded(true);
      setError(e);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const savePrice = Number.parseFloat((hotDeal.regularPrice - hotDeal.salePrice)).toFixed(2);
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
          <SalePrice>&#36;{hotDeal.salePrice}</SalePrice>
          <RegPrice>
            <SaveAmt>save &#36;{savePrice}</SaveAmt>
            was &#36;{hotDeal.regularPrice}
          </RegPrice>
        </PriceArea>
        <ButtonArea>
          <StyledButton text='BUY NOW' />
          <ShopAllText>shop all deals</ShopAllText>
        </ButtonArea>
      </Main>
    );
  }
}

export default StyledHottestDeal;

import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import styled from "styled-components";
import StyledHeader from "../components/header/Header.styled";
import StyledHeroImage from "../components/heroimage/HeroImage.styled";
import StyledProductsCarousel from "../components/productscarousel/ProductsCarousel.styled";
import StyledHottestDeal from "../components/hotdeal/HottestDeal.styled";
import StyledShopByCategory from "../components/shopbycategory/ShopByCategory.styled";
import StyledFooter from "../components/footer/Footer.styled";

const HotDealArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5% auto;
  padding: 0;
`;

function Homepage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    if (!isLoaded) {
      getCategories() /*TODO refactor based on Wes' recommendation*/
    };
  }, [isLoaded]);

  /* TODO move Bestbuy Categories API to service helper */
  const getCategories = async () => {
    try {
      const url = "/categories?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsLoaded(true);
        setCategoryItems(data.categories);
      } else {
        setIsLoaded(true);
        setError(response.error);
      }
    } catch (e) {
        setIsLoaded(true);
        setError(e);
    }
  }

  /* TODO refactor IconArea components to single component */

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <StyledHeader products={categoryItems} />
        <StyledHeroImage />
        <StyledProductsCarousel header='Featured Products' type='special_offer' />
        <StyledProductsCarousel header="Today's Deals" type='digital_insert' />
        <HotDealArea>
          <StyledHottestDeal />
          <StyledShopByCategory shopCategories={categoryItems} />
        </HotDealArea>
        <StyledFooter shopCategories={categoryItems} />
      </>
    );
  }
}

export default Homepage;

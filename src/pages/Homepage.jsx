import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import { gutters } from "../constants/gutters";
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
  margin: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
`;

function Homepage() {
  const [categoryItems, setCategoryItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const url = "/categories?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCategoryItems(data.categories);
      } else {
        setError(response.error);
      }
    }
    getCategories();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <StyledHeader products={categoryItems} />
        <StyledHeroImage />
        <StyledProductsCarousel
          header='Featured Products'
          type='special_offer'
        />
        <StyledProductsCarousel
          header="Today's Deals"
          type='digital_insert'
        />
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

import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import styled from "styled-components";
import Header from "../header/Header.styled";
import HeroImage from "../heroimage/HeroImage.styled";
import ProductsCarousel from "../productscarousel/ProductsCarousel.styled";
import FastShipping from "../fastshipping/FastShipping";
import Financing from "../finance/Financing";
import TechSupport from "../techsupport/TechSupport";
import HottestDeal from "../hotdeal/HottestDeal.styled";
import ShopByCategory from "../shopbycat/ShopByCategory.styled";
import Footer from "../footer/Footer.styled";

const IconArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 5% 0 5%;
`;
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCategories();
  }, [isLoaded]);

  const getCategories = async () => {
    try {
      const url = "/categories?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsLoaded(true);
        setItems(data.categories);
      } else {
        setIsLoaded(true);
        setError(response.error);
      }
    } catch (e) {
        setIsLoaded(true);
        setError(e);
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header list={items} />
        <HeroImage />
        <IconArea>
          <FastShipping />
          <Financing />
          <TechSupport />
        </IconArea>
        <ProductsCarousel header="Featured Products" type="special_offer" />
        <ProductsCarousel header="Today's Deals" type="digital_insert" />
        <HotDealArea>
          <HottestDeal />
          <ShopByCategory list={items} />
        </HotDealArea>
        <Footer list={items} />
      </>
    );
  }
}

export default Homepage;

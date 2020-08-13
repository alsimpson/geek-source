import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import { StyledHotDealArea } from "./Homepage.styled";
import Header from "../components/Header/Header";
import HeroImage from "../components/HeroImage/HeroImage";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import HottestDeal from "../components/HottestDeal/HottestDeal";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Footer from "../components/Footer/Footer";

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
        <Header products={categoryItems} />
        <HeroImage />
        <ProductsCarousel
          header='Featured Products'
          query='offers.type=special_offer'
        />
        <ProductsCarousel
          header="Today's Deals"
          query='offers.type=digital_insert'
        />
        <StyledHotDealArea>
          <HottestDeal />
          <ShopByCategory shopCategories={categoryItems} />
        </StyledHotDealArea>
        <Footer shopCategories={categoryItems} />
      </>
    );
  }
}

export default Homepage;

import React from "react";
import { StyledHotDealArea } from "./Homepage.styled";
import Header from "../components/Header/Header";
import HeroImage from "../components/HeroImage/HeroImage";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import HottestDeal from "../components/HottestDeal/HottestDeal";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Footer from "../components/Footer/Footer";

function Homepage() {

  return (
    <>
      <Header />
      <HeroImage />
      <ProductsCarousel
        header='Featured Products'
        query='(offers.type=special_offer)'
      />
      <ProductsCarousel
        header="Today's Deals"
        query='(offers.type=digital_insert)'
      />
      <StyledHotDealArea>
        <HottestDeal />
        <ShopByCategory />
      </StyledHotDealArea>
      <Footer />
    </>
  );
}

export default Homepage;

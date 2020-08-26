import React, { useContext } from "react";
import { ProductsContext } from "../App";
import { StyledHotDealArea } from "./Homepage.styled";
import Header from "../components/Header/Header";
import HeroImage from "../components/HeroImage/HeroImage";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import HottestDeal from "../components/HottestDeal/HottestDeal";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Footer from "../components/Footer/Footer";

function Homepage() {

  const products = useContext(ProductsContext);

  return (
    <>
      <Header />
      <HeroImage />
      <ProductsCarousel
        header='Featured Products'
        products={products.featured.products}
      />
      <ProductsCarousel
        header="Today's Deals"
        products={products.todaysDeal.products}
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

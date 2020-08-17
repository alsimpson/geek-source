import React from "react";
import Header from "../components/Header/Header";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import Footer from "../components/Footer/Footer";

/*TODO add product details component */

function ProductPage(props) {

  const product = props.location.state.product;
  const pquery = '(classId=' + product.classId +')';

  return (
    <>
      <Header />
      <TriadIcons />
      <ProductsCarousel header='Similar Products' query={pquery} />
      <ProductsCarousel header='Recently Viewed Items' />
      <Footer />
    </>
  );
};

export default ProductPage;



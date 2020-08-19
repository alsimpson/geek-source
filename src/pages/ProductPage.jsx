import React from "react";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Product/ProductDetail";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import Footer from "../components/Footer/Footer";

/* props passed page link */
function ProductPage(props) {

  const product = props.location.state.product;
  const pquery = '(classId=' + product.classId +')';

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <TriadIcons />
      <ProductsCarousel header='Similar Products' query={pquery} />
      <ProductsCarousel header='Recently Viewed Items' />
      <Footer />
    </>
  );
};

export default ProductPage;



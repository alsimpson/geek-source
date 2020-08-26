import React from "react";
import PropTypes from "prop-types";
import { useGetProduct } from "../hooks/useGetProduct";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Product/ProductDetail";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import Footer from "../components/Footer/Footer";

/* props passed page link */
function ProductPage({location: {state: {product}}}) {

  const query = '(classId=' + product.classId +')';
  const similarProducts = useGetProduct(query);

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <TriadIcons />
      <ProductsCarousel header='Similar Products' products={similarProducts.products} />
      <ProductsCarousel header='Recently Viewed Items' />
      <Footer />
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.array,
};

ProductPage.defaultProps = {
  product: [],
};

export default ProductPage;



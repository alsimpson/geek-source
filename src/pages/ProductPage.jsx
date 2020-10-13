import React  from "react";
import PropTypes from "prop-types";
import { globalVars } from "../constants/globalvars";
import { useGetProduct } from "../hooks/useGetProduct";
import { useProductLocalStore } from "../hooks/useProductLocalStore";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Product/ProductDetail";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import Footer from "../components/Footer/Footer";

/* props passed page link */
function ProductPage({location: {state: {product}}}) {

  const query = "(classId=" + product.classId + ")";
  const similarProducts = useGetProduct(query);
  const recentlyViewed = useProductLocalStore(globalVars.keyRecentlyViewed, product);

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <TriadIcons />
      <ProductsCarousel
        header='Similar Products'
        products={similarProducts.products}
      />
      <ProductsCarousel
        header='Recently Viewed Items'
        products={recentlyViewed.dataStore}
      />
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



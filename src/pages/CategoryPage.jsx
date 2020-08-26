import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CategoryContext } from "../App";
import { useGetProduct } from "../hooks/useGetProduct";
import { getCategoryName } from "../helpers/getCategoryName";
import { colors } from "../constants/colors";
import { isOnSale } from "../helpers/isOnSale";
import { getSavingsAmt } from "../helpers/getSavingsAmt";
import { StyledHeader, StyledHeaderText, StyledLine, StyledImage, StyledTextSection,
         StyledText, StyledCategorySection, StyledCategoryListSection, StyledCategoryList,
         StyledProductCard, StyledReviewArea, StyledPriceArea, StyledSalePrice,
         StyledSaveAmt } from "./CategoryPage.styled";
import Header from "../components/Header/Header";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import Footer from "../components/Footer/Footer";
import StarRatingShow from "../components/StarRatingShow/StarRatingShow";
import Button from "../components/Buttons/Button";
import SaleAmount from "../components/Price/SaleAmount";

/*TODO add scrolling to product list & lazy load */

// --------------------------------------------------------------------
function CategoryPage({location: {state: {urlSearch, categoryId}}}) {

  const productHook = useGetProduct(urlSearch);
  const error = productHook.error || null;
  const products = productHook.products || [];

  const categoryItems = useContext(CategoryContext);
  const categoryName = getCategoryName(categoryItems, categoryId);

  //---------------------------------------------------------------------
  return (
    <>
      <Header />
      <StyledCategorySection>
        <ShopByCategory />
        <StyledCategoryListSection>
          {error && <StyledText>Something went wrong: {error}</StyledText>}
          <StyledHeader>
            <StyledLine />
            <StyledHeaderText>{categoryName}</StyledHeaderText>
          </StyledHeader>
          <StyledCategoryList>
            {products.length <= 0 && (
              <StyledText size='12px' color='black'>
                No Products found for category
              </StyledText>
            )}
            {products.map((p, index) => (
              <StyledProductCard key={index}>
                <StyledImage src={p.mediumImage} alt='product' />
                <StyledTextSection>
                  <StyledText size='18px' color='black' weight='bold'>
                    {p.name}
                  </StyledText>
                  <StyledText size='12px' color='black' weight='bold'>
                    Model:{p.modelNumber} &nbsp; SKU:{p.sku}
                  </StyledText>
                  <StyledReviewArea>
                    <StarRatingShow
                      Rating={p.customerReviewAverage}
                      Count={p.customerReviewCount}
                    />
                  </StyledReviewArea>
                  <StyledPriceArea>
                    <StyledSalePrice>
                      <SaleAmount
                        amount={p.salePrice}
                        size='50px'
                        color={colors.secondary}
                      />
                      {isOnSale(p.regularPrice, p.salePrice) && (
                        <StyledSaveAmt>
                          <SaleAmount
                            prefix='save '
                            amount={getSavingsAmt(p.regularPrice, p.salePrice)}
                            size='15px'
                            weight='bold'
                          />
                          <SaleAmount
                            prefix='&nbsp; was '
                            amount={p.regularPrice}
                            size='15px'
                            color={colors.grey}
                            weight='none'
                          />
                        </StyledSaveAmt>
                      )}
                    </StyledSalePrice>
                    <Button text='ADD TO CART' />
                  </StyledPriceArea>
                </StyledTextSection>
              </StyledProductCard>
            ))}
          </StyledCategoryList>
        </StyledCategoryListSection>
      </StyledCategorySection>
      <TriadIcons />
      <Footer />
    </>
  );
}

CategoryPage.propTypes = {
  urlSearch: PropTypes.string,
  categoryId: PropTypes.string,
};

CategoryPage.defaultProps = {
  urlSearch: "(categoryPath.id=cat00000)",
  categoryId: "cat00000",
};

export default CategoryPage;

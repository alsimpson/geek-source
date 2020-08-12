import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import { colors } from "../constants/colors";
import { StyledHeader, StyledHeaderText, StyledLine, StyledImage, StyledTextSection,
         StyledText, StyledCategorySection, StyledCategoryListSection, StyledCategoryList,
         StyledProductCard, StyledReviewArea, StyledReviewText,
         StyledPriceArea, StyledSalePrice, StyledSaveAmt } from "./CategoryPage.styled";
import Header from "../components/Header/Header";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import TriadIcons from "../components/TriadIcons/TriadIcons";
import Footer from "../components/Footer/Footer";
import StarRatingShow from "../components/StarRatingShow/StarRatingShow";
import Button from "../components/Buttons/Button";

// --------------------------------------------------------------------
function CategoryPage(props) {
  const categoryId = props.location.state.categoryId || "cat00000";
  const urlSearch = props.location.state.urlSearch || "categoryPath.id=cat00000";
  const [categoryName, setCategoryName] = useState("Category Name");
  const [products, setProducts] = useState([]);

  /*TODO replace category api call with state parameters*/
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
    };
    getCategories();
  }, []);

  /* get products list for category */
  useEffect(() => {
    const getProducts = async (urlSearch) => {
      const url ="/products((" + urlSearch + "))?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
        setCategoryName(getCategoryName(data.products, categoryId));
      } else {
        setError(response.error);
      }
    };
    getProducts(urlSearch);
  },[urlSearch, categoryId]);

  /* function: get category name from products */
  const getCategoryName = (p, id) => {
    let categories = [];
    let name = id;
    if (p.length > 0) {
      categories = p[0].categoryPath;
      for (var i=0;i<categories.length;i++){
        if (categories[i].id === id) {
          name = categories[i].name
        }
      }
    }
    return name;
  };

  /* function: deterime if item is on sale */
  const isOnSale = (amt1, amt2) => {
    if (amt1 > amt2) { return true } else {return false};
  };
  /* function: calculate savings amount */
  const getSavingsAmt = (amt1, amt2) => {
    return Number.parseFloat((amt1 - amt2)).toFixed(2);
  };

  //---------------------------------------------------------------------
  return (
    <>
      <Header products={categoryItems} />
      <StyledCategorySection>
        <ShopByCategory shopCategories={categoryItems} />
        <StyledCategoryListSection>
          {error && <div>Something went wrong:{error.message}</div>}
          <StyledHeader>
            <StyledLine />
            <StyledHeaderText>{categoryName}</StyledHeaderText>
          </StyledHeader>
          <StyledCategoryList>
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
                    <StarRatingShow Rating={p.customerReviewAverage} />
                    <StyledReviewText>
                      {p.customerReviewAverage}({p.customerReviewCount})
                    </StyledReviewText>
                  </StyledReviewArea>
                  <StyledPriceArea>
                    <StyledSalePrice>
                      <StyledText
                        size='50px'
                        color={colors.secondary}
                        weight='bold'
                      >
                        $ {p.salePrice}
                      </StyledText>
                      {isOnSale(p.regularPrice, p.salePrice) && (
                        <StyledSaveAmt>
                          <StyledText size='15px' color='black' weight='bold'>
                            save $ {getSavingsAmt(p.regularPrice, p.salePrice)}
                          </StyledText>
                          <StyledText color={colors.grey}>
                            &nbsp; was $ {p.regularPrice}
                          </StyledText>
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
      <Footer shopCategories={categoryItems} />
    </>
  );
}

export default CategoryPage;

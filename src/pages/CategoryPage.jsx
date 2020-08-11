import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import { gutters } from "../constants/gutters";
import { colors } from "../constants/colors";
import styled from "styled-components";
import StyledHeader from "../components/header/Header.styled";
import StyledShopByCategory from "../components/shopbycategory/ShopByCategory.styled";
import StyledTriadIcons from "../components/triadicons/TriadIcons.styled";
import StyledFooter from "../components/footer/Footer.styled";
import StarRatingShow from "../components/starratingshow/StarRatingShow.styled";
import StyledButton from "../components/buttons/Button.styled";

const CategorySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
`;
const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin: ${gutters.noGutter};
  padding: ${gutters.mainGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;
const Line = styled.hr`
  width: 50px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  padding-top: ${gutters.quarterGutter};
  max-width: 600px;
  min-width: 600px;
  border-top: 1px solid ${colors.grey};
`;
const Image = styled.img`
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter};
  object-fit: contain;
  object-position: left top;
  &:hover {
    transform: scale(1.1);
  }
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.noGutter};
  margin-left: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
`;
const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: ${colors.secondary};
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
`;
const ReviewText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  margin-left: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
`;
const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 450px;
`;
const SalePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const SaveAmt = styled.div`
  display: flex;
  flex-direction: row;
`;

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

  /* get category name from products */
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

  const isOnSale = (amt1, amt2) => {
    if (amt1 > amt2) { return true } else {return false};
  };
  const getSavingsAmt = (amt1, amt2) => {
    return Number.parseFloat((amt1 - amt2)).toFixed(2);
  };

  //---------------------------------------------------------------------
  return (
    <>
      <StyledHeader products={categoryItems} />
      <CategorySection>
        <StyledShopByCategory shopCategories={categoryItems} />
        <CategoryList>
          {error && <div>Something went wrong:{error.message}</div>}
          <Line />
          <Header>{categoryName}</Header>
          {products.map((p, index) => (
            <ProductCard key={index}>
              <Image src={p.mediumImage} alt='product' />
              <TextSection>
                <Text size='18px' color='black' weight='bold'>
                  {p.name}
                </Text>
                <Text size='12px' color='black' weight='bold'>
                  Model:{p.modelNumber} &nbsp; SKU:{p.sku}
                </Text>
                <ReviewArea>
                  <StarRatingShow Rating={p.customerReviewAverage} />
                  <ReviewText>
                    {p.customerReviewAverage}({p.customerReviewCount})
                  </ReviewText>
                </ReviewArea>
                <PriceArea>
                  <SalePrice>
                    <Text size='50px' color={colors.secondary} weight='bold'>
                      $ {p.salePrice}
                    </Text>
                    { isOnSale(p.regularPrice, p.salePrice) &&
                      <SaveAmt>
                        <Text size='15px' color='black' weight='bold'>
                          save $ {getSavingsAmt(p.regularPrice, p.salePrice)}
                        </Text>
                        <Text color={colors.grey}>
                          &nbsp; was $ {p.regularPrice}
                        </Text>
                      </SaveAmt>
                    }
                  </SalePrice>
                  <StyledButton text="ADD TO CART" />
                </PriceArea>
              </TextSection>
            </ProductCard>
          ))}
        </CategoryList>
      </CategorySection>
      <StyledTriadIcons />
      <StyledFooter shopCategories={categoryItems} />
    </>
  );
}

export default CategoryPage;

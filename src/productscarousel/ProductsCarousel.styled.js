import React, { useState, useEffect } from "react";
import { globalVars } from "../constants/globalvars";
import { colors } from "../constants/colors";
import styled from "styled-components";
import StarRatingShow from "../starrating/StarRatingShow.styled";
import ShoppingCartAddIcon from "../icons/ShoppingCartAddIcon";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 5% 0 5%;
  padding: 1%;
`;
const Line = styled.hr`
  width: 50px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.secondary};
  margin: 0;
  padding: 0;
`;
const Header = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
  margin: 0;
  padding: 0;
`;
const CarouselArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 1% 0 0 0;
  padding: 0;
  background-color: ${colors.white};
`;
const ProductView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: .5%;
  padding: .5%;
  border: 0.5px solid red;
`;
const Image = styled.img`
  margin: 0;
  padding: .5%;
  object-position: center;
  object-fit: scale-down;
`;
const Text = styled.div`
  color: black;
  font-size: 10px;
  margin: 0;
  padding: 0;
`;
const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.secondary};
`;
const ReviewText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: 1% 0 0 2%
`;
const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: black;
`;
const SalePrice = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-right: 2%;
`;

function ProductsCarousel(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getFeatureProducts(props.type);
  }, [isLoaded, props.type]);

  const getFeatureProducts = async (param) => {
    try {
      const url =
        "/products((offers.type=" + param + "))?format=json&apiKey=" +
        globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setIsLoaded(true);
        setProducts(data.products);
      } else {
        setIsLoaded(true);
        setError(response.error);
      }
    } catch (e) {
      setIsLoaded(true);
      setError(e);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Main>
        <Line />
        <Header>{props.header}</Header>
        <CarouselArea>
          {products.map((p, index) => {
            return (
              <ProductView key={index}>
                <Image src={p.thumbnailImage} alt='product' />
                <Text>{p.name}</Text>
                <ReviewArea>
                  <StarRatingShow Rating={p.customerReviewAverage} />
                  <ReviewText>
                    {p.customerReviewAverage}({p.customerReviewCount})
                  </ReviewText>
                </ReviewArea>
                <PriceArea>
                  <SalePrice>${p.salePrice}</SalePrice>
                  <ShoppingCartAddIcon />
                </PriceArea>
              </ProductView>
            );
          })}
        </CarouselArea>
      </Main>
    );
  }
}

export default ProductsCarousel;

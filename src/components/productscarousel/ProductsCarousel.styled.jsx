import React, { useState, useEffect } from "react";
import { globalVars } from "../../constants/globalvars";
import { colors } from "../../constants/colors";
import styled from "styled-components";
import StarRatingShow from "../../starrating/StarRatingShow.styled";
import ShoppingCartAddIcon from "../icons/ShoppingCartAddIcon";
import ArrowIcon from "../icons/ArrowIcon";

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
  overflow: hidden;
  margin: 1% 0 0 0;
  padding: 0;
  background-color: ${colors.white};
`;
const ProductCard = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  margin: 0.5%;
  padding: 0.5%;
  max-width: 200px;
  min-width: 200px;
  max-height: 250px;
  min-height: 250px;
`;
const Image = styled.img`
  margin: 0;
  padding: 0.5%;
  object-fit: contain;
  object-position: left top;
  &:hover {
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin: 1% 0;
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
  margin: 1% 0 0 2%;
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
const NavArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${colors.white};
`;
const RightArrow = styled.div`
  color: red;
  margin: 0 1% 0 0;
  padding: 0 .5% 0 .5%;
  &:hover {
    cursor: pointer
  };
`;
const LeftArrow = styled.div`
  color: red;
  margin: 0;
  padding: 0 .5% 0 .5%;
  &:hover {
    cursor: pointer;
  }
`;

function StyledProductsCarousel(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [hideIndex, setHideIndex] = useState([]);

  useEffect(() => {
    if (!isLoaded) {
      getFeatureProducts(props.type); /* TODO refactor based on Wes' suggestion */
    };
  }, [isLoaded, props.type]);

  /* TODO move out to helper module Bestbuy Products API call */
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

  /* Right Arrow Click */
  const onRightArrowClick = (index) => {
    let indexArray = hideIndex;
    if (index < (products.length - 1)) {
      indexArray.push(index);
      setHideIndex(indexArray);   /* add slide to hide list */
      index++;
      setCurrIndex(index);
    }
  };

  /* Left Arrow Click */
  const onLeftArrowClick = (index) => {
    let indexArray = hideIndex;
    if (index > 0) {
      indexArray.pop(index);
      setHideIndex(indexArray);   /* add slide to hide list */
      index--;
      setCurrIndex(index);
    }
  };

  /* check hide list for product card index */
  const setInvisible = (index) => {
    return hideIndex.includes(index);
  };

  /*--- Render Carousel ---*/
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
          {products.map((p, index) => (
            <ProductCard
              key={index} display={setInvisible(index) ? "none" : "flex"}>
              <Image src={p.mediumImage} alt='product' />
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
            </ProductCard>
          ))}
        </CarouselArea>
        <NavArea>
          <RightArrow onClick={() => onRightArrowClick(currIndex)}>
            <ArrowIcon direction='right' />
          </RightArrow>
          <LeftArrow onClick={() => onLeftArrowClick(currIndex)}>
            <ArrowIcon direction='left' />
          </LeftArrow>
        </NavArea>
      </Main>
    );
  }
}

export default StyledProductsCarousel;

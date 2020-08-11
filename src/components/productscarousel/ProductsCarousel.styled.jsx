import React, { useState, useEffect } from "react";
import { globalVars } from "../../constants/globalvars";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";
import StarRatingShow from "../starratingshow/StarRatingShow.styled";
import ShoppingCartAddIcon from "../icons/ShoppingCartAddIcon";
import ArrowIcon from "../icons/ArrowIcon";

/* TODO add disable function for left/right arrows when end of list */
/* TODO reduce fields in API call */
/* TODO add navigation to product page when any part of product card clicked*/

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter} ${gutters.mainGutter};
  padding: ${gutters.halfGutter} ${gutters.noGutter};
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
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const CarouselArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  overflow: hidden;
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
  background-color: ${colors.white};
`;
const ProductCard = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.quarterGutter};
  padding: ${gutters.quarterGutter};
  max-width: 200px;
  min-width: 200px;
  max-height: 250px;
  min-height: 250px;
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
const Text = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.secondary};
`;
const ReviewText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter};
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
  margin: ${gutters.noGutter};
  margin-right: ${gutters.quarterGutter};
`;
const NavArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${colors.white};
`;
const Arrow = styled.div`
  color: red;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter} ${gutters.quarterGutter};
  &:hover {
    cursor: pointer;
  }
`;

function StyledProductsCarousel(props) {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [hideIndex, setHideIndex] = useState([]);

  useEffect(() => {
    const getProducts = async (param) => {
      const url = "/products((offers.type=" + param + "))?format=json&apiKey=" + globalVars.apiKey;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setError(response.error);
      }
    };
    getProducts(props.type);
  }, [props.type]);

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
  } else {
    return (
      <Main>
        <Line />
        <Header>{props.header}</Header>
        <CarouselArea>
          {products.map((p, index) => (
            <ProductCard
              key={index}
              display={setInvisible(index) ? "none" : "flex"}
            >
              <Image src={p.mediumImage} alt='product' />
              <Text>{p.name}</Text>
              <ReviewArea>
                <StarRatingShow Rating={p.customerReviewAverage} />
                <ReviewText>
                  {p.customerReviewAverage}({p.customerReviewCount})
                </ReviewText>
              </ReviewArea>
              <PriceArea>
                <SalePrice>&#36;{p.salePrice}</SalePrice>
                <ShoppingCartAddIcon />
              </PriceArea>
            </ProductCard>
          ))}
        </CarouselArea>
        <NavArea>
          <Arrow onClick={() => onRightArrowClick(currIndex)}>
            <ArrowIcon direction='right' />
          </Arrow>
          <Arrow onClick={() => onLeftArrowClick(currIndex)}>
            <ArrowIcon direction='left' />
          </Arrow>
        </NavArea>
      </Main>
    );
  }
}

export default StyledProductsCarousel;

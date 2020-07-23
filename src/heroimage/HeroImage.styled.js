import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import imageSrc from "../assets/4KSmartTVImage.png";
import ShippingFastIcon from "../icons/ShippingFastIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import HeadsetIcon from "../icons/HeadsetIcon";


const Main = styled.div`
  margin-top: 25px;
`;
const Image=styled.img`
  width: 100%;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin: 1% 10% 0 10%;
  width: 100%;
  color: ${colors.grey};
`;
const ShippingFast = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.5%;
  width: 250px;
`;
const Financing = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.5%;
  width: 225px;
`;
const TechSupport = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.5%;
  width: 200px;
`;
const IconTextLine1 = styled.div`
  font-size: 1.2rem;
  margin: 0;
`;
const IconTextLine2 = styled.div`
  font-size: 0.8rem;
  margin: 0;
`;

function HeroImage() {
  return (
    <Main>
      <Image src={imageSrc} alt='product image' />
      <Icons>
        <ShippingFastIcon />
        <ShippingFast>
          <IconTextLine1>FREE SHIPPING</IconTextLine1>
          <IconTextLine2>on every order</IconTextLine2>
        </ShippingFast>
        <CreditCardIcon />
        <Financing>
          <IconTextLine1>0% Financing</IconTextLine1>
          <IconTextLine2>on select products</IconTextLine2>
        </Financing>
        <HeadsetIcon />
        <TechSupport>
          <IconTextLine1>Free Tech Support</IconTextLine1>
          <IconTextLine2>on all products</IconTextLine2>
        </TechSupport>
      </Icons>
    </Main>
  );
}

export default HeroImage;

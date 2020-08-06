import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import StyledShopList from "./ShopList.styled";
import StyledQuickLinks from "./QuickLinks.styled";
import StyledSearch from "../search/Search.styled";
import StyledItemsInCart from "../itemsincart/ItemsInCart.styled";
import CopyrightIcon from "../icons/CopyrightIcon";
import CcVisaIcon from "../icons/CcVisaIcon";
import CcMastercardIcon from "../icons/CcMastercardIcon";
import CcAmexIcon from "../icons/CcAmexIcon";
import CcApplePay from "../icons/CcApplePayIcon";

const Main = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 5% 5% 0 5%;
  background-color: ${colors.primaryDark};
  color: ${colors.grey};
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin: 0;
  padding: 0 2%;
`;
const CartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1%;
`;
const PayIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25%;
  padding: 0;
`;
const CcIcon = styled.div`
  margin-right: 10%;
  padding: 0;
`;
const FooterBottom = styled.div`
  font-size: 0.8rem;
  margin: 1% 0;
  padding: 0 2%;
`;
const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  border-top: 2px solid ${colors.primary};
`;
const CopyrightSymbol = styled.div`
  margin: 0;
  padding: 1%;
`;
const CopyrightText = styled.div`
  margin: 0;
  padding: 0;
`;

function StyledFooter(props) {
  return (
    <Main>
      <FooterTop>
        <StyledShopList list={props.shopCategories} />
        <StyledQuickLinks />
        <StyledSearch />
        <CartArea>
          <StyledItemsInCart items='0' color={colors.grey} />
          <PayIcons>
            <CcIcon>
              <CcVisaIcon />
            </CcIcon>
            <CcIcon>
              <CcMastercardIcon />
            </CcIcon>
            <CcIcon>
              <CcAmexIcon />
            </CcIcon>
            <CcIcon>
              <CcApplePay />
            </CcIcon>
          </PayIcons>
        </CartArea>
      </FooterTop>
      <FooterBottom>
        <Copyright>
          <CopyrightSymbol>
            <CopyrightIcon />
          </CopyrightSymbol>
          <CopyrightText>
            Copyright 2020 GEEK SOURCE. All Rights Reserved.
          </CopyrightText>
        </Copyright>
      </FooterBottom>
    </Main>
  );
}

export default StyledFooter;

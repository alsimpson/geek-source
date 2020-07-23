import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import ItemsInCart from "../itemsincart/ItemsInCart.styled";
import CopyrightIcon from "../icons/CopyrightIcon";
import CcVisaIcon from "../icons/CcVisaIcon";
import CcMastercardIcon from "../icons/CcMastercardIcon";
import CcAmexIcon from "../icons/CcAmexIcon";
import CcApplePay from "../icons/CcApplePayIcon";

const Main = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 10% 10% 0 10%;
  background-color: ${colors.primaryDark};
  color: ${colors.grey};
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 2%;
`;
const CartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PayIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const CcIcon = styled.div`
  margin: 0 10% 0 0;
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

function Footer() {
  return (
    <Main>
      <FooterTop>
        <CartArea>
          <ItemsInCart items='0' color={colors.grey} />
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

export default Footer;

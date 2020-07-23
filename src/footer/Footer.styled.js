import React from "react";
import styled from "styled-components";
import CopyrightIcon from "../icons/CopyrightIcon";
import CcVisaIcon from "../icons/CcVisaIcon";
import CcMastercardIcon from "../icons/CcMastercardIcon";
import CcAmexIcon from "../icons/CcAmexIcon";
import CcApplePay from "../icons/CcApplePayIcon";

const Main = styled("footer")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10% 10% 0 10%;
  background-color: var(--primaryDark);
  color: var(--grey);
`;

const FooterTop = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Payments = styled("div")`
  display: flex;
  flex-direction: row;
  margin: 1%;
`;

const PayType = styled("div")`
  padding: 2px;
`
const FooterBottom = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 0.8rem;
  margin: 2% auto;
  padding: 2% auto;
  border-top: 1px solid;
`;

const CopyrightSymbol = styled("div")`
  margin: 1% 1% 0 1%;
`;
const CopyrightText = styled("div")`
  margin: 1% 0 0 0;
`;

function Footer() {
  return (
    <Main>
      <FooterTop>
        <Payments>
          <PayType>
            <CcVisaIcon />
          </PayType>
          <PayType>
            <CcMastercardIcon />
          </PayType>
          <PayType>
          <CcAmexIcon />
          </PayType>
          <PayType>
          <CcApplePay />
          </PayType>
        </Payments>
      </FooterTop>
      <FooterBottom>
        <CopyrightSymbol>
          <CopyrightIcon />
        </CopyrightSymbol>
        <CopyrightText>
          Copyright 2020 GEEK SOURCE. All Rights Reserved.
        </CopyrightText>
      </FooterBottom>
    </Main>
  );
}

export default Footer;

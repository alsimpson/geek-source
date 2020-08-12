import React from "react";
import { StyledMain, StyledIconTextSection,
         StyledIconText, StyledText } from "./TriadIcons.styled";
import ShippingFastIcon from "../Icons/ShippingFastIcon";
import CreditCardIcon from "../Icons/CreditCardIcon";
import HeadsetIcon from "../Icons/HeadsetIcon";

function TriadIcons() {
  return (
    <StyledMain>
      <StyledIconTextSection>
      <ShippingFastIcon />
      <StyledIconText>
        <StyledText size='1.2rem'>FREE SHIPPING</StyledText>
        <StyledText size='0.8rem'>on every order</StyledText>
      </StyledIconText>
    </StyledIconTextSection>
    <StyledIconTextSection>
      <CreditCardIcon />
      <StyledIconText>
        <StyledText size='1.2rem'>0% Financing</StyledText>
        <StyledText size='0.8rem'>on select products</StyledText>
      </StyledIconText>
    </StyledIconTextSection>
    <StyledIconTextSection>
      <HeadsetIcon />
      <StyledIconText>
        <StyledText size='1.2rem'>Free Tech Support</StyledText>
        <StyledText size='0.8rem'>on all products</StyledText>
      </StyledIconText>
    </StyledIconTextSection>
    </StyledMain>
  );
}

export default TriadIcons;

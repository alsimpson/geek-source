import React from "react";
import {
  StyledMain,
  StyledListHeader,
  StyledList,
  StyledListItem,
} from "./QuickLinks.styled";

function QuickLinks(){
  return (
    <StyledMain>
      <StyledListHeader>Quick Links</StyledListHeader>
      <StyledList>
        <StyledListItem>Returns</StyledListItem>
        <StyledListItem>Order Tracking</StyledListItem>
        <StyledListItem>FAQs</StyledListItem>
        <StyledListItem>Customer Support</StyledListItem>
        <StyledListItem>Terms & Conditions</StyledListItem>
        <StyledListItem>Privacy Policy</StyledListItem>
      </StyledList>
    </StyledMain>
  );
}

export default QuickLinks;

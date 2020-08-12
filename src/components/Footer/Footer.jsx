import React from "react";
import { colors } from "../../constants/colors";
import { StyledMain,
         StyledFooterTop,
         StyledCartArea,
         StyledPayIcons,
         StyledCcIcon,
         StyledFooterBottom,
         StyledCopyright,
         StyledCopyrightSymbol,
         StyledCopyrightText} from "./Footer.styled";

import ShopList from "./ShopList";
import QuickLinks from "./QuickLinks";
import Search from "../Search/Search";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import CopyrightIcon from "../Icons/CopyrightIcon";
import CcVisaIcon from "../Icons/CcVisaIcon";
import CcMastercardIcon from "../Icons/CcMastercardIcon";
import CcAmexIcon from "../Icons/CcAmexIcon";
import CcApplePay from "../Icons/CcApplePayIcon";


function Footer(props) {
  return (
    <StyledMain>
      <StyledFooterTop>
        <ShopList list={props.shopCategories} />
        <QuickLinks />
        <Search />
        <StyledCartArea>
          <ItemsInCart items='0' color={colors.grey} />
          <StyledPayIcons>
            <StyledCcIcon>
              <CcVisaIcon />
            </StyledCcIcon>
            <StyledCcIcon>
              <CcMastercardIcon />
            </StyledCcIcon>
            <StyledCcIcon>
              <CcAmexIcon />
            </StyledCcIcon>
            <StyledCcIcon>
              <CcApplePay />
            </StyledCcIcon>
          </StyledPayIcons>
        </StyledCartArea>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledCopyright>
          <StyledCopyrightSymbol>
            <CopyrightIcon />
          </StyledCopyrightSymbol>
          <StyledCopyrightText>
            Copyright 2020 GEEK SOURCE. All Rights Reserved.
          </StyledCopyrightText>
        </StyledCopyright>
      </StyledFooterBottom>
    </StyledMain>
  );
}

export default Footer;

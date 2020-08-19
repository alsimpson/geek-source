import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../constants/colors";
import { StyledMain,
         StyledFooterTop,
         StyledSearch,
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


function Footer({ itemsInCart }) {

  return (
    <StyledMain>
      <StyledFooterTop>
        <ShopList />
        <QuickLinks />
        <StyledSearch>
          <Search />
        </StyledSearch>
        <StyledCartArea>
          <ItemsInCart items={itemsInCart} color={colors.grey} />
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

Footer.propTypes = {
  itemsInCart: PropTypes.number
};

Footer.defaultProps = {
  itemsInCart: 0
};

export default Footer;

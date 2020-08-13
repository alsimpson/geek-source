import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../constants/colors";
import logo from "../../assets/logo.png";
import { StyledMain,
         StyledHeaderTop,
         StyledHeaderLogo,
         StyledCart,
         StyledHeaderNav } from "./Header.styled";

import DropDownList from "../Buttons/DropDownList";
import Search from "../Search/Search";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

/* TODO add homepage navigation to logo when clicked */
/* TODO build component for recently viewed & saved items*/

function Header({products}) {
    return (
        <StyledMain>
          <StyledHeaderTop>
            <StyledHeaderLogo src={logo} alt='logo' />
            <Search />
            <StyledCart>
              <ItemsInCart items='0' color={colors.secondary} />
            </StyledCart>
          </StyledHeaderTop>
          <StyledHeaderNav>
            <DropDownList title='PRODUCTS' list={products} />
            <DropDownList title='RECENTLY VIEWED' />
            <DropDownList title='SAVED ITEMS' />
          </StyledHeaderNav>
        </StyledMain>
    );
  }

Header.propTypes = {
  products: PropTypes.array
};

Header.defaultProps = {
  products: []
};

export default Header;

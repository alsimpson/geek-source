import React from "react";
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
const recentlyViewed = [];
const savedItems = [];

function Header(props) {
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
            <DropDownList title='PRODUCTS' list={props.products} />
            <DropDownList title='RECENTLY VIEWED' list={recentlyViewed} />
            <DropDownList title='SAVED ITEMS' list={savedItems} />
          </StyledHeaderNav>
        </StyledMain>
    );
  }

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
import { globalVars } from "../../constants/globalvars";
import logo from "../../assets/logo.png";
import { StyledMain,
         StyledHeaderTop,
         StyledHeaderLogo,
         StyledCart,
         StyledHeaderNav } from "./Header.styled";

import ProductsDropDownList from "../ProductsDropDownList/ProductsDropDownList";
import DropDownCarousel from "../Buttons/DropDownCarousel";
import Search from "../Search/Search";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

function Header() {

  return (
    <StyledMain>
      <StyledHeaderTop>
        <Link to='/'>
          <StyledHeaderLogo src={logo} alt='logo' />
        </Link>
        <Search />
        <StyledCart>
          <ItemsInCart color={colors.secondary} />
        </StyledCart>
      </StyledHeaderTop>
      <StyledHeaderNav>
        <ProductsDropDownList />
        <DropDownCarousel
          title='RECENTLY VIEWED'
          listKey={globalVars.keyRecentlyViewed}
        />
        <DropDownCarousel
          title='SAVED ITEMS'
          listKey={globalVars.keySavedItems}
        />
      </StyledHeaderNav>
    </StyledMain>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
import logo from "../../assets/logo.png";
import { StyledMain,
         StyledHeaderTop,
         StyledHeaderLogo,
         StyledCart,
         StyledHeaderNav } from "./Header.styled";

import ProductsDropDownList from "../ProductsDropDownList/ProductsDropDownList";
import DropDownListCarousel from "../Buttons/DropDownCarousel";
import Search from "../Search/Search";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

/* TODO build component for recently viewed & saved items*/

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
        <DropDownListCarousel title='RECENTLY VIEWED' />
        <DropDownListCarousel title='SAVED ITEMS' />
      </StyledHeaderNav>
    </StyledMain>
  );
}

export default Header;

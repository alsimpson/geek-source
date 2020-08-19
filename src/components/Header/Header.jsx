import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";
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

/* TODO build component for recently viewed & saved items*/

function Header() {
  const categoryItems = useContext(CategoryContext);
  return (
    <StyledMain>
      <StyledHeaderTop>
        <Link to="/">
          <StyledHeaderLogo src={logo} alt='logo' />
        </Link>
        <Search />
        <StyledCart>
          <ItemsInCart color={colors.secondary} />
        </StyledCart>
      </StyledHeaderTop>
      <StyledHeaderNav>
        <DropDownList title='PRODUCTS' list={categoryItems} />
        <DropDownList title='RECENTLY VIEWED' />
        <DropDownList title='SAVED ITEMS' />
      </StyledHeaderNav>
    </StyledMain>
  );
}

export default Header;

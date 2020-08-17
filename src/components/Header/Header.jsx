import React, { useContext } from "react";
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

/* TODO add homepage navigation to logo when clicked */
/* TODO build component for recently viewed & saved items*/

function Header() {
  const categoryItems = useContext(CategoryContext);
    return (
        <StyledMain>
          <StyledHeaderTop>
            <StyledHeaderLogo src={logo} alt='logo' />
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

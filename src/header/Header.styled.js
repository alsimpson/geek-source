import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import logo from "../assets/logo.png";
import DropDown from "../buttons/DropDown.styled";
import Search from "../search/Search.styled";
import ItemsInCart from "../itemsincart/ItemsInCart.styled";

/* Temporary data for testing buttons: remove later */
import { products } from "../mockdata/products";
const recentlyViewed = [{ id: 0, title: "No data", selected: false, key: "viewed"}];
const savedItems = [{ id: 0, title: "No data", selected: false, key: "saved" }];

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5% 5% 0 5%;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: ${colors.white};
  color: ${colors.secondary};
`;

const HeaderLogo = styled.img`
  height: 40px;
  width: 70px;
  margin-left: 1%;
  padding: 0;
`;

const Cart = styled.div`
  margin-right: 1%;
  margin-left: 30%;
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.white};
  border-top: 1px solid black;
`;

function Header() {
    return (
        <Main>
          <HeaderTop>
            <HeaderLogo src={logo} alt='logo' />
            <Search />
            <Cart>
              <ItemsInCart items='0' color={colors.secondary} />
            </Cart>
          </HeaderTop>
          <HeaderNav>
            <DropDown title='PRODUCTS' list={products} />
            <DropDown title='RECENTLY VIEWED' list={recentlyViewed} />
            <DropDown title='SAVED ITEMS' list={savedItems} />
          </HeaderNav>
        </Main>
    );
  }

export default Header;

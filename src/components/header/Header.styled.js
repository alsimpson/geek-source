import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import logo from "../../assets/logo.png";
import DropDownList from "../../buttons/DropDownList.styled";
import Search from "../../search/Search.styled";
import ItemsInCart from "../../itemsincart/ItemsInCart.styled";

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
/* TODO build component for recenlty viewed & saved items*/
const recentlyViewed = [];
const savedItems = [];

function StyledHeader(props) {
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
            <DropDownList title='PRODUCTS' list={props.products} />
            <DropDownList title='RECENTLY VIEWED' list={recentlyViewed} />
            <DropDownList title='SAVED ITEMS' list={savedItems} />
          </HeaderNav>
        </Main>
    );
  }

export default StyledHeader;

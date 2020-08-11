import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import logo from "../../assets/logo.png";
import StyledDropDownList from "../buttons/DropDownList.styled";
import StyledSearch from "../search/Search.styled";
import StyledItemsInCart from "../itemsincart/ItemsInCart.styled";

/* TODO add homepage navigation to logo when clicked */

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${gutters.halfGutter} ${gutters.mainGutter};
`;
const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;
const HeaderLogo = styled.img`
  height: 40px;
  width: 70px;
  margin-left: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
`;
const Cart = styled.div`
  margin-right: ${gutters.halfGutter};
  margin-left: ${gutters.doubleGutter};
`;
const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.white};
  border-top: 1px solid black;
`;
/* TODO build component for recently viewed & saved items*/
const recentlyViewed = [];
const savedItems = [];

function StyledHeader(props) {
    return (
        <Main>
          <HeaderTop>
            <HeaderLogo src={logo} alt='logo' />
            <StyledSearch />
            <Cart>
              <StyledItemsInCart items='0' color={colors.secondary} />
            </Cart>
          </HeaderTop>
          <HeaderNav>
            <StyledDropDownList title='PRODUCTS' list={props.products} />
            <StyledDropDownList title='RECENTLY VIEWED' list={recentlyViewed} />
            <StyledDropDownList title='SAVED ITEMS' list={savedItems} />
          </HeaderNav>
        </Main>
    );
  }

export default StyledHeader;

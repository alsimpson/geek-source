import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import DropDown from "../buttons/DropDown.styled";
import Search from "../search/Search";
import ItemsInCart from "../itemsincart/ItemsInCart.styled";
import { products } from "../mockdata/products";

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  margin: .5% 10% 0 10%;
`;

const HeaderTop = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--white);
  color: var(--secondary);
`;

const HeaderLogo = styled("img")`
  height: 30px;
  width: 60px;
  margin: 5px 25px 5px 5px;
  padding: 5px;
`;

const MyCart = styled("div")`
  margin: 0 0 0 30%;
`;

const HeaderNav = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--secondary);
  color: var(--white);
  border-top: 1px solid black;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      products: products,
      recentlyViewed: [{ id: 0, title: "No data", selected: false, key: "viewed" }],
      saved: [{ id: 0, title: "No data", selected: false, key: "saved" }],
    };
  }

  render() {
    return (
      <>
        <Main>
          <HeaderTop>
            <HeaderLogo src={logo} alt='logo' />
            <Search />
            <MyCart>
              <ItemsInCart items='0' />
            </MyCart>
          </HeaderTop>
          <HeaderNav>
            <DropDown title='PRODUCTS' list={this.state.products} />
            <DropDown
              title='RECENTLY VIEWED'
              list={this.state.recentlyViewed}
            />
            <DropDown title='SAVED ITEMS' list={this.state.saved} />
          </HeaderNav>
        </Main>
      </>
    );
  }
}

export default Header;

import React from "react";
import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";

const Main = styled("div")`
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  border-left: none;
  font-size: 0.8rem;
  margin: 2%;
  padding: 0;
`;
const SearchText=styled("input")`
  border: none;
`;

function Search() {
  return (
    <Main>
      <SearchIcon />
      <SearchText type='search' name='q'
                  placeholder='search products' size="30" />
    </Main>
  );
}

export default Search;

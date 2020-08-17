import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import { StyledMain,
         StyledSearchText,
        } from "./Search.styled";
/* TODO add API call for products search on ENTER; navigate to Category page */

function Search() {
  return (
    <StyledMain>
      <SearchIcon />
      <StyledSearchText type='search' name='q'
                        placeholder='search products' size="30" />
    </StyledMain>
  );
}

export default Search;

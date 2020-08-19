import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";
import { StyledMain,
         StyledSearchText,
        } from "./Search.styled";

//------------------------------------------------------------------/
function Search() {

  const [searchString, setSearchString] = useState(null);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);
  const [urlSearch, setUrlSearch] = useState("");
  const [searchText, setSearchText] = useState("Search results");

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      setEnterKeyPressed(true);
      setSearchText("Search results for: " + searchString);
      setUrlSearch("(search=" + searchString.replace(' ','&search=') + ")");
    }
  };

  return (
    <StyledMain>
      <SearchIcon />
      <StyledSearchText
        type='text'
        name='psearch'
        placeholder='search products'
        size='30'
        onKeyPress={(ev) => {handleKeyPress(ev.key)}}
        onChange={(ev) => {setSearchString(ev.target.value)}}
      />
      {enterKeyPressed && (
        <Redirect
          to={{
            pathname: "/category",
            state: {
              urlSearch: urlSearch,
              categoryId: searchText,
            },
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        ></Redirect>
      )}
    </StyledMain>
  );
}

export default Search;

import styled from "styled-components";

export const StyledMain = styled("div")`
  font-family: sans-serif;
`;

export const StyledDropDownContainer = styled("div")`
  margin: 0 auto;
`;

export const StyledDropDownHeader = styled("div")`
  display: flex;
  padding: 0.4em 2em 0.4em 1em;
  background: var(--secondary);
  color: var(--white);
`;

export const StyledDropDownHeaderTitle = styled("div")`
  font-size: 0.8rem;
  padding-right: 0.5em;
`;

export const StyledDropDownList = styled("ul")`
  position: absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: var(--white);
  color: black;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 0.8rem;
  width: 225px;
`;

export const StyledListItem = styled("li")`
  list-style: none;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

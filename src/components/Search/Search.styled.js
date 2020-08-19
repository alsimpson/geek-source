import styled from "styled-components";

export const StyledMain = styled.div`
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  border-left: none;
  font-size: 0.8rem;
  margin: 2%;
  padding: 0;
`;

export const StyledSearchText = styled.input`
  border: none;
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

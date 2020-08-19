import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

export const StyledMain = styled.div`
  border-top: none;
  border-right: none;
  border-bottom: 1px solid ${colors.grey};
  border-left: none;
  font-size: 0.8rem;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledSearchText = styled.input`
  border: none;
  background-color: inherit;
  &:focus {
    outline: none;
    background-color: white;
  }
`;

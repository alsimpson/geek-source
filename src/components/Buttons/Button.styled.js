import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 20px;
  padding: 10px 20px;
  margin: ${gutters.noGutter};
  border-radius: 25px;
  border-color: ${colors.secondary};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

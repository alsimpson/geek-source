import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledListHeader = styled.p`
  font-size: 0.8 rem;
  font-weight: bold;
  color: ${colors.white};
`;

export const StyledList = styled.ul`
  list-style: none;
  text-align: left;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledListItem = styled.li`
  color: ${colors.grey};
  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
`;

import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  margin: ${gutters.noGutter} ${gutters.halfGutter};
  padding: ${gutters.noGutter} ${gutters.halfGutter};
`;

export const StyledListHeader = styled.p`
  font-weight: bold;
  color: ${colors.white};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledList = styled.ul`
  list-style: none;
  text-align: left;
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
  padding-left: ${gutters.quarterGutter};
`;

export const StyledListItem = styled.li`
  color: ${colors.grey};
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
  border-bottom: 0.5px solid ${colors.grey};
  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
  &:last-child {
    border: none;
  }
`;

export const StyledLine = styled.hr`
  width: 45px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.grey};
  margin: ${gutters.noGutter};
  margin-top: ${gutters.mainGutter};
  padding: ${gutters.noGutter};
`;

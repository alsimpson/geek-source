import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter} ${gutters.halfGutter};
  padding: ${gutters.noGutter} ${gutters.halfGutter};
  color: ${colors.grey};
`;

export const StyledLine = styled.hr`
  width: 45px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.white};
  margin: ${gutters.noGutter};
  margin-top: ${gutters.mainGutter};
  padding: ${gutters.noGutter};
`;

export const StyledListHeader = styled.p`
  font-size: 18px;
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  margin-bottom: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
  color: ${colors.white};
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter} ${gutters.halfGutter};
  border-bottom: 0.5px solid ${colors.grey};
  &:last-child {
    border: none;
  }
`;

export const StyledListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
    &:hover {
    cursor: pointer;
    color: ${colors.white}
  }
`;

export const StyledText = styled.div`
  font-size: 14px;
  font-weight: ${props=>props.bold ? 'bold' : 'none'};
  margin: ${gutters.noGutter};
  margin-right: ${gutters.mainGutter};
  padding: ${gutters.noGutter};
  &:hover {
    cursor: pointer;
    color: ${colors.white}
  }
`;

export const StyledArrow = styled.div`
  display: ${props=>props.display || 'block' };
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  transform: ${props=>props.rotate || 'none'};
  &:hover {
    cursor: pointer;
    color: ${colors.white}
  }
`;

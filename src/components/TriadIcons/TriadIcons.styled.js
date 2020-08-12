import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  margin: ${gutters.halfGutter} ${gutters.mainGutter};
  margin-bottom: ${gutters.noGutter};
`;
export const StyledIconTextSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  width: 210px;
  color: ${colors.grey};
`;
export const StyledIconText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
export const StyledText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

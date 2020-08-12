import styled from "styled-components";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledStars = styled.div`
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  padding-top: ${gutters.oneEighthGutter};
  padding-left: ${gutters.quarterGutter};
`;

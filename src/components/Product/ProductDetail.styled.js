import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
  background-color: ${colors.white};
`;

export const StyledImage = styled.img`
  margin: ${gutters.doubleGutter};
  padding: ${gutters.quarterGutter};
  width: 50%;
  object-fit: contain;
  object-position: left top;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.mainGutter};
  padding: ${gutters.quarterGutter};
`;

export const StyledText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${gutters.quarterGutter} ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledPriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const StyledSalePrice = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.8;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledSaveAmt = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter} ${gutters.quarterGutter};
`;

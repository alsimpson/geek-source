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
  margin: ${gutters.mainGutter} ${gutters.doubleGutter};
  padding: ${gutters.noGutter};
  align-self: flex-start;
  object-fit: contain;
  vertical-align: bottom;
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

export const StyledSaveItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-items: baseline;
  color: black;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  &:hover { cursor: pointer };
  &:disabled { cursor: none };
`;

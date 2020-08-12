import styled from "styled-components";
import { gutters } from "../constants/gutters";
import { colors } from "../constants/colors";

export const StyledCategorySection = styled.div`
         display: flex;
         flex-direction: row;
         justify-content: center;
         margin: ${gutters.halfGutter};
         padding: ${gutters.noGutter};
       `;

export const StyledCategoryListSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.halfGutter};
  padding: ${gutters.halfGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  margin-bottom: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
`;

export const StyledLine = styled.hr`
  width: 50px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledHeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter} ${gutters.noGutter};
  max-width: 600px;
  min-width: 600px;
  border-top: 1px solid ${colors.grey};
`;

export const StyledImage = styled.img`
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter};
  object-fit: contain;
  object-position: left top;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${gutters.noGutter};
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
  flex-grow: .8;
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

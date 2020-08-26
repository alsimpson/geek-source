import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.mainGutter} ${gutters.doubleGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;

export const StyledLine = styled.hr`
  width: 50px;
  height: 1px;
  border: 0;
  border-top: 5px solid ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledImage = styled.img`
  margin: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
  align-self: flex-start;
  object-fit: contain;
  vertical-align: bottom;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledText = styled.div`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledReviewArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledPriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const StyledSaveAmt = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${gutters.noGutter};
  padding: ${gutters.halfGutter} ${gutters.quarterGutter};
`;

export const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter};
`;

export const StyledShopAllText = styled.div`
  color: black;
  font-weight: bold;
  margin: ${gutters.noGutter} ${gutters.doubleGutter};
  padding: ${gutters.noGutter};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

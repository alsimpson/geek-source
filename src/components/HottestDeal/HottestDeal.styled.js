import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: .8;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.mainGutter};
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
  padding: ${gutters.quarterGutter} ${gutters.doubleGutter};
`;

export const StyledImage = styled.img`
  margin: ${gutters.noGutter};
  padding: ${gutters.halfGutter};
  object-fit: contain;
  object-position: left top;
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

export const StyledReviewText = styled.div`
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  margin-left: ${gutters.quarterGutter};
`;

export const StyledPriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const StyledSalePrice = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-right: ${gutters.halfGutter};
`;

export const StyledRegPrice = styled.div`
  color: ${colors.grey};
  font-size: 15px;
`;

export const StyledSaveAmt = styled.div`
  color: black;
  font-weight: bold;
  margin-top: 20%;
`;

export const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${gutters.noGutter};
  padding: ${gutters.quarterGutter};
`;

export const StyledShopAllText = styled.div`
  color: black;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  &:hover {
    cursor: pointer;
  }
`;

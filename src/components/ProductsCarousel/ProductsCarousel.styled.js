import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter} ${gutters.mainGutter};
  padding: ${gutters.halfGutter} ${gutters.noGutter};
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
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
export const StyledCarouselArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  overflow: hidden;
  margin: ${gutters.noGutter};
  margin-top: ${gutters.quarterGutter};
  padding: ${gutters.noGutter};
  background-color: ${colors.white};
`;
export const StyledProductCard = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  margin: ${gutters.quarterGutter};
  padding: ${gutters.quarterGutter};
  max-width: 200px;
  min-width: 200px;
  max-height: 250px;
  min-height: 250px;
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
export const StyledText = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
export const StyledReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.secondary};
`;
export const StyledPriceArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
export const StyledSalePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  margin-right: ${gutters.quarterGutter};
`;
export const StyledNavArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${colors.white};
`;
export const StyledArrow = styled.button`
  background: inherit;
  border: none;
  color: ${colors.secondary};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter} ${gutters.quarterGutter};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: darkgrey;
  }
`;

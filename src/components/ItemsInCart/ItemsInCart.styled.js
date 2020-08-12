import styled from "styled-components";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  font-size: 0.8rem;
`;

export const StyledItemsText = styled.div`
  flex: 1;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledShoppingCartImage = styled.div`
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

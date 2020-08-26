import { gutters } from "../constants/gutters";
import styled from "styled-components";

export const StyledHotDealArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${gutters.halfGutter} ${gutters.noGutter};
  margin-right: ${gutters.mainGutter};
  padding: ${gutters.noGutter};
`;

import { gutters } from "../../constants/gutters";
import styled from "styled-components";

export const StyledAmount = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter}
`;

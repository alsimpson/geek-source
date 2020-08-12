import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${gutters.halfGutter} ${gutters.mainGutter};
`;

export const StyledHeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  background-color: ${colors.white};
  color: ${colors.secondary};
`;

export const StyledHeaderLogo = styled.img`
  height: 40px;
  width: 70px;
  margin-left: ${gutters.halfGutter};
  padding: ${gutters.noGutter};
`;

export const StyledCart = styled.div`
  margin-right: ${gutters.halfGutter};
  margin-left: ${gutters.doubleGutter};
`;

export const StyledHeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.white};
  border-top: 1px solid black;
`;

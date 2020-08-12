import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";

export const StyledMain = styled.footer`
  display: flex;
  flex-direction: column;
  margin: ${gutters.mainGutter};
  background-color: ${colors.primaryDark};
  color: ${colors.grey};
`;

export const StyledFooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter} ${gutters.mainGutter};
`;

export const StyledCartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.halfGutter};
`;

export const StyledPayIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${gutters.noGutter};
  margin-top: ${gutters.doubleGutter};
  padding: ${gutters.noGutter};
`;

export const StyledCcIcon = styled.div`
  margin-right: 10%;
  padding: ${gutters.noGutter};
`;

export const StyledFooterBottom = styled.div`
  font-size: 0.8rem;
  margin: 1% ${gutters.noGutter};
  padding: ${gutters.noGutter} 2%;
`;

export const StyledCopyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  border-top: 2px solid ${colors.primary};
`;

export const StyledCopyrightSymbol = styled.div`
  margin: ${gutters.noGutter};
  padding: 1%;
`;

export const StyledCopyrightText = styled.div`
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

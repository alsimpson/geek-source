import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";
import imageSrc from "../../assets/movie_theme.png";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: ${gutters.halfGutter};
  margin-bottom: ${gutters.halfGutter};
`;

export const StyledHeroImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imageSrc});
  background-position: center;
  background-origin: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  color: ${colors.white};
`;

export const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

export const StyledButton = styled.div`
  margin: ${gutters.quarterGutter} ${gutters.noGutter};
  padding: ${gutters.quarterGutter} ${gutters.noGutter};
`;

export const StyledImage = styled.img`
  width: 325px;
  height: 200px;
  align-self: center;
`;


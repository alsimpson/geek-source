import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import imageSrc from "../../assets/movie_theme.png";
import imageTV from "../../assets/curved_tv.png";
import StyledButton from "../buttons/Button.styled";
import StyledTriadIcons from "../triadicons/TriadIcons.styled";

/* TODO add API call to shop now button for "curved tv" category*/
/* TODO add style attribute to only show on desktop */

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: ${gutters.halfGutter};
  margin-bottom: ${gutters.halfGutter};
`;
const HeroImage = styled.div`
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
const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;
const Image = styled.img`
  width: 325px;
  height: 200px;
  align-self: center;
`;

function StyledHeroImage() {
  return (
    <Main>
      <HeroImage>
        <ButtonArea>
          <Text size='30px'>CURVED 4K SMART TVs</Text>
          <Text size='12px'>
            Experience the action and drama like never before.
          </Text>
          <Link
            to={{
              pathname: "/category",
              state: {
                urlSearch: "categoryPath.id=abcat0101000",
                categoryId: "abcat0101000",
              },
            }}
          >
            <StyledButton text='SHOP NOW' />
          </Link>
        </ButtonArea>
        <Image src={imageTV} alt='smart tv' />
      </HeroImage>
      <StyledTriadIcons />
    </Main>
  );
}

export default StyledHeroImage;

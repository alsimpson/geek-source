import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import imageSrc from "../../assets/movie_theme.png";
import imageTV from "../../assets/curved_tv.png";
import StyledButton from "../buttons/Button.styled";
import ShippingFastIcon from "../icons/ShippingFastIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import HeadsetIcon from "../icons/HeadsetIcon";

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
const IconSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  margin: ${gutters.halfGutter} ${gutters.mainGutter};
  margin-bottom: ${gutters.noGutter};
`;
const IconTextSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
  width: 210px;
  color: ${colors.grey};
`;
const IconText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
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
          <StyledButton text='SHOP NOW' />
        </ButtonArea>
        <Image src={imageTV} alt='smart tv' />
      </HeroImage>
      <IconSection>
        <IconTextSection>
          <ShippingFastIcon />
          <IconText>
            <Text size='1.2rem'>FREE SHIPPING</Text>
            <Text size='0.8rem'>on every order</Text>
          </IconText>
        </IconTextSection>
        <IconTextSection>
          <CreditCardIcon />
          <IconText>
            <Text size='1.2rem'>0% Financing</Text>
            <Text size='0.8rem'>on select products</Text>
          </IconText>
        </IconTextSection>
        <IconTextSection>
          <HeadsetIcon />
          <IconText>
            <Text size='1.2rem'>Free Tech Support</Text>
            <Text size='0.8rem'>on all products</Text>
          </IconText>
        </IconTextSection>
      </IconSection>
    </Main>
  );
}

export default StyledHeroImage;

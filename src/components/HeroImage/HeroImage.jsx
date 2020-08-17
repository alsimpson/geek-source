import React from "react";
import { Link } from "react-router-dom";
import imageTV from "../../assets/curved_tv.png";
import Button from "../Buttons/Button";
import TriadIcons from "../TriadIcons/TriadIcons";
import { StyledMain,
         StyledHeroImage,
         StyledButton,
         StyledTextArea,
         StyledText,
         StyledImage } from "./HeroImage.styled";

/* TODO add style attribute to only show on desktop */

function HeroImage() {
  return (
    <StyledMain>
      <StyledHeroImage>
        <StyledTextArea>
          <StyledText size='30px'>CURVED 4K SMART TVs</StyledText>
          <StyledText size='12px'>
            Experience the action and drama like never before.
          </StyledText>
          <Link
            to={{
              pathname: "/category",
              state: {
                urlSearch: "(categoryPath.id=abcat0101000)",
                categoryId: "abcat0101000",
              },
            }}
          >
            <StyledButton>
              <Button text='SHOP NOW' />
            </StyledButton>
          </Link>
        </StyledTextArea>
        <StyledImage src={imageTV} alt='smart tv' />
      </StyledHeroImage>
      <TriadIcons />
    </StyledMain>
  );
}

export default HeroImage;

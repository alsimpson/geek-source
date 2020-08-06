import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import imageSrc from "../../assets/movie_theme.png";
import imageTV from "../../assets/curved_tv.png";
import Button from "../../buttons/Button.styled";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
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
  margin: 0%;
  padding: 0;
`;
const Text1 = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
const Text2 = styled.p`
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
const Image = styled.img`
  width: 325px;
  height: 200px;
  align-self: center;
`;

function StyledHeroImage() {
  return (
    <Main>
      <ButtonArea>
        <Text1>CURVED 4K SMART TVs</Text1>
        <Text2>Experience the action and drama like never before.</Text2>
        <Button text='SHOP NOW' />
      </ButtonArea>
      <Image src={imageTV} alt="smart tv" />
    </Main>
  );
}

export default StyledHeroImage;

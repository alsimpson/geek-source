import React from "react";
import styled from "styled-components";
import imageSrc from "../assets/4KSmartTVImage.png";

const Main = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
const Image = styled.img`
  width: 100%;
`;

function HeroImage() {
  return (
    <Main>
      <Image src={imageSrc} alt='product image' />
    </Main>
  );
}

export default HeroImage;

import React from "react";
import styled from "styled-components";
import Header from "../header/Header.styled";
import HeroImage from "../heroimage/HeroImage.styled";
import FastShipping from "../fastshipping/FastShipping";
import Financing from "../finance/Financing";
import TechSupport from "../techsupport/TechSupport";
import Footer from "../footer/Footer.styled";

const IconArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 5% 0 5%;
`;

function Homepage() {
  return (
    <>
      <Header />
      <HeroImage />
      <IconArea>
        <FastShipping />
        <Financing />
        <TechSupport />
      </IconArea>
      <Footer />
    </>
  );
}

export default Homepage;

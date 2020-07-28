import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import ShippingFastIcon from "../icons/ShippingFastIcon";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  color: ${colors.grey};
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const TextLine1 = styled.div`
  font-size: 1.2rem;
  width: 160px;
`;
const TextLine2 = styled.div`
  font-size: 0.8rem;
`;

function FastShipping(){
  return (
    <Main>
      <ShippingFastIcon />
      <TextArea>
        <TextLine1>FREE SHIPPING</TextLine1>
        <TextLine2>on every order</TextLine2>
      </TextArea>
    </Main>
  );
}

export default FastShipping;

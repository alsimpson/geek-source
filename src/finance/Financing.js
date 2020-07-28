import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import CreditCardIcon from "../icons/CreditCardIcon";

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

function Financing() {
  return (
    <Main>
      <CreditCardIcon />
      <TextArea>
        <TextLine1>0% Financing</TextLine1>
        <TextLine2>on select products</TextLine2>
      </TextArea>
    </Main>
  );
}

export default Financing;

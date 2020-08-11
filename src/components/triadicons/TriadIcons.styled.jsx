import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import ShippingFastIcon from "../icons/ShippingFastIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import HeadsetIcon from "../icons/HeadsetIcon";

const Main = styled.div`
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
const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: bold;
  margin: ${gutters.noGutter};
  padding: ${gutters.noGutter};
`;

function StyledTriadIcons() {
  return (
    <Main>
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
    </Main>
  );
}

export default StyledTriadIcons;

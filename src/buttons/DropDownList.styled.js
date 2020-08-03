import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";

const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownContainer = styled("div")`
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  display: flex;
  padding: 0.4em 2em 0.4em 1em;
  background: var(--secondary);
  color: var(--white);
`;

const DropDownHeaderTitle = styled("div")`
  font-size: 0.8rem;
  padding-right: 0.5em;
`;

const DropDownList = styled("ul")`
  position: absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: var(--white);
  color: black;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 0.8rem;
  width: 225px;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

function DropDown2(props) {
  const [isOpen, setIsOpen] = useState(false);
//  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
//    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <DropDownHeaderTitle>{props.title}</DropDownHeaderTitle>
          {isOpen ? <ArrowIcon direction='up' /> : <ArrowIcon direction='down' />}
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {props.list.map((item) => (
              <ListItem onClick={onOptionClicked(item.url)} key={item.id}>
                {item.name}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </Main>
  );
}

export default DropDown2;

import React, { useState } from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import { StyledMain,
         StyledDropDownContainer,
         StyledDropDownHeader,
         StyledDropDownHeaderTitle,
         StyledDropDownList,
         StyledListItem,
        } from "./DropDownList.styled";

function DropDownList(props) {
  const list = props.list || [];
  const [isOpen, setIsOpen] = useState(false);
//  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
//    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <StyledMain>
      <StyledDropDownContainer>
        <StyledDropDownHeader onClick={toggling}>
          <StyledDropDownHeaderTitle>{props.title}</StyledDropDownHeaderTitle>
          {isOpen ? <ArrowIcon direction='up' /> : <ArrowIcon direction='down' />}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            {list.map((item) => (
              <StyledListItem onClick={onOptionClicked(item.url)} key={item.id}>
                {item.name}
              </StyledListItem>
            ))}
          </StyledDropDownList>
        )}
      </StyledDropDownContainer>
    </StyledMain>
  );
}

export default DropDownList;

import React, { useState } from "react";
import PropTypes from "prop-types";
import ArrowIcon from "../Icons/ArrowIcon";
import { StyledMain,
         StyledDropDownContainer,
         StyledDropDownHeader,
         StyledDropDownHeaderTitle,
         StyledDropDownList,
         StyledListItem,
        } from "./DropDownCarousel.styled";

function DropDownListCarousel({title, list}) {
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
          <StyledDropDownHeaderTitle>{title}</StyledDropDownHeaderTitle>
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

DropDownListCarousel.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

DropDownListCarousel.defaultProps = {
  title: "Text Here",
  list: [{ id: 0, name: "No items ..." }],
};

export default DropDownListCarousel;
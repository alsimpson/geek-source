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
import useMouseClick from "../../hooks/useMouseClick";

function DropDownListCarousel({title, list}) {
  const [isOpen, setIsOpen] = useState(false);
  const { innerRef } = useMouseClick(
    () => setIsOpen(!isOpen), //user clicked on component: toggle list
    () => setIsOpen(false));  //user clicked outside of component: close list

  return (
    <StyledMain ref={innerRef}>
      <StyledDropDownContainer>
        <StyledDropDownHeader>
          <StyledDropDownHeaderTitle>{title}</StyledDropDownHeaderTitle>
          {isOpen ? <ArrowIcon direction='up' /> : <ArrowIcon direction='down' />}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            {list.map((item) => (
              <StyledListItem key={item.id}>
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

import React from 'react';
import FontAwesome from 'react-fontawesome';

function ArrowIcon(props) {

  return (
    <>
      <FontAwesome name={'angle-' + props.direction} size="lg"/>
    </>
  );
}

export default ArrowIcon;

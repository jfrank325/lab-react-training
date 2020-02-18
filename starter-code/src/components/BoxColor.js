import React from 'react';

const boxColor = props => {
  return <div className="box" style={{ bgColor: `rgb(${props.r},${props.g},${props.b}` }}></div>;
};

export default boxColor;

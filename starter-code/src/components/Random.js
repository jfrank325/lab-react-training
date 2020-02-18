import React from 'react';

const random = props => {
  let result = Math.floor(Math.random() * props.max);
  return (
    <div className="border">
      <p>
        Random value between {props.min} and {props.max} => {result}
      </p>
    </div>
  );
};

export default random;

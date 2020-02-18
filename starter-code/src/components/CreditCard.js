import React from 'react';

const creditCard = props => {
  return (
    <div>
      <h1>{props.type}</h1>
      <h2>{props.number}</h2>
      <p>
        Expires {props.experationMonth}/{props.experationYear} {props.bank}/
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default creditCard;

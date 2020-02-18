import React from 'react';

const idCard = props => {
  return (
    <div className="card border">
      <div>
        <img src={props.picture} alt="My Picture" />
      </div>
      <div>
        <ul>
          <li>First name: {props.lastName}</li>
          <li>Last name: {props.firstName}</li>
          <li>Gender: {props.gender}</li>
          <li>Height: {props.height}</li>
          <li>Birth: ({props.birth})</li>
        </ul>
      </div>
    </div>
  );
};

export default idCard;

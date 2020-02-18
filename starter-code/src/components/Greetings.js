import React from 'react';

const greeting = props => {
  const lang = {
    de: 'Hallo',
    fr: 'Bonjour',
  };
  return (
    <div className="greetings-container" className="border">
      <p>
        {lang[props.lang]} {props.text}
      </p>
    </div>
  );
};

export default greeting;

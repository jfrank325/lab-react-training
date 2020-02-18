import React from 'react';

const NumbersTable = props => {
  const digits = [];

  for (let i = 0; i <= props.limit; i++) {
    digits.push(i);
  }

  return (
    <>
      {props.limit <= 12 && (
        <div className="box-container">
          {digits.map(digit => {
            console.log(digit);
            return (
              <div>
                {digit % 2 === 0 ? (
                  <div className="red box" key={digit}>
                    {digit}
                  </div>
                ) : (
                  <div className="white box" key={digit}>
                    {digit}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NumbersTable;

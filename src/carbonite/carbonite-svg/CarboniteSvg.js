import React from 'react';

const CarboniteSvg = ({ children, size }) => {
  return (
    <svg
      className="icon"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 500 500"
    >
      {children}
    </svg>
  );
};

export default CarboniteSvg;

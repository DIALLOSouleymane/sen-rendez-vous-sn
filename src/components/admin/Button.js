// Button.js
import React from 'react';
import './Button.scss';



const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;

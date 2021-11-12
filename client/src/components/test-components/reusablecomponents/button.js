import React from 'react';
/**
 * 
 * @param {*} props 
 * @returns button comp with 
 */
const Button = (props) => {
  const {className, onClick, value} = props;
  return (
    <>
    <button className={className} onClick={onClick}>{value}</button>
    </>
  );
}

export default Button;

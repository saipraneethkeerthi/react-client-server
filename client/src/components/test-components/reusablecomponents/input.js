import React from 'react';

const Input = (props) => {
  const {lable, placeholder, type, className, onChange, value, err} = props;

  return (
    <>
    <label for="in" style={{float:"left", fontWeight: "bold"}}>{lable}</label>
    <input placeholder={placeholder} id="in" type={type} className={className} onChange={onChange} value={value}/>
    <p className="text-danger text-start fw-bold m-2" style={{fontSize:"10px"}}>{err}</p>
    </>
  );
}

export default Input;

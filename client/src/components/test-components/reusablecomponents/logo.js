import React from 'react';

import LogoImg from "../../../images/logo.png";

const Logo = (props) => {
  const {width, height, className} = props
  return (
    <>
      <img style={{width:width, height:height}} src={LogoImg} className = {className}/>
      {/* <i class={iconName} onclick={() => window.location.href="./"}></i> */}
    </>
  );
}

export default Logo;
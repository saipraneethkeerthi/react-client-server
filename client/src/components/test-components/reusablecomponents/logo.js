import React from 'react';

import LogoImg from "../../../images/logo.png";

const Logo = (props) => {
  const {width, height} = props
  return (
    <>
      <img style={{width:width, height:height}} src={LogoImg}/>
      {/* <i class={iconName} onclick={() => window.location.href="./"}></i> */}
    </>
  );
}

export default Logo;
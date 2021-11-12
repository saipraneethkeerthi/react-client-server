import React from 'react';

import Logo from "../../images/logo.png";

const Logo = (props) => {
  const {width, height} = props
  return (
    <>
      <img style={{width:width, height:height}} src={Logo}/>
      {/* <i class={iconName} onclick={() => window.location.href="./"}></i> */}
    </>
  );
}

export default Logo;
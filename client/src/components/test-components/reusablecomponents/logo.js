import React from 'react';

import Logoimg from "../../images/logo.png";

const Logo = (props) => {
  const {width, height} = props
  return (
    <>
      <img style={{width:width, height:height}} src={Logoimg}/>
      {/* <i class={iconName} onclick={() => window.location.href="./"}></i> */}
    </>
  );
}

export default Logo;
import React from 'react';

const Logo = (props) => {
  const {iconName} = props
  return (
    <>
      <i class={iconName} onclick={() => window.location.href="./"}></i>
    </>
  );
}

export default Logo;
import React from 'react';
import {Link} from 'react-router-dom';

const Hyperlinks = (props) => {
  const {referTo, text, textSize, className} = props;
  return (
    <>
      <Link to={referTo}><p className={className} style={{fontSize:textSize}}>{text}</p></Link>
    </>
  );
}

export default Hyperlinks;

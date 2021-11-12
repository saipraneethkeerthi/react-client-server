import React from 'react';
import {Link} from 'react-router-dom';
/**
 * 
 * @param {*} props 
 * @returns Link router tag which will redirect to the other pages
 */
const Hyperlinks = (props) => {
  const {referTo, text, textSize, className} = props;
  return (
    <>
      <Link to={referTo}><p className={className} style={{fontSize:textSize}}>{text}</p></Link>
    </>
  );
}

export default Hyperlinks;

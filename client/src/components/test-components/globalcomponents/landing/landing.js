import React from 'react';

import {Link} from 'react-router-dom'
import Logo from '../../reusablecomponents/logo'

/**
 * Routing of /Landing page.
 * @returns {jsx} returns jsx landing page.
 */

const Landing = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="card text-center shadow-lg p-5 col-6">
          <Logo iconName="fab fa-google-wallet fa-5x m-3"/>
          <div className="form d-flex flex-column mt-2">
            <Link to="/login" className="btn btn-primary mb-2">Login</Link>
            <Link to="/signup" className="btn btn-danger">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;

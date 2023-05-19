import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link className="text-dark" to="/">
          
        </Link>
       
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="button btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

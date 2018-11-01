import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding, by } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success  mb-3 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding} <span className="text-white-50 ml-2">By: {by}</span>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My APP'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired
};

export default Header;

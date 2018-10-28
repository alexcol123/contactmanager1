import React from 'react';
import '../App.css';

const Header = props => {
  const { branding, by } = props;
  return (
    <div className="header">
      <h1>{branding}</h1>
      <p>By: {by}</p>
    </div>
  );
};

export default Header;

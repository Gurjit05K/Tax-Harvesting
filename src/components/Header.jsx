import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>KoinX</h1>
        </div>
        <div className="header-title">
          <h2>Tax Harvesting</h2>
          <a href="#" className="how-it-works" onClick={(e) => e.preventDefault()}>
            How it works? →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
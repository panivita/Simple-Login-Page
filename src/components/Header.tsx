import React from "react";

const Header = () => {
  return (
    <header  className="header-container">
        <div className="navbar-container">
          <a href="/">Login</a>
          <a href="/accounts">Accounts</a>
          <a href="/support">Support</a>
        </div>
    </header>
  );
};

export default Header;

import React from "react";

const Header = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <header className="header-container">
      {!loggedIn ? (
        <div className="navbar-container">
          <a href="/login">Login</a>
          <p>Accounts</p>
          <p>Support</p>
        </div>
      ) : (
        <div className="navbar-container">
          <p>Log Out</p>
          <a href="/accounts">Accounts</a>
          <a href="/support">Support</a>
        </div>
      )}
    </header>
  );
};

export default Header;

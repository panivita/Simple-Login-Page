const Header = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <header className='header-container'>
      <div className='navbar-container'>{!loggedIn ? <a href='/login'>Login</a> : <p>Log Out</p>}</div>
    </header>
  );
};

export default Header;

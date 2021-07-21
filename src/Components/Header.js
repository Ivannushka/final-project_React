import { NavLink } from 'react-router-dom';
import logo from '../Visual/Images/logo1.png';
import '../Visual/Css/style.css';
import { useState } from 'react';

function Header() {
 const [mainMenuVisible, setMainMenuVisible] = useState(true);
  const toggleMainMenu = () => {
    setMainMenuVisible(!mainMenuVisible);
  };
  let mainMenuClasses = 'collapse navbar-collapse flex flex-row-reverse';
  if (mainMenuVisible) {
    mainMenuClasses += ' show';
  }
  let menuTogglerButtonClasses = 'navbar-toggler';
  if (!mainMenuVisible) {
    menuTogglerButtonClasses += ' collapsed';
  }

  return (
    <nav className="navbar form-inline-end navbar-expand-lg navbar-light bg-transparent bordered1">
      <NavLink exact to="/">
        <img src={logo} width="100%" alt="logo" />
      </NavLink>
      <div className="container-fluid form-inline navbar-right">
        <button
          onClick={toggleMainMenu}
          className={menuTogglerButtonClasses}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={mainMenuClasses} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link " exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/articles">
              Articles
            </NavLink>
            <NavLink className="nav-link" to="/chat">
              Chat
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/aboutus">
              About us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;

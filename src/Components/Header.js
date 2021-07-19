import { NavLink } from 'react-router-dom';
import logo from  '../Visual/Images/logo1.png';
import '../Visual/Css/style.css';
import { useState } from 'react';

// function Header() {
//     return (
    // <div>
    //     <h2>I am Header</h2>
    // </div>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <div className="container-fluid">
    //             <NavLink to="/" className="navbar-brand"><img src={logo} className="logo-img" width="30%" alt="" /></NavLink>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNav">
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item">
    //                         <NavLink exact to="/" className="nav-link">Home</NavLink>
    //                     </li>
    //                     <li className="nav-item">
    //                         <NavLink to="/categories" className="nav-link">Categories</NavLink>
    //                     </li>
    //                     <li className="nav-item">
    //                         <NavLink to="/cart" className="nav-link">Cart</NavLink>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>

//     <div class="head-inner">
//     <div class="head-logo">
//     <img src={logo} className="logo-img" width="30%" alt="" />
//     </div>
// <nav class="navigation" id="navi">
// <a href="index.html" onclick="myFunction(event)" class="linked disabled" id="link-color-changed">Home</a>
// <a href="page2.html" class="linked">Articles</a>
// <a href="page4.html" class="linked">Chat</a>
// <a href="page5.html" class="linked">Register</a>
// <a href="page6.html" class="linked">About us</a>
// </nav>
//   </div>
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
    //   <div className="aligned-right">
        <nav className="navbar form-inline-end navbar-expand-lg navbar-light bg-transparent">
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
    //   </div>
    )
}
export default Header;
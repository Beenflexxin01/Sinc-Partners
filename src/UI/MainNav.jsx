import { NavLink } from "react-router-dom";
import logo from "/Images/logo.png";
import { useState } from "react";
function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <li className="main-nav-li">
            <NavLink
              to="/home"
              className="main-nav-link"
              onClick={toggleOffMenuBar}>
              <img src={logo} alt="Logo" className="logo" />
            </NavLink>
          </li>
          <div className="nav-bar">
            <div
              className={`burger ${isOpen && "open"} `}
              onClick={() => setIsOpen(!isOpen)}>
              <div className="burger_bar"></div>
              <div className="burger_bar bar"></div>
              <div className="burger_bar bar3"></div>
            </div>
            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  About
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  SIP
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  Studio
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  SEEQ
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  Platforms
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  Initiatives
                </NavLink>
              </li>
              <li className="main-nav-li">
                <NavLink
                  to="#"
                  className="main-nav-link"
                  onClick={toggleOffMenuBar}>
                  More
                </NavLink>
              </li>

              <div className="cta-btn">
                <li className="main-nav-li">
                  <NavLink to="#" className="main-nav-link cta">
                    SINC With Us
                  </NavLink>
                </li>
                <li className="main-nav-li">
                  <NavLink to="#" className="main-nav-link cta cta-1">
                    Apply to SIP 1.0
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;

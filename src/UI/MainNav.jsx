import { NavLink } from "react-router-dom";
import logo from "/Images/logo.png";
function MainNav() {
  return (
    <div>
      <nav className="main-nav">
        {/* <img src={logo} alt="Logo" className="logo" /> */}

        <ul className="main-nav-ul">
          <li className="main-nav-li">
            <NavLink to="/home" className="main-nav-link">
              <img src={logo} alt="Logo" className="logo" />
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              About
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              SIP
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              Studio
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              SEEQ
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              Platforms
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
              Initiatives
            </NavLink>
          </li>
          <li className="main-nav-li">
            <NavLink to="#" className="main-nav-link">
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
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;

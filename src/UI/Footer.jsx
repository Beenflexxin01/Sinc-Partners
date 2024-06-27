import logo from "/Images/footer-logo.png";
import acc from "/Images/acc.png";
import whatsapp from "/Images/whatsapp.png";
import gasus from "/Images/gasus.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <h2 className="secondary-header footer-h2">Newsletter</h2>
          <p className="text">
            Get the latest about SINC Partners, our startup incubator program,
            Portfolio company offerings - straight into your inbox
          </p>
          <div className="form">
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            <button className="btn cta cta-1 sub">Subscribe</button>
          </div>
          <hr className="hr" />
          <div className="grid-5">
            <div className="grid-5-cols fff">
              <img src={logo} alt="" className="footer-logo" />
              <p className="footer-text">
                SINC Partners is a service incubation company connecting experts
                in product development and growth marketing willing to offer
                their services to amazing startups in exchange for minute equity
                (usually 0.5% to 2%)
              </p>
            </div>
            <div className="grid-5-cols">
              <nav className="footer-nav">
                <ul className="footer-nav-u">
                  <li className="footer-nav-li cl">Platforms</li>
                  <li className="footer-nav-li">Kofoundme</li>
                  <li className="footer-nav-li">InResidency</li>
                  <li className="footer-nav-li">Service Market</li>
                  <li className="footer-nav-li">Founders School</li>
                  <li className="footer-nav-li">Metty</li>
                  <li className="footer-nav-li">Grantty</li>
                  <li className="footer-nav-li">Boldtell</li>
                  <li className="footer-nav-li">Chekwa</li>
                </ul>
              </nav>
            </div>
            <div className="grid-5-cols">
              <nav className="footer-nav">
                <ul className="footer-nav-u">
                  <li className="footer-nav-li cl">Initiatives</li>
                  <li className="footer-nav-li">Jabi Plains</li>
                  <li className="footer-nav-li">Local Pricing Initiative</li>
                  <li className="footer-nav-li">Schorlaship Program</li>
                  <li className="footer-nav-li">SSMN Pricing</li>
                  <li className="footer-nav-li">University STEM</li>
                  <li className="footer-nav-li">University InResidency</li>
                  <li className="footer-nav-li">1M Nigeria Products</li>
                  <li className="footer-nav-li">Founders Festival</li>
                </ul>
              </nav>
            </div>
            <div className="grid-5-cols">
              <nav className="footer-nav">
                <ul className="footer-nav-u">
                  <li className="footer-nav-li cl">About Us</li>
                  <li className="footer-nav-li">Who We Are</li>
                  <li className="footer-nav-li">Our People</li>
                  <li className="footer-nav-li">Concept Innovations</li>
                  <li className="footer-nav-li">Our Process</li>
                  <li className="footer-nav-li">Investor Network</li>
                  <li className="footer-nav-li">CSR & Events</li>
                  <li className="footer-nav-li">Career</li>
                  <li className="footer-nav-li">Contact</li>
                </ul>
              </nav>
            </div>
            <div className="grid-5-cols">
              <nav className="footer-nav">
                <ul className="footer-nav-u">
                  <li className="footer-nav-li cl">More</li>
                  <li className="footer-nav-li">Services</li>
                  <li className="footer-nav-li">Equity Jobs</li>
                  <li className="footer-nav-li">EIR Program</li>
                  <li className="footer-nav-li">Offers</li>
                  <li className="footer-nav-li">Innovation News</li>
                  <li className="footer-nav-li">FAQ</li>
                  <li className="footer-nav-li">Blog & Resources</li>
                  <li className="footer-nav-li">Press</li>
                </ul>
              </nav>
            </div>

            <div className="grid-5-cols loc">
              <nav className="footer-nav">
                <ul className="footer-nav-u">
                  <li className="footer-nav-li">Locations</li>
                  <li className="footer-nav-li">Abuja, Nigeria</li>
                  <li className="footer-nav-li">Lagos, Nigeria</li>
                  <li className="footer-nav-li">Philadelphia, USA</li>
                </ul>
              </nav>
              <div className="flex">
                <img
                  src={acc}
                  alt="Accreduted Business A+"
                  className="footer-img"
                />
                <img src={whatsapp} alt="Contact Us" className="footer-img" />
              </div>
            </div>
          </div>
          <hr />
          <div className="grid2">
            <div className="grid-2-cols">
              <p className="footer-text fp">
                Guaranteed 2x on your service or cash investment, usually been
                the first to invest.{" "}
                <span className="sp">Get in early and SINC your guaranty!</span>
              </p>
            </div>
            <div className="grid-2-cols">
              <div className="flex gas">
                <img src={gasus} alt="" className="footer-img" />
                <p className="footer-text">
                  We are a business built on the foundation of Christian values
                  and belief
                </p>
              </div>
            </div>
          </div>
          <div className="grid2">
            <div className="grid-2-cols">
              <p className="footer-text">
                &copy; 2023 SINC Partners Ltd. All rights reserved
              </p>
            </div>
            <div className="footer-nav footer--nav">
              <ul className="footer-nav-ul fot">
                <li className="footer-nav-li">
                  <NavLink to="#" className="nav-link footer-link">
                    <span>Privacy Policy</span>
                  </NavLink>
                </li>

                <li className="footer-nav-li">
                  <NavLink to="#" className="nav-link footer-link">
                    <span>Terms of Service</span>
                  </NavLink>
                </li>

                <li className="footer-nav-li">
                  <NavLink to="#" className="nav-link footer-link">
                    <span>Security</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="grid-2-cols">
              <div className="flex icons">
                <FaFacebook size={"24px"} />
                <FaTwitter size={"24px"} />
                <FaInstagram size={"24px"} />
                <FaLinkedin size={"24px"} />
                <FaYoutube size={"24px"} />
              </div>
            </div>
          </div>
          <p className="web">Web in Nigeria</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React, { useRef, useState } from "react";

import Logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <header
      className={`header-area header-sticky wow slideInDown `}
      // background-header
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                <img src={Logo} alt="Chain App Dev" />
              </a>
              {/* <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** --> */}
              <ul className={`nav`}>
                <li className="scroll-to-section">
                  <a className="active">Home</a>
                </li>
                <li className="scroll-to-section">
                  <a>Services</a>
                </li>
                <li className="scroll-to-section">
                  <a>About</a>
                </li>
                <li className="scroll-to-section">
                  <a>Pricing</a>
                </li>
                <li className="scroll-to-section">
                  <a>Newsletter</a>
                </li>
                <li>
                  <div className="gradient-button">
                    <a id="modal_trigger">
                      <i className="fa fa-sign-in-alt"></i> Sign In Now
                    </a>
                  </div>
                </li>
              </ul>
              <a className={`menu-trigger`}>
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

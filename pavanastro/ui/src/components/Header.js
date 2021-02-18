import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header class="main-header">
      <div class="container">
        <div class="logo">
          {" "}
          <a href="#.">
            {" "}
            <img src="/static/images/logo.png" alt="Sprint Logo" />
          </a>{" "}
        </div>
        {/* Nav */}
        <nav>
          <ul id="ownmenu" class="ownmenu">
            <li class="active">
              <Link to="/"> HOME</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link to="/blogs/1">blog</Link>
            </li>
            <li>
              <Link to="/contact">contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

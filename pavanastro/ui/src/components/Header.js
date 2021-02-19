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
            <li class={props.active === "home" ? "active" : ""}>
              <Link to="/"> HOME</Link>
            </li>
            <li class={props.active === "about" ? "active" : ""}>
              <Link to="/about">about us</Link>
            </li>
            <li class={props.active === "services" ? "active" : ""}>
              <Link to="/services">services</Link>
            </li>
            <li class={props.active === "portfolio" ? "active" : ""}>
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li class={props.active === "blog" ? "active" : ""}>
              <Link to="/blogs/1">blog</Link>
            </li>
            <li class={props.active === "contact" ? "active" : ""}>
              <Link to="/contact">contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

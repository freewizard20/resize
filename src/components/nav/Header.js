import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <img id="logo" src="logo.png" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default Header;

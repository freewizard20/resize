import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <span className="copyright">© 2020 freewizard.net</span>
      <ul className="footer-link">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tos">Terms of Service</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

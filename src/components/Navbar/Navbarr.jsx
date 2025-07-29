import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from 'react-icons/im';

import "./Navbar.scss";
import logo from "../../assets/logo.png";

function Navbarr() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Krishna Cooking" className="navbar-logo" />
        </Link>
      </div>

      {/* Top-right toggle icon */}
      <div className="menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </div>

      {/* Menu links */}
      <ul className={mobile ? "nav-links nav-links-mobile" : "nav-links"}>
        <li><Link to="/" onClick={() => setMobile(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMobile(false)}>Products</Link></li>
        <li><Link to="/about" onClick={() => setMobile(false)}>About</Link></li>
        {/* <li><Link to="/productlist" onClick={() => setMobile(false)}>ProductsList</Link></li> */}
        <li><Link to="/contact" onClick={() => setMobile(false)}>Contact</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbarr;



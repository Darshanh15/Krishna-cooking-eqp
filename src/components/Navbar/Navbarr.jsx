// import React from 'react'
// import { Navbar, Nav, } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import './Navbar.scss'

// import logo from '../../assets/logo.png'
// function Navbarr() {
//   return (
//     <nav className='navbar'>
//         <h3 className='logo'>logo</h3>
//         <img src={logo} alt="krishna cooking" />

//         <ul className="nav-links">
//             <Link to={'/'}><li>Home</li></Link>
//             <Link to={'/about'}><li>About</li></Link>
//             <Link to={'/contact'}><li>Contact</li></Link>
//         </ul>
//     </nav>
//   )
// }

// export default Navbarr


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from 'react-icons/im';

// import "./Navbar.scss";
// import logo from "../../assets/logo.png";

// function Navbarr() {
//   const [Mobile, setMobile] = useState(true);
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//        <Link to="/"><img src={logo} alt="Krishna Cooking" className="navbar-logo" /></Link>
//       </div>

//       <ul  className={Mobile? "nav-link-mobile" : "nav-links"} onClick={() => setMobile(false)}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <button className="menu-icon" onClick={() => setMobile(!Mobile)}>
//           {Mobile? <ImCross /> :  <FaBars />}
         
//         </button>
//       </ul>
//     </nav>
//   );
// }

// export default Navbarr;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from 'react-icons/im';

// import "./Navbar.scss";
// import logo from "../../assets/logo.png";

// function Navbarr() {
//   const [mobile, setMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/">
//           <img src={logo} alt="Krishna Cooking" className="navbar-logo" />
//         </Link>
//       </div>

//       {/* Toggle button */}
//       <div className="menu-icon" onClick={() => setMobile(!mobile)}>
//         {mobile ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Nav links */}
//       <ul className={mobile ? "nav-links nav-links-mobile" : "nav-links"}>
//         <li><Link to="/" onClick={() => setMobile(false)}>Home</Link></li>
//         <li><Link to="/about" onClick={() => setMobile(false)}>About</Link></li>
//         <li><Link to="/contact" onClick={() => setMobile(false)}>Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbarr;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from 'react-icons/im';

import "./Navbar.scss";
import logo from "../../assets/logo.png";

function Navbarr() {
  const [mobile, setMobile] = useState(false);

  return (
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
        <li><Link to="/about" onClick={() => setMobile(false)}>About</Link></li>
        <li><Link to="/products" onClick={() => setMobile(false)}>Products</Link></li>
        <li><Link to="/contact" onClick={() => setMobile(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbarr;

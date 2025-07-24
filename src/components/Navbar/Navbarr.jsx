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
        {/* <li><Link to="/productlist" onClick={() => setMobile(false)}>ProductsList</Link></li> */}
        <li><Link to="/contact" onClick={() => setMobile(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbarr;


// /src/components/Navbar/Navbarr.jsx
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png"; // Replace with your logo path
// import "./Navbar.scss"; // Optional if you add custom styles

// const Navbarr = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" width="120" />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink to="/" className="nav-link" end>Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/about" className="nav-link">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/products" className="nav-link">Products</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/contact" className="nav-link">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbarr;

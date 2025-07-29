import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";


// scss imports
import './style/main.scss'

//componets import
import Navbarr from "./components/Navbar/Navbarr";

// pages import
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails'
import Footer from './components/Footer/Footer';

// import Footer from "./components/Footer/Footer";



function App() {
  return (  
    <>
      <Navbarr />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;



// // /src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbarr from "./components/Navbar/Navbarr";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Products from "./pages/Products/Products";
// import ProductDetails from "./pages/ProductDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbarr />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

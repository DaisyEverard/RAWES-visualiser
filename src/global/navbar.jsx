import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav>
        <Link to="/info" className="nav-link" id="info-link">Info</Link>
        <Link to="/" className="nav-link" id="main-link">Form</Link>
        {/* <Link to="/typePie" className="nav-link" id="pie-link-1">Type Pie</Link>
        <Link to="/valuePie" className="nav-link" id="pie-link-2">Value Pie</Link> */}
  </nav>
}

export default Navbar; 
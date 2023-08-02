import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav>
        <Link to="/info" className="nav-link" id="info-link">Info</Link>
        <Link to="/" className="nav-link" id="main-link">Form</Link>
        <Link to="/stored" className="nav-link" id="stored-link">Stored</Link>
  </nav>
}

export default Navbar; 
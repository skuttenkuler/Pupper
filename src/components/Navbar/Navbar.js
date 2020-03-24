import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                Pupper
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/discover"
                            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
                                Discover
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                                Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
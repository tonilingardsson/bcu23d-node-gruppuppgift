import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/vl-logo.webp";
import ThemeToggle from "./themes/ThemeToggle";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="VoteLedger Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li><Link to="/vote">Vote</Link></li> */}
            <li>
              <Link to="/transaction-form">Transaction</Link>
            </li>
            {/* <li><Link to="/login">Login</Link></li> */}
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/blockchain">Blockchain</Link>
            </li>{" "}
            {/* Add this link */}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

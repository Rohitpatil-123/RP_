import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1 className="animate__animated animate__fadeInUpBig">
              Rohit &nbsp;Patil
            </h1>
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/About">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Outlet />
          </div>
        </nav>
      </header>
    </>
  );
}

import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import logorp from "../Components/images/logorp.png";
export default function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logorp} alt="" style={{ height: "60px", width: "70px" }} />
          &nbsp; RP_WEB
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/newcont">Contact Me</Link>
          </li>
          <Outlet />
        </ul>
      </nav>
    </>
  );
}

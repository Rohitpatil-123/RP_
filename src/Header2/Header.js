import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import logorp from "../Components/images/logorp.png";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <>
      <motion.nav
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
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
            <Link to="/">Home</Link>
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
      </motion.nav>
    </>
  );
}

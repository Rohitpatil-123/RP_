import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section>
        <div className="header-content">
          <h3>
            My Name Is{" "}
            <span style={{ color: "#00b894" }}>Rohit sanjay patil</span>
          </h3>
          <h2>
            I am <span className="change_content"></span>
          </h2>
          <p>
            I am a student at{" "}
            <span style={{ color: "#00b894" }}>
              M.H. Saboo siddiq collage of engineering
            </span>
            <br />
            pusuing my bachlor's of engineering in Information Technology
          </p>
          <Link to="/newcont">
            <button>Contact Me</button>
          </Link>
          <Outlet />
        </div>
      </section>
    </>
  );
}

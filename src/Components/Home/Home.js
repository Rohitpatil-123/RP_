import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <div className="header-content">
          <h2 style={{ textAlign: "center" }}>
            My Name Is{" "}
            <span style={{ color: "#aff3e5" }}>Rohit sanjay patil</span>
          </h2>
          <h2 style={{ textAlign: "center" }}>
            I am <span class="change_content"> </span>
          </h2>
          <p
            style={{ color: "#aff3e5", textAlign: "center", fontSize: "20px" }}
          >
            I am a student at M.H. Saboo siddiq collage of engineering
            <br />
            pusuing my bachlor's of engineering in Information Technology
            <br></br>
            Currently i am Working as a Web Developer Intern At Strugend
          </p>

          <Link to="/newcont">
            <button className="bui">Contact Me</button>
          </Link>
          <Outlet />
        </div>
      </section>
    </>
  );
}

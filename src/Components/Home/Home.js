import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import Resume from "../assets/resume-rohit-new1.pdf";
import Image from "../assets/myphoto-new.png";

export default function Home() {
  return (
    <>
      <section>
        <div className="header-content">
          <div className="hexagon">
            <img src={Image} alt="photo" width="100%" />
          </div>

          <div className="childdiv">
            <h2 style={{ textAlign: "center" }}>
              Hey I am
              <span style={{ color: "#aff3e5" }}>Rohit sanjay patil</span>
            </h2>
            <h2 style={{ textAlign: "center" }}>
              I am <span class="change_content"> </span>
            </h2>
            <p
              style={{
                color: "#aff3e5",

                fontSize: "20px",
              }}
            >
              I am a student at M.H. Saboo siddiq collage of engineering
              <br />
              pusuing my bachlor's of engineering in Information Technology
              <br />I Love Problem Solving i have solved 200+ problems on
              leetcode
              <br></br>
              Currently i am Working as a Web Developer Intern At Strugend
            </p>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <Link to="/newcont">
                <button className="bui">Contact Me</button>
              </Link>
              <a href={Resume} download="Resume">
                <button className="bui" style={{ marginLeft: "20px" }}>
                  Resume
                </button>
              </a>
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

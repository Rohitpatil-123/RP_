import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import Resume from "../assets/resume-rohit-new1.pdf";
import Image from "../assets/myphoto-new.png";
import styled from "styled-components";
import Insta from "../images/insta.png";
import Git from "../images/github.png";
import Twitt from "../images/twitter.png";
import Linked from "../images/linked.png";
import Leetcode from "../assets/LeetCode.png";

export default function Home() {
  const Info = styled.div`
    width: 100%;
    font-size: 10px;
    text-align: center;
    color: #00b894;
    display: flex;
    justify-content: flex-start;
    padding: 15px 0px 0px 0px;
  `;
  return (
    <>
      <section>
        <div className="header-content">
          <div className="hexagon">
            <img src={Image} alt="p" width="100%" style={{ padding: "5px" }} />
          </div>

          <div className="childdiv">
            <h2 style={{ textAlign: "center" }}>
              Hey I am
              <span style={{ color: "#aff3e5" }}>&nbsp;Rohit sanjay patil</span>
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
              pursuing my bachlor's of engineering in Information Technology
              <br />I Love Problem Solving i have solved 200+ problems on
              leetcode
              <br></br>I have Worked as a Web Developer Intern At Strugend and{" "}
              <br />
              Java developer intern At laqshya infotech solution
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
            <Info>
              <a
                href=" https://github.com/Rohitpatil-123"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Git}
                  alt="logo"
                  style={{
                    // maxWidth: "30%",
                    height: "40px",
                  }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rohit-patil-98b920228/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Linked}
                  alt="logo"
                  style={{
                    // maxWidth: "30%",
                    height: "40px",
                  }}
                />
              </a>
              <a
                href="https://leetcode.com/rohittt_45/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Leetcode}
                  alt="logo"
                  style={{
                    // maxWidth: "30%",
                    height: "40px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Insta}
                  alt="logo"
                  style={{
                    // maxWidth: "30%",
                    height: "40px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/05Rohitpatil"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Twitt}
                  alt="logo"
                  style={{
                    // maxWidth: "30%",
                    height: "40px",
                  }}
                />
              </a>
            </Info>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

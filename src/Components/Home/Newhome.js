import React from "react";
import "./Newhome.css";
import Image from "../assets/myphoto-new.png";
import { Outlet, Link } from "react-router-dom";
import Resume from "../assets/resume-rohit-new1.pdf";
import Insta from "../images/insta.png";
import Git from "../images/github.png";
import Twitt from "../images/twitter.png";
import Linked from "../images/linked.png";
import Leetcode from "../assets/LeetCode.png";
import { motion } from "framer-motion";

const Newhome = () => {
  return (
    <motion.div
      className="maindiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="parent">
        <div className="content">
          <div className="heading">
            👋 Hey there! I'm{" "}
            <span style={{ color: "#00b894" }}> Rohit Sanjay Patil</span>
            <div className="heading" style={{ textAlign: "center" }}>
              I am <span class="change_content"> </span>
            </div>
          </div>

          <div className="information">
            <ul style={{ listStyleType: "square" }}>
              <li>
                🎓 Pursuing a Bachelor's degree in Information Technology, I'm
                driven by a curiosity to explore the limitless possibilities of
                the digital realm. My academic pursuits have equipped me with a
                strong foundation in IT concepts and technologies.
              </li>
              <li>
                💡 I love Problem solving and have solved 250+ problems on
                leetcode. I thrive on dissecting challenges and engineering
                effective solutions.
              </li>
              <li>
                🌐 During my exciting journey, I've embarked on internships that
                have honed my skills and expanded my horizons. As a Web
                Developer Intern at Strugend, I delved into the art of crafting
                immersive online experiences. Additionally, my stint as a Java
                Developer Intern at Laqshya Infotech Solutions allowed me to
                dive into the world of backend magic, bringing functionality and
                efficiency to life.
              </li>
            </ul>
          </div>
        </div>
        <div className="meta-content">
          <div className="photo-holder">
            <div className="hex">
              <img
                src={Image}
                alt="cjdjc"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="text-holder">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "5px",
                marginTop: "15px",
              }}
            >
              <Link to="/newcont">
                <button className="bui">Contact Me</button>
              </Link>
              <a href={Resume} download="Resume">
                <button className="bui" style={{ marginLeft: "20px" }}>
                  Resume
                </button>
              </a>
            </div>
            <div className="inf">
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
                    height: "50px",
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
                    height: "50px",
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
                    height: "50px",
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
                    height: "50px",
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
                    height: "50px",
                  }}
                />
              </a>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newhome;

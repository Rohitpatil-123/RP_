import React from "react";
import Html from "../images/html.png";
import Javs from "../images/mongodb.png";
import styled from "styled-components";
import Css from "../images/css.png";
import Javad from "../images/javascript.png";
import Node from "../images/node.png";
import Mysq from "../images/mysq.png";
import Javat from "../images/javat.png";
import Reacth from "../images/reacto.png";
//import Python from "../images/python.png";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transperent;
  color: white;
`;
const Cont = styled.div`
  width: 70%;
  margin: 30px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 2px solid #00b894;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 20px 0 #999;
  }
  @media (max-width: 768px) {
    width: 99%;
  }
`;
const Contro = styled.div`
  width: 100%;

  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Head = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 50px;
`;
const Infor = styled.div`
  width: 100%;
  font-size: 20px;
`;
const Headd = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
`;

export default function About() {
  return (
    <Container>
      <Cont>
        <Headd>
          <h3>
            <span style={{ color: "#00b894" }}>About Me</span>
          </h3>
        </Headd>
        <Infor>
          My name is &nbsp;
          <span
            style={{
              color: "#00b894",
              textAlign: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            ROHIT SANJAY PATIL{" "}
          </span>{" "}
          i am in my Final year pursuing my bachlor's degree in Information
          Technology.
          {/* <br />i had done a&nbsp; */}
          <hr style={{ color: "red", backgroundColor: "#00b894" }} />
          <ul>
            <li>
              <span style={{ color: "#00b894", fontWeight: "bold" }}>
                Internship in 2021-22 oct-mar from laqshya infosoft solution
                Borivali(w)
              </span>
              <br /> during internship i have devloped some javaFX applications
              which i mentioned in projects section. I am always exited and
              intrested to learn new technologies.&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://drive.google.com/file/d/1QjEhtiLYej09SXJnU2tWuQevqI46ZQ57/view">
                {" "}
                <button className="bui">completion letter</button>
              </a>
            </li>
            <br />
            <li>
              <span style={{ color: "#00b894", fontWeight: "bold" }}>
                Internship in 2022-23 dec-mar from Strugend as Web Developer
              </span>
              <br /> during internship i have worked on frontend technology and
              explored frontend frame work like material ui. I am always exited
              and intrested to learn new technologies.&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://drive.google.com/file/d/1Qt-j87z1m_ejGN_lO08I6dbxmXBt4SIL/view?pli=1">
                {" "}
                <button className="bui">completion letter</button>
              </a>
            </li>
          </ul>
        </Infor>
        <Head>
          <h4>
            <span style={{ color: "#00b894" }}>
              Technologies I am familiar with
            </span>
          </h4>
        </Head>
        <Contro>
          <img
            src={Html}
            alt="logo"
            style={{ maxWidth: "30%", height: "120px", marginLeft: "0px" }}
          />
          <img
            src={Css}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "0px" }}
          />
          <img
            src={Javad}
            alt="logo"
            style={{ maxWidth: "30%", height: "100px", marginLeft: "0px" }}
          />
          <img
            src={Javs}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "0px" }}
          />
          <img
            src={Node}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "0px" }}
          />
          <img
            src={Reacth}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "5px" }}
          />
          <img
            src={Mysq}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "5px" }}
          />
          <img
            src={Javat}
            alt="logo"
            style={{ maxWidth: "30%", height: "110px", marginLeft: "20px" }}
          />
        </Contro>
      </Cont>
    </Container>
  );
}

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
  background-color: black;
  color: white;
`;
const Cont = styled.div`
  width: 70%;
  margin: 30px;
  padding: 10px;
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
`;
const Head = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 50px;
`;
const Infor = styled.div`
  width: 100%;

  text-align: center;
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
          <span style={{ color: "#00b894" }}>ROHIT SANJAY PATIL </span> i am in
          my third year pursuing my bachlor's degree in information technology.
          <br />i had done a&nbsp;
          <span style={{ color: "#00b894" }}>
            internship in laqshya infosoft solution Borivali(w)
          </span>
          &nbsp; during internship i have devloped some javaFX applications
          which i mentioned in projects section. I am always exited and
          intrested to learn new technologies.
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

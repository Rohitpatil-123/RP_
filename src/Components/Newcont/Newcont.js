import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Insta from "../images/insta.png";
import Git from "../images/github.png";
import Twitt from "../images/twitter.png";
import Linked from "../images/linked.png";
//import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;
const Minicont = styled.div`
  width: 50%;
  border: 2px solid #00b894;
  height: 600px;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 20px 0 #999;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
`;
const Head = styled.div`
  width: 100%;
  height: 65px;

  color: #00b894;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;
const For = styled.div`
  width: 100%;

  margin-top: 5px;
`;
const Info = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  color: #00b894;
`;

export default function Newcont() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2hcfxk5",
        "template_w8m4rbs",
        e.target,
        "ZTrJhdKiGfDbcWtul"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container>
      <Minicont>
        <Head>Contact Me</Head>
        <For>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="input-field"
              name="name"
              placeholder="  Enter the name here"
            />

            <input
              type="email"
              className="input-field"
              name="user_mail"
              placeholder=" Enter the Email here"
            />

            <textarea
              name="message"
              className="input-field textarea-field"
              placeholder=" Enter the Message here"
            />
            <input type="submit" className="btn" value="send" />
          </form>
        </For>
        <Info>
          Follow Me On :
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src={Insta}
              alt="logo"
              style={{ maxWidth: "30%", height: "60px", marginLeft: "10px" }}
            />
          </a>
          <a
            href=" https://github.com/Rohitpatil-123"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Git}
              alt="logo"
              style={{ maxWidth: "30%", height: "60px", marginLeft: "10px" }}
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
              style={{ maxWidth: "30%", height: "60px", marginLeft: "10px" }}
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
              style={{ maxWidth: "30%", height: "60px", marginLeft: "10px" }}
            />
          </a>
        </Info>
      </Minicont>
    </Container>
  );
}

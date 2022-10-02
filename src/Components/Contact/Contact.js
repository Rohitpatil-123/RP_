import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
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
    <>
      <div className="rot">
        <h1 className="ho">Contact Me</h1>
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
      </div>
    </>
  );
}

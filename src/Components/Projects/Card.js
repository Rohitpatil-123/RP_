import React from "react";
import "./Card.css";
//import Pic from "./pic1.jpg";
//import Picr from "../images/libr.jpg";

export default function Card(props) {
  return (
    <>
      <div className="box">
        <div className="heading">
          <h2>{props.title}</h2>
        </div>
        <img src={props.picr} alt="" />
        <div className="text">
          <p>{props.text}</p>
          <p>{props.textt}</p>
          <p>{props.texta}</p>
          <p>{props.textr}</p>
          <a href={props.url}>
            <button className="bui">Know more</button>
          </a>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Card from "./Card";
import "./Container.css";
import Picr from "../images/libr.jpg";
import Voic from "../images/voice.jpg";
import Hosp from "../images/hosp.jpg";
import Resum from "../images/resum.png";
import Ecom from "../images/ecom.png";
import You from "../images/youtube.png";
import News from "../images/news.png";

export default function Container() {
  return (
    <>
      <div className="container">
        <Card
          title="E-commerce Application"
          text="this project was create using React, mongodb , express, node complete mern stact Application"
          textt="multiple users can use this website."
          texta="admin dashboard also implemented."
          textr="implemented user authentication with jwt token."
          url="https://rcom.onrender.com/"
          picr={Ecom}
        />
        <Card
          title="Youtube Clone"
          text="this project was create using React and from data i have used rapid api"
          textt="A user can search perticular video and it will play"
          texta="it plays video without any adds so if you want to watch videos without add then you can prefer this"
          textr="this website is user friendly/responsive"
          picr={You}
          url="https://youtube-clone-sable-eight.vercel.app/"
        />
        <Card
          title="News Mania"
          text="this project was create using React and from data i have used rapid api"
          textt="A user can search perticular video and it will play"
          texta="it plays video without any adds so if you want to watch videos without add then you can prefer this"
          textr="this website is user friendly/responsive"
          picr={News}
          url="https://newsmenia.netlify.app/"
        />
        <Card
          title="Voice assistant"
          text="this project was create using java, javaFX and for voice i have use FreeTTS library"
          textt="A user can enter the text in the text box and after clicking on speak button whatever text is written in the text box is converted into voice "
          texta="this kind of system which can be used in raliway anouncement"
          textr="you should have to import freeTTS library "
          picr={Voic}
        />
        <Card
          title="Resume Builder"
          text="this project was create using HTML, CSS, Bootstrap and for backend i have used javascript "
          textt="i have added only one templet "
          texta="after adding all the details user can print or download their resume"
          url="https://resume-builer.netlify.app/"
          picr={Resum}
        />
        <Card
          title="library management system"
          text="this project was create using java, swing and for backend i have used java JDBC to store the data in MYSOL "
          textt="two users can use this application one is admin and another one is librarian"
          texta="admin can add librarians manage the records of librarian."
          textr="librian can manage book records like add book to library,delete a book,issue a book to student,return a book etc."
          url="https://github.com/Rohitpatil-123/library_management_system"
          picr={Picr}
        />

        <Card
          title="Hospital management system"
          text="this project was create using java, swing and for backend i have used java JDBC to store the data in MYSOL "
          textt="hospitan receptionist can use this application for entering the data of patient"
          texta="receptionist can set an appointment of doctor"
          textr="receptionist can manage all the details of patient link adding a patient update the data of patient"
          picr={Hosp}
        />
      </div>
    </>
  );
}

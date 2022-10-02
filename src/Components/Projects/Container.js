import React from "react";
import Card from "./Card";
import "./Container.css";
import Picr from "../images/libr.jpg";
import Voic from "../images/voice.jpg";
import Hosp from "../images/hosp.jpg";
import Resum from "../images/resum.png";

export default function Container() {
  return (
    <>
      <div className="container">
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
          title="Voice assistant"
          text="this project was create using java, javaFX and for voice i have use FreeTTS library"
          textt="A user can enter the text in the text box and after clicking on speak button whatever text is written in the text box is converted into voice "
          texta="this kind of system which can be used in raliway anouncement"
          textr="you should have to import freeTTS library "
          picr={Voic}
        />
        <Card
          title="Hospital management system"
          text="this project was create using java, swing and for backend i have used java JDBC to store the data in MYSOL "
          textt="hospitan receptionist can use this application for entering the data of patient"
          texta="receptionist can set an appointment of doctor"
          textr="receptionist can manage all the details of patient link adding a patient update the data of patient"
          picr={Hosp}
        />
        <Card
          title="Resume Builder"
          text="this project was create using HTML, CSS, Bootstrap and for backend i have used javascript "
          textt="i have added only one templet "
          texta="after adding all the details user can print or download their resume"
          picr={Resum}
        />
      </div>
    </>
  );
}

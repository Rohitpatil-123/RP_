import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Container from "./Components/Projects/Container";
import Newcont from "./Components/Newcont/Newcont";
import { Toaster } from "react-hot-toast";
import "../src/Components/Projects/Container.css";

import Header from "./Header2/Header";
import Newhome from "./Components/Home/Newhome.js";

export default function App() {
  return (
    <Routers>
      <Header />

      <Routes>
        <Route path="/" element={<Newhome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Container />}></Route>
        <Route path="/newcont" element={<Newcont />}></Route>
        <Route path="/demo" element={<Newhome />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </Routers>
  );
}

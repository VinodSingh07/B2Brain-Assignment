import React from "react";
import "./Home.css";
import { images } from "../constants";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Section from "./Section";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="section">
        <Header />
        <div className="main-section">
          <Section />
        </div>
      </div>
    </div>
  );
};

export default Home;

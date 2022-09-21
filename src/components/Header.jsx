import React from "react";
import { useEffect, useContext } from "react";
import { images } from "../constants";
import "./Home.css";
import { useGlobalContext } from "../context";

const Header = () => {
  const { hits, company, slug } = useGlobalContext();

  return (
    <div className="header">
      <img src={images.search} />
      <input
        value={hits.map((curPost) => {
          return <h2>{curPost.company}</h2>;
        })}
        placeholder="Search by account name or website"
      />
      <img src={images.logo2} />
    </div>
  );
};

export default Header;

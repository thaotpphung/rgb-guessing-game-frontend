import React from "react";
import "./Header.css";

const Header = ({colorValue, headingColor}) => {
    return (
      <div
        className="heading"
        style={{ backgroundColor: headingColor }}
      >
        <h3>
          The Great
          <br/>
          <span className="colorHeading">{colorValue}</span>
          <br/>
          Color Game
        </h3>
      </div>
    );
  };


export default Header;

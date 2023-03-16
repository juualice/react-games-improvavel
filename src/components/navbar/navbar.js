import React from "react";
import "./navbar.css";
import logo from "../../assets/logo-improvavel.svg";
import buzzerButton from "../../assets/buzzer-button.svg";
import bellButton from "../../assets/bell-button.svg";

const Navbar = ({ onMouseUp, onMouseDown, onClick, onTouchStart, onTouchEnd }) => {
  return (
    <header className="navbar paper-shadow grid" id="header">
      <div />
      <div className="d-flex justify-space-between noSelect">
        <img src={logo} alt="" width="192" />
        <div>
          <img
            alt=""
            className="bellButton noSelect"
            src={bellButton}
            onClick={onClick}
            height="32"
          />
          <img
            alt=""
            className="buzzerButton noSelect"
            src={buzzerButton}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            height="32"
          />
        </div>
      </div>
      <div />
    </header>
  );
};

export default Navbar;

import React from "react";
import "./games.css";
import { Link } from "react-scroll";

const Games = ({
  title,
  paperImage,
  buttonName,
  buttonIcon,
  onClick,
  playMusic,
  className,
  gameTheme,
}) => {
  return (
    <>
      {title && (
        <div
          className={`paper d-flex flex-column justify-center align-center text-center paper-shadow ${className}`}
        >
          <h3 className="m-0 my-1" style={{ whiteSpace: "pre-wrap" }}>
            {title}
          </h3>
          {paperImage && (
            <img src={paperImage} alt="" width="128px" className="my-1" />
          )}
          <div className="d-flex justify-center align-center w-100">
            {buttonName && (
              <Link className="w-100" to="header" smooth={true} duration={300}>
                <button className="customButton" onClick={onClick}>
                  {buttonName}
                </button>
              </Link>
            )}
            {buttonIcon && (
              <Link
                className="musicButton w-20"
                to="header"
                smooth={true}
                duration={300}
              >
                <button
                  className={`customButton iconStyle ${buttonIcon}`}
                  onClick={playMusic}
                ></button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Games;

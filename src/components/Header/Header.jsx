import React from "react";
import header from "./Header.module.css";

const Header = () => {
  return (
    <header className={header.header}>
      <img
        src="https://stickker.net/wp-content/uploads/2016/02/react-black.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;

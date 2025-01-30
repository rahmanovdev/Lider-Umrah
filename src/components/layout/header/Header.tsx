import React from "react";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header_start}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

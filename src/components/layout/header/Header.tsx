import React from "react";
import scss from "./Header.module.scss";
import logo from "../../../../public/assets/images/logo.svg";
import Image from "next/image";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header_start}>
            <Image
              src={logo}
              alt="Logo Lider Umarh"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <div className={scss.line}></div>
          </div>
          <div className={scss.header_nav}>
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Тур пакеты</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Полезная информация</a>
              </li>
            </ul>
          </div>
          <div className={scss.header_end}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "26px",
              }}
            >
              <div className={scss.line}></div>
              <div className={scss.contact}>
                <IoCall />
                <a href="tel:+7 (999) 999-99-99">+996 700-18-82-51</a>
              </div>
              <div className={scss.line}></div>
            </div>

            <div className={scss.language}>
              <div className={scss.line_second}></div>
              <li>
                <a href="#">Русский</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

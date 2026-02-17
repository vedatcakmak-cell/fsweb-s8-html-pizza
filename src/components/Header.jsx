import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Teknolojik Yemekler Logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Anasayfa
        </Link>
        <Link to="/order" className="header__link">
          Sipariş Oluştur
        </Link>
      </nav>
    </header>
  );
};

export default Header;

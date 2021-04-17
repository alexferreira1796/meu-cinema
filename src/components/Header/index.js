import React from "react";
import "./styles.css";
import logo from "../../assets/Meu-Cinema.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="Meu Cinema" />
      </Link>
      <Link className="favoritos" to="/">
        Favoritos
      </Link>
    </header>
  );
};

export default Header;

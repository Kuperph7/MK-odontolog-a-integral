import React from "react";
import "../styles/layouts/UIHeader.scss";
import { UIButton } from "./UIButton";

export default function Header() {
  return (
    <div>
      <div className="header" id="home">
        <div className="header-logo">
          <img
            className="img"
            src="https://media.discordapp.net/attachments/471728116692156428/1018963642932281354/MK_LOGO.png?width=666&height=676"
            alt=""
          />
          <h2>MKODONTOLOGÍA</h2>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#servicios" className="relleno">
                Servicios
              </a>
            </li>
            <li>
              <a href="#acerca" className="relleno">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="relleno">
                Ubicación
              </a>
            </li>
            <UIButton />
          </ul>
        </nav>
      </div>
    </div>
  );
}

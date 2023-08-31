import "../styles/layouts/UIHeader.scss";
import { UIButton } from "./UIButton";
import UIIconNavBar from "./UIIconNavBar";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
          <ul ref={navRef}>
            <li>
              <a href="#home" className="home" onClick={showNavBar}>
                Home
              </a>
            </li>
            <li>
              <a href="#servicios" className="relleno" onClick={showNavBar}>
                Servicios
              </a>
            </li>
            {/* <li>
              <a href="#acerca" className="relleno" onClick={showNavBar}>
                Acerca de
              </a>
            </li> */}
            <li>
              <a href="#ubicacion" className="relleno" onClick={showNavBar}>
                Ubicación
              </a>
            </li>
            <UIButton />
          </ul>
        </nav>
        <div className="burguer" onClick={showNavBar}>
          <UIIconNavBar />
        </div>
      </div>
    </div>
  );
}

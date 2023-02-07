import { UIButton } from "./UIButton";
import "../styles/components/UIHero.scss";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>
          ¡Solo sonreí, <br /> nosotros nos encargamos!
        </h2>
        <h2 className="hero-text-name">
          Nunca está de más cuidar tu <b>salud dental</b>
        </h2>
        <p className="hero-text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud .
        </p>
        <UIButton />
      </div>

      <div className="hero-image">
        <img
          src="https://img.freepik.com/fotos-premium/mujer-feliz-mostrando-algo-sobre-fondo-blanco_470178-14086.jpg?w=2000"
          alt=""
        />
      </div>
    </div>
  );
}

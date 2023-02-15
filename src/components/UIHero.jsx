import { UIButton } from "./UIButton";
import "../styles/components/UIHero.scss";

export default function UIHero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2 className="hero-text-title">
          ¡Solo sonreí, <br /> nosotros nos encargamos!
        </h2>
        <h2 className="hero-text-name">
          Nunca está de más cuidar tu <b>salud dental</b>
        </h2>
        <p className="hero-text-paragraph">
          En MK odontología brindamos la mejor atención a nuestros pacientes.
          Contamos con el mejor equipo de profesionales y excelentes
          instalaciones para brindar el mejor de los servicios.
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

import "../styles/components/UIUbicacion.scss";
import UIMaps from "./UIMaps";

export function UIUbicacion() {
  return (
    <div className="ubicacion-content" id="ubicacion">
      <div className="ubicacion-content-titles">
        <h2>Ubicación</h2>
        <p>Nos encontramos en José Bonifacio 931, C1424 CABA</p>
      </div>
      <div className="ubicacion-content-proyects">
        <UIMaps />
      </div>
    </div>
  );
}

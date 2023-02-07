import "../styles/components/UIStaff.scss";
import UIStaffCard from "./UIStaffCard";

export function UIStaff() {
  return (
    <div className="staff-content">
      <div className="staff-content-titles">
        <h2>Staff</h2>
      </div>
      <div className="staff-content-proyects">
        <UIStaffCard
          image="https://medios.uchceu.es/actualidad-ceu/wp-content/uploads/sites/2/2020/07/maria-alumnaodontologiaceu-scaled.jpg"
          name="Vanina Minervini"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis. Aliquam viverra nisl sapien accumsan etiam
            at, enim montes lacinia convallis pellentesque nam augue, dignissim
            ullamcorper vivamus dictumst mus."
        />
        <UIStaffCard
          image="https://m9p8e5u6.rocketcdn.me/wp-content/uploads/2019/04/shutterstock_Nestor-Rizhniak.jpg"
          name="Oscar Ocampos"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis. Aliquam viverra nisl sapien accumsan etiam
            at, enim montes lacinia convallis pellentesque nam augue, dignissim
            ullamcorper vivamus dictumst mus."
        />
        <UIStaffCard
          image="https://www.cmolaflorida.com/images/equipo/med_width_1659346699ariadna-dentista.jpg"
          name="Camila Jiorjieva"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis. Aliquam viverra nisl sapien accumsan etiam
            at, enim montes lacinia convallis pellentesque nam augue, dignissim
            ullamcorper vivamus dictumst mus."
        />
        <UIStaffCard
          image="https://yt3.googleusercontent.com/amA2qRpg3ItU9h04goS5486Iz-l89h5fxBMqOZXO3kAhikcvLyuvWiJstD5U0SOYI2wZEiAOzg=s900-c-k-c0x00ffffff-no-rj"
          name="Odonotologa extra"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis. Aliquam viverra nisl sapien accumsan etiam
            at, enim montes lacinia convallis pellentesque nam augue, dignissim
            ullamcorper vivamus dictumst mus."
        />
      </div>
    </div>
  );
}

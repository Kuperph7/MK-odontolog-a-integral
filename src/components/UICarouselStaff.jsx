import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UIStaffCard from "./UIStaffCard";
import "../styles/components/UICarouselCards.scss";
import "../styles/components/UICarouselStaff.scss";

export default function UICarouselStaff() {
  return (
    <div className="carouselStaff">
      <Carousel>
        <div className="carouselStaff-content">
          <UIStaffCard
            image="https://medios.uchceu.es/actualidad-ceu/wp-content/uploads/sites/2/2020/07/maria-alumnaodontologiaceu-scaled.jpg"
            name="Vanina Minervini"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
        <div>
          <UIStaffCard
            image="https://m9p8e5u6.rocketcdn.me/wp-content/uploads/2019/04/shutterstock_Nestor-Rizhniak.jpg"
            name="Oscar Ocampos"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
        <div>
          <UIStaffCard
            image="https://www.cmolaflorida.com/images/equipo/med_width_1659346699ariadna-dentista.jpg"
            name="Camila Jiorjieva"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
        <div>
          <UIStaffCard
            image="https://yt3.googleusercontent.com/amA2qRpg3ItU9h04goS5486Iz-l89h5fxBMqOZXO3kAhikcvLyuvWiJstD5U0SOYI2wZEiAOzg=s900-c-k-c0x00ffffff-no-rj"
            name="Odonotologa extra"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
      </Carousel>
    </div>
  );
}

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
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8e722e163875671.63ed25ed69c2e.jpeg"
            name="Oscar Ocampos"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
        {/* <div>
          <UIStaffCard
            image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4ca56b163875703.63ed26088734a.jpeg"
            name="Odontologo 2"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div> */}
        <div>
          <UIStaffCard
            image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70e93b163875743.63ed262427deb.jpeg"
            name="Laura Diez"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
        <div>
          <UIStaffCard
            image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ddf18163875795.63ed26438d409.jpeg"
            name="German Luques"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
          />
        </div>
      </Carousel>
    </div>
  );
}

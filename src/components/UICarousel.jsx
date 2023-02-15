import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UICards from "./UICards";
import "../styles/components/UICarouselCards.scss";

export default function UICarousel() {
  return (
    <div className="carousel">
      <Carousel>
        <div>
          <UICards
            title="ORTODONCÍA"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <span className="point"></span>
        </div>
        <div>
          <UICards
            title="ENDONDONCÍA"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <span className="point"></span>
        </div>
        <div>
          <UICards
            title="ODONTOPEDIATRÍA"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <span className="point"></span>
        </div>
        <div>
          <UICards
            title="PERIODONCÍA"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <span className="point"></span>
        </div>
        <div>
          <UICards
            title="CIRUGÍA E IMPLANTES"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <span className="point"></span>
        </div>
      </Carousel>
    </div>
  );
}

import "../styles/components/UIMaps.scss";

export default function UIMaps() {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jose bonifacio 931&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://embed-googlemap.com">embed google maps</a>
        </div>
      </div>
    </div>
  );
}

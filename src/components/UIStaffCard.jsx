import "../styles/components/UIStaffCards.scss";

export default function UIStaffCard({ name, description, image }) {
  return (
    <div className="staff-card">
      <div className="staff-card-wrap">
        <div className="staff-image">
          <img src={image} alt="err" />
        </div>
        <div className="staff-text">
          <h3>{name}</h3>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </div>
  );
}

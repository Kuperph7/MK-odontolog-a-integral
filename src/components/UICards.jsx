import "../styles/components/UICards.scss";

export default function UICards({ title, text }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}

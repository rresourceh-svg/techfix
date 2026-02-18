function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      {icon && <img src={icon} alt={title} className="service-icon" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;

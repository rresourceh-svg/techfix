import * as Icons from "./icons";
import ServiceItemCard from "./ServiceItemCard";

function ServiceCategorySection({ id, title, icon, note, items, highlightedId, isHighlighted }) {
  const IconComponent = Icons[icon] || Icons.WrenchIcon;

  return (
    <div
      id={id}
      className={`service-section ${isHighlighted ? "service-section-highlighted" : ""}`}
    >
      <div className="service-section-head">
        <span className="service-section-icon">
          <IconComponent className="service-section-icon-svg" />
        </span>
        <h2>{title}</h2>
      </div>

      <div className="service-items-grid">
        {items.map((item) => (
          <ServiceItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
            icon={item.icon}
            highlightedId={highlightedId}
          />
        ))}
      </div>

      {note && (
        <div className="service-section-note">
          <Icons.ShieldIcon className="service-section-note-icon" />
          <p>{note}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceCategorySection;

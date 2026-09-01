import { Link } from "react-router-dom";
import * as Icons from "./icons";

function ServiceCard({ title, description, icon, categoryId }) {
  const IconComponent = Icons[icon] || Icons.WrenchIcon;

  return (
    <Link
      to="/services"
      state={{ scrollToCategory: categoryId }}
      className="service-card"
      aria-label={`View ${title} services`}
    >
      <span className="service-card-icon-wrap">
        <IconComponent className="service-card-icon-svg" />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card-link">
        View services
        <Icons.ChevronRightIcon className="service-card-link-arrow" />
      </span>
    </Link>
  );
}

export default ServiceCard;

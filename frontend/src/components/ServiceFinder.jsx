import { useEffect, useMemo, useRef, useState } from "react";
import { serviceCategories, slugify } from "../data/servicesList";
import { SearchIcon } from "./icons";

// Flattened, searchable list of every bookable service across every
// category, built once — used to power the dropdown/search results.
const ALL_SERVICES = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    id: slugify(item.name),
    name: item.name,
    price: item.price,
    category: category.title,
  }))
);

function ServiceFinder({ onSelect }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_SERVICES;
    return ALL_SERVICES.filter(
      (service) =>
        service.name.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handlePick(service) {
    setOpen(false);
    setQuery("");
    onSelect(service.id);
  }

  return (
    <div className="service-finder" ref={wrapRef}>
      <div className="service-finder-bar">
        <SearchIcon className="service-finder-search-icon" />
        <input
          type="text"
          className="service-finder-input"
          placeholder="Search a service — e.g. slow laptop, driver, printer setup..."
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          aria-label="Search services"
        />
        <button
          type="button"
          className="service-finder-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          Book Now
        </button>
      </div>

      {open && (
        <div className="service-finder-dropdown" role="listbox">
          {results.length === 0 ? (
            <p className="service-finder-empty">
              No matching service — try a different word, or WhatsApp us and we'll help you find it.
            </p>
          ) : (
            results.map((service) => (
              <button
                type="button"
                key={service.id}
                className="service-finder-option"
                onClick={() => handlePick(service)}
              >
                <span className="service-finder-option-name">{service.name}</span>
                <span className="service-finder-option-meta">
                  <span className="service-finder-option-cat">{service.category}</span>
                  <span className="service-finder-option-price">{service.price}</span>
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ServiceFinder;

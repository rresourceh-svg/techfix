import { WhatsAppIcon } from "./icons";

function WhatsAppButton() {
  const whatsappURL = "https://wa.me/923100045017?text=Hi%20TechFix%20by%20Mubeen%2C%20I%20want%20to%20book%20a%20service.";

  return (
    <a
      href={whatsappURL}
      className="whatsapp-button"
      aria-label="Message TechFix on WhatsApp"
    >
      <WhatsAppIcon className="whatsapp-icon" />
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;

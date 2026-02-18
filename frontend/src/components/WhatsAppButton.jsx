function WhatsAppButton() {
  const phoneNumber = "923100045017"; // Your WhatsApp number in international format
  const message = encodeURIComponent("Hi TechFix, I want to book a service.");

  // Correct URL
  const whatsappURL = `https://wa.me/923100045017?text=Hi%20TechFix,%20I%20want%20to%20book%20a%20service.
`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;

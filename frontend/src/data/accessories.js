import { WHATSAPP_NUMBER } from "./servicesList";

export const accessories = [
  {
    id: "usb-c-cable-1-5m",
    name: "6A USB to Type-C Fast Charging Cable",
    description:
      "An everyday charging cable we hand out on repair visits — sturdy enough for daily use and quick enough not to keep you waiting.",
    spec: "1.5 metre · 6A fast charge · durable braided jacket",
    price: "Rs. 350",
    image: "/images/usb-c-cable.jpeg",
  },
];

// Used by the homepage "accessories shelf" teaser card — keep this message
// as-is so existing links already shared with customers keep working.
export function whatsappOrderLink(productName) {
  const message = `Hi TechFix by Mubeen, I want to order: ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Used by the full Accessories page cards, where we already know the price
// and can prefill a more specific order message.
export function whatsappOrderLinkWithPrice(productName, price) {
  const message = `Hi TechFix, I want to order the ${productName} for ${price}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

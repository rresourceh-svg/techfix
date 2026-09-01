export const accessories = [
  {
    id: "usb-c-cable-1-5m",
    name: "6A USB to Type-C Fast Charging Cable",
    spec: "1.5 metre · 6A fast charge · durable braided jacket",
    price: "Rs. 350",
  },
];

export function whatsappOrderLink(productName) {
  const message = `Hi TechFix by Mubeen, I want to order: ${productName}`;
  return `https://wa.me/923100045017?text=${encodeURIComponent(message)}`;
}

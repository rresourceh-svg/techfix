// Full TechFix service rate list, structured to match the official rate card.
// Each item is its own bookable card — the name/price build a pre-filled
// WhatsApp message so the customer never has to type it out.

export const WHATSAPP_NUMBER = "923100045017";

// Turns a service name into a stable, URL/DOM-safe id, e.g.
// "SSD / RAM Installation" -> "ssd-ram-installation". Used so the search
// bar can jump straight to a given service card.
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const serviceCategories = [
  {
    id: "windows-software",
    title: "Windows & Software",
    icon: "SystemSetupIcon",
    blurb: "Windows installs, software setup, error fixes and performance tuning.",
    note: "Windows Installation & Setup: final price depends on required software, drivers, troubleshooting and setup.",
    items: [
      {
        name: "Windows Installation & Setup",
        price: "Rs. 1,500",
        icon: "WindowsIcon",
        description: "Fresh Windows install with drivers, updates and essential apps configured — ready to use.",
      },
      {
        name: "Software Installation / Troubleshooting",
        price: "Rs. 500",
        icon: "AppWindowIcon",
        description: "Any app installed and fixed, from everyday office tools to specialist software.",
      },
      {
        name: "Windows Error / Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "SearchCheckIcon",
        description: "Blue screens, crashes and error codes diagnosed and resolved properly.",
      },
      {
        name: "Boot Problem Fix",
        price: "Quoted after diagnosis",
        icon: "PowerIcon",
        description: "Won't turn on or stuck on boot? We get your system starting again.",
      },
      {
        name: "Performance Optimization",
        price: "Quoted after diagnosis",
        icon: "SpeedIcon",
        description: "Speed up a slow PC with a proper cleanup and tuning pass.",
      },
    ],
  },
  {
    id: "hardware-services",
    title: "Hardware Services",
    icon: "ToolboxIcon",
    blurb: "Diagnosis, upgrades, cleaning and hardware repairs for laptops & PCs.",
    items: [
      {
        name: "Laptop/PC Diagnosis",
        price: "Rs. 500",
        icon: "SearchCheckIcon",
        description: "A full hardware and software check-up to pinpoint exactly what's wrong.",
      },
      {
        name: "SSD / RAM Installation",
        price: "Rs. 1,000",
        icon: "ChipIcon",
        description: "Upgrade storage or memory for a faster, more responsive machine.",
      },
      {
        name: "Internal Cleaning",
        price: "Rs. 1,000",
        icon: "SparkleCleanIcon",
        description: "Dust and debris cleared out to stop overheating before it starts.",
      },
      {
        name: "Cleaning + Thermal Paste",
        price: "Rs. 1,500",
        icon: "ThermalIcon",
        description: "Deep clean plus fresh thermal paste for lower temps and quieter fans.",
      },
      {
        name: "Overheating Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "ThermalIcon",
        description: "Persistent heat issues diagnosed and fixed at the source.",
      },
      {
        name: "Display / HDMI Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "MonitorIcon",
        description: "Flickering screens, no signal and HDMI issues sorted.",
      },
      {
        name: "Hardware Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "WrenchIcon",
        description: "Any hardware fault diagnosed and repaired or replaced.",
      },
      {
        name: "Custom Gaming PC Assembly",
        price: "Rs. 5,000",
        icon: "PCTowerIcon",
        description: "A custom-built gaming rig assembled and tested from your parts list.",
      },
    ],
  },
  {
    id: "printer-services",
    title: "Printer Services",
    icon: "PrintQueueIcon",
    blurb: "Printer installation, driver fixes and network printer setup.",
    items: [
      {
        name: "Printer Installation & Configuration",
        price: "Rs. 1,000",
        icon: "PrinterIcon",
        description: "Your printer unboxed, installed and configured, ready to print.",
      },
      {
        name: "Printer Driver Installation",
        price: "Rs. 500",
        icon: "DriverIcon",
        description: "Correct drivers installed so your printer is recognised every time.",
      },
      {
        name: "Network Printer Setup",
        price: "Rs. 1,500",
        icon: "WifiIcon",
        description: "Printer shared across your network so every device can print to it.",
      },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    icon: "NetworkGlobeIcon",
    blurb: "Wi-Fi, LAN, router setup and network troubleshooting.",
    items: [
      {
        name: "Basic Network Configuration & Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "RouterIcon",
        description: "Your home or office network configured and connection issues resolved.",
      },
      {
        name: "LAN / Wi-Fi Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "WifiIcon",
        description: "Dead zones and dropped connections diagnosed and fixed.",
      },
      {
        name: "Basic IP Configuration",
        price: "Rs. 750",
        icon: "ChipIcon",
        description: "Static IPs and basic network settings configured correctly.",
      },
      {
        name: "Router / Network Setup",
        price: "Quoted after diagnosis",
        icon: "RouterIcon",
        description: "New router installed and your whole network set up properly.",
      },
    ],
  },
  {
    id: "data-storage",
    title: "Data & Storage",
    icon: "StorageStackIcon",
    blurb: "Backups, drive health checks and storage troubleshooting.",
    items: [
      {
        name: "Data Backup",
        price: "Rs. 1,000",
        icon: "CloudIcon",
        description: "Your important files backed up safely before any major work.",
      },
      {
        name: "SSD / HDD Health Check",
        price: "Rs. 800",
        icon: "PulseIcon",
        description: "A full health scan to catch drive failures before you lose data.",
      },
      {
        name: "Storage / Partition Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "DatabaseIcon",
        description: "Partition errors and storage issues diagnosed and repaired.",
      },
    ],
  },
  {
    id: "business-office-it",
    title: "Business & Office IT",
    icon: "OfficeCaseIcon",
    blurb: "Workstation setup, employee onboarding and office IT support.",
    items: [
      {
        name: "Office PC / Workstation Setup",
        price: "Rs. 2,000",
        icon: "PCTowerIcon",
        description: "A new workstation set up and ready for your team from day one.",
      },
      {
        name: "Employee Computer Setup",
        price: "Rs. 1,500",
        icon: "UserGearIcon",
        description: "New hire laptops configured with accounts, software and settings.",
      },
      {
        name: "Office Printer Setup",
        price: "Rs. 1,000",
        icon: "PrinterIcon",
        description: "Office printers installed and shared across your team's devices.",
      },
      {
        name: "Basic Office Network Setup",
        price: "Quoted after assessment",
        icon: "RouterIcon",
        description: "A small office network configured for reliable, secure connectivity.",
      },
      {
        name: "Small Business IT Support",
        price: "Quotation",
        icon: "BuildingIcon",
        description: "Ongoing IT support tailored to your small business's needs.",
      },
    ],
  },
  {
    id: "remote-service",
    title: "Remote Service (Outside Lahore & Long Distance)",
    icon: "RemoteDesktopIcon",
    blurb: "Same-rate remote fixes for customers outside Lahore or far from our base.",
    note: "Live outside Lahore, or far from our base within the city? Skip the wait — we fix it live over a remote session (AnyDesk / TeamViewer), and it's charged at the exact same rates as our in-person services below. Only jobs that genuinely need hands-on hardware work require a doorstep visit.",
    items: [
      {
        name: "Remote Software Installation / Troubleshooting",
        price: "Rs. 500",
        icon: "AppWindowIcon",
        description: "Any app installed, updated or fixed over a remote session — same price as our doorstep software service.",
      },
      {
        name: "Remote Driver Problems Fix",
        price: "Rs. 500",
        icon: "DriverIcon",
        description: "Missing, outdated or conflicting graphics, audio, printer or network drivers sorted out remotely.",
      },
      {
        name: "Remote Sound / Audio Not Working",
        price: "Rs. 500",
        icon: "SoundIcon",
        description: "No sound, crackling audio or a missing playback device fixed live over a remote session.",
      },
      {
        name: "Remote Slow Laptop / PC Fix",
        price: "Quoted after diagnosis",
        icon: "SpeedIcon",
        description: "A full remote clean-up and tuning pass to speed up a sluggish laptop or desktop — same pricing as our in-person optimization service.",
      },
      {
        name: "Remote Windows Error / Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "SearchCheckIcon",
        description: "Crashes, error codes and update issues diagnosed and resolved over a remote session.",
      },
      {
        name: "General Remote IT Support",
        price: "Quotation",
        icon: "RemoteDesktopIcon",
        description: "Any other software-side issue — connect with our technician remotely and we'll take it from there.",
      },
    ],
  },
];

export const termsAndConditions = [
  { label: "Inspection / Diagnosis Fee", value: "Rs. 500" },
  { label: "Parts", value: "Charged separately" },
  {
    label: "Doorstep / Travel Charges",
    value: "Depend on distance from our base — confirmed with you before we dispatch a technician, and finalized again after the job is done",
  },
  { label: "Remote Service", value: "Same rates as our doorstep services — no travel charges apply" },
  { label: "Complex Jobs", value: "Final quotation after diagnosis" },
  { label: "Service Warranty", value: "7 days where applicable" },
];

// Builds a wa.me link that opens WhatsApp with a ready-made message for the
// exact service the customer tapped on.
export function buildServiceWhatsAppLink(serviceName, price) {
  const message = `Hi TechFix by Mubeen! I'm interested in *${serviceName}*${
    price ? ` (${price})` : ""
  }. Can you confirm availability and booking?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

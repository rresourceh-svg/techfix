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
    blurb:
      "Windows installs, software setup, error fixes and performance tuning.",
    note:
      "Choose the Windows package that matches your needs. Simple Windows installation starts at Rs. 500.",
    items: [
      {
        name: "Windows Installation",
        price: "Rs. 500",
        icon: "WindowsIcon",
        description:
          "Fresh Windows installation. Ideal if you only need Windows installed.",
      },
      {
        name: "Windows + Drivers + Essential Software",
        price: "Rs. 1,000",
        icon: "WindowsIcon",
        description:
          "Complete Windows setup with required drivers and essential software — ready for everyday use.",
      },
      {
        name: "Complete Laptop Care",
        price: "Rs. 1,500",
        icon: "ThermalIcon",
        description:
          "Complete setup including Windows, drivers, essential software, internal cleaning, thermal paste and performance optimization.",
      },
      {
        name: "Software Installation / Troubleshooting",
        price: "Rs. 500",
        icon: "AppWindowIcon",
        description:
          "Any app installed or fixed, from everyday office tools to specialist software.",
      },
      {
        name: "Windows Error / Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "SearchCheckIcon",
        description:
          "Blue screens, crashes and Windows error codes diagnosed and resolved properly.",
      },
      {
        name: "Boot Problem Fix",
        price: "Quoted after diagnosis",
        icon: "PowerIcon",
        description:
          "Won't turn on or stuck on boot? We diagnose the cause and work to get your system starting again.",
      },
      {
        name: "Performance Optimization",
        price: "Quoted after diagnosis",
        icon: "SpeedIcon",
        description:
          "Speed up a slow PC with a proper cleanup and performance tuning pass.",
      },
    ],
  },

  {
    id: "hardware-services",
    title: "Hardware Services",
    icon: "ToolboxIcon",
    blurb:
      "Diagnosis, upgrades, cleaning and hardware repairs for laptops & PCs.",
    note:
      "Parts are charged separately. Final charges for repair work may depend on the fault and required parts.",
    items: [
      {
        name: "Laptop/PC Diagnosis",
        price: "Rs. 500",
        icon: "SearchCheckIcon",
        description:
          "A hardware and software check-up to pinpoint exactly what's wrong.",
      },
      {
        name: "SSD / RAM Installation",
        price: "Rs. 1,000",
        icon: "ChipIcon",
        description:
          "Upgrade storage or memory for a faster, more responsive machine. Parts charged separately.",
      },
      {
        name: "Internal Cleaning",
        price: "Rs. 1,000",
        icon: "SparkleCleanIcon",
        description:
          "Internal dust cleaning to improve airflow and help prevent overheating.",
      },
      {
        name: "Cleaning + Thermal Paste",
        price: "Rs. 1,500",
        icon: "ThermalIcon",
        description:
          "Deep internal cleaning plus fresh thermal paste for better cooling performance.",
      },
      {
        name: "Overheating Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "ThermalIcon",
        description:
          "Persistent heat issues diagnosed and fixed at the source.",
      },
      {
        name: "Display / HDMI Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "MonitorIcon",
        description:
          "Flickering screens, no signal and HDMI issues diagnosed and troubleshot.",
      },
      {
        name: "Hardware Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "WrenchIcon",
        description:
          "Hardware faults diagnosed and repaired or replaced where possible.",
      },
      {
        name: "Custom Gaming PC Assembly",
        price: "Rs. 5,000",
        icon: "PCTowerIcon",
        description:
          "A custom-built gaming rig assembled and tested from your parts list.",
      },
    ],
  },

  {
    id: "printer-services",
    title: "Printer Services",
    icon: "PrintQueueIcon",
    blurb:
      "Printer installation, driver fixes and network printer setup.",
    items: [
      {
        name: "Printer Installation & Configuration",
        price: "Rs. 1,000",
        icon: "PrinterIcon",
        description:
          "Your printer installed and configured, ready to print.",
      },
      {
        name: "Printer Driver Installation",
        price: "Rs. 500",
        icon: "DriverIcon",
        description:
          "Correct printer drivers installed so your printer is recognised properly.",
      },
      {
        name: "Network Printer Setup",
        price: "Rs. 1,500",
        icon: "WifiIcon",
        description:
          "Printer configured and shared across your network so multiple devices can print.",
      },
    ],
  },

  {
    id: "networking",
    title: "Networking",
    icon: "NetworkGlobeIcon",
    blurb:
      "Wi-Fi, LAN, router setup and network troubleshooting.",
    items: [
      {
        name: "Basic Network Configuration & Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "RouterIcon",
        description:
          "Home or office network configured and connection issues diagnosed.",
      },
      {
        name: "LAN / Wi-Fi Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "WifiIcon",
        description:
          "Connection problems, dead zones and dropped connections diagnosed and fixed.",
      },
      {
        name: "Basic IP Configuration",
        price: "Rs. 750",
        icon: "ChipIcon",
        description:
          "Static IPs and basic network settings configured correctly.",
      },
      {
        name: "Router / Network Setup",
        price: "Quoted after diagnosis",
        icon: "RouterIcon",
        description:
          "New router installed and your network configured properly.",
      },
    ],
  },

  {
    id: "data-storage",
    title: "Data & Storage",
    icon: "StorageStackIcon",
    blurb:
      "Backups, drive health checks and storage troubleshooting.",
    items: [
      {
        name: "Data Backup",
        price: "Rs. 1,000",
        icon: "CloudIcon",
        description:
          "Important files backed up before major system work.",
      },
      {
        name: "SSD / HDD Health Check",
        price: "Rs. 800",
        icon: "PulseIcon",
        description:
          "Drive health scan to identify potential storage problems.",
      },
      {
        name: "Storage / Partition Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "DatabaseIcon",
        description:
          "Partition errors and storage issues diagnosed and troubleshot.",
      },
    ],
  },

  {
    id: "business-office-it",
    title: "Business & Office IT",
    icon: "OfficeCaseIcon",
    blurb:
      "Workstation setup, employee onboarding and office IT support.",
    items: [
      {
        name: "Office PC / Workstation Setup",
        price: "Rs. 2,000",
        icon: "PCTowerIcon",
        description:
          "A new workstation set up and configured for your team.",
      },
      {
        name: "Employee Computer Setup",
        price: "Rs. 1,500",
        icon: "UserGearIcon",
        description:
          "New employee laptop or computer configured with accounts, software and settings.",
      },
      {
        name: "Office Printer Setup",
        price: "Rs. 1,000",
        icon: "PrinterIcon",
        description:
          "Office printers installed and configured across your team's devices.",
      },
      {
        name: "Basic Office Network Setup",
        price: "Quoted after assessment",
        icon: "RouterIcon",
        description:
          "A small office network configured for reliable connectivity.",
      },
      {
        name: "Small Business IT Support",
        price: "Quotation",
        icon: "BuildingIcon",
        description:
          "IT support tailored to your small business's needs.",
      },
    ],
  },

  {
    id: "remote-service",
    title: "Remote Service (Outside Lahore & Long Distance)",
    icon: "RemoteDesktopIcon",
    blurb:
      "Remote fixes for customers outside Lahore or far from our base.",
    note:
      "Live outside Lahore, or far from our base within the city? Skip the travel — we can handle many software-related issues remotely through AnyDesk / TeamViewer. Remote service rates are based on the service required.",
    items: [
      {
        name: "Remote Software Installation / Troubleshooting",
        price: "Rs. 500",
        icon: "AppWindowIcon",
        description:
          "Apps installed, updated or fixed over a remote session.",
      },
      {
        name: "Remote Driver Problems Fix",
        price: "Rs. 500",
        icon: "DriverIcon",
        description:
          "Missing, outdated or conflicting drivers diagnosed and fixed remotely.",
      },
      {
        name: "Remote Sound / Audio Not Working",
        price: "Rs. 500",
        icon: "SoundIcon",
        description:
          "No sound, audio problems or missing playback devices fixed remotely.",
      },
      {
        name: "Remote Slow Laptop / PC Fix",
        price: "Quoted after diagnosis",
        icon: "SpeedIcon",
        description:
          "Remote cleanup and performance optimization for a sluggish laptop or desktop.",
      },
      {
        name: "Remote Windows Error / Troubleshooting",
        price: "Quoted after diagnosis",
        icon: "SearchCheckIcon",
        description:
          "Windows crashes, error codes and software-side issues diagnosed remotely.",
      },
      {
        name: "General Remote IT Support",
        price: "Quotation",
        icon: "RemoteDesktopIcon",
        description:
          "Other software-related issues handled through a remote support session.",
      },
    ],
  },
];

export const termsAndConditions = [
  {
    label: "Inspection / Diagnosis Fee",
    value: "Rs. 500",
  },
  {
    label: "Parts",
    value: "Charged separately",
  },
  {
    label: "Home Service",
    value:
      "Rs. 50/km — calculated according to distance from our base and confirmed before dispatch",
  },
  {
    label: "Remote Service",
    value:
      "No travel charges — remote service is available for supported software-related issues",
  },
  {
    label: "Complex Jobs",
    value:
      "Final quotation after diagnosis or assessment",
  },
  {
    label: "Service Warranty",
    value: "7 days where applicable",
  },
];

// Builds a wa.me link that opens WhatsApp with a ready-made message for the
// exact service the customer tapped on.
export function buildServiceWhatsAppLink(serviceName, price) {
  const message = `Hi TechFix by Mubeen! I'm interested in *${serviceName}*${
    price ? ` (${price})` : ""
  }. Can you confirm availability and booking?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
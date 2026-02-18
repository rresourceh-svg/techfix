import ServiceCard from "../components/ServiceCard";
import iconRepair from "../assets/icons/repair.png";
import iconVirus from "../assets/icons/virus.png";
import iconUpgrade from "../assets/icons/upgrade.png";
import iconPC from "../assets/icons/pc.png";
import iconSetup from "../assets/icons/setup.png";      // you need to add suitable icons
import iconDiagnose from "../assets/icons/diagnose.png";
import iconUnlock from "../assets/icons/unlock.png";
import iconBackup from "../assets/icons/backup.png";
import iconDrivers from "../assets/icons/drivers.png";
import iconSoftware from "../assets/icons/software.png";
import iconGames from "../assets/icons/games.png";

function Services() {
  return (
    <section className="services-page">
      <h1>Our Services</h1>
      <p>We provide a wide range of PC and laptop repair services.</p>

      <div className="services-grid">
        {/* Laptop Repair */}
        <ServiceCard
          title="Laptop Repair"
          description="Screen replacement, motherboard replacement, keyboard change, battery replacements, diagnostics."
          icon={iconRepair}
        />

        {/* Virus & Malware Removal */}
        <ServiceCard
          title="Virus & Malware Removal"
          description="Complete malware cleanup, system optimization, and antivirus setup."
          icon={iconVirus}
        />

        {/* Hardware Upgrades */}
        <ServiceCard
          title="Hardware Upgrades"
          description="SSD, RAM, GPU upgrades, and performance improvements."
          icon={iconUpgrade}
        />

        {/* PC Troubleshooting */}
        <ServiceCard
          title="PC Troubleshooting"
          description="Diagnostics, repairs, OS installation, network setup, and maintenance."
          icon={iconPC}
        />

        {/* Complete Laptop & PC Setup */}
        <ServiceCard
          title="Complete Laptop & PC Setup"
          description="Windows installation, drivers setup, essential software installation — just sit back and watch us prepare your system."
          icon={iconSetup}
        />

        {/* Diagnose Problems */}
        <ServiceCard
          title="Diagnose Your Problems"
          description="Sound issues, Wi-Fi not working, display problems, driver conflicts, and other hardware/software issues."
          icon={iconDiagnose}
        />

        {/* Password Unlock */}
        <ServiceCard
          title="Laptop & PC Unlock"
          description="Forgot your password? We can unlock your device following verification rules to ensure ownership."
          icon={iconUnlock}
        />

        {/* Data Backup & Windows Reinstallation */}
        <ServiceCard
          title="Data Backup & Windows Reinstall"
          description="If Windows fails and you need your files, we can safely backup your data and reinstall Windows."
          icon={iconBackup}
        />

        {/* Drivers Issue Solving */}
        <ServiceCard
          title="Driver Issue Solutions"
          description="All driver-related problems fixed for your laptop or PC for smooth performance."
          icon={iconDrivers}
        />

        {/* Software Installation */}
        <ServiceCard
          title="Software Installation"
          description="We install essential software, utilities, and apps you need for work or personal use."
          icon={iconSoftware}
        />

        {/* Games & Entertainment Setup */}
        <ServiceCard
          title="Games & Entertainment"
          description="Get games installed and optimized for your system with fair deals."
          icon={iconGames}
        />
      </div>
    </section>
  );
}

export default Services;

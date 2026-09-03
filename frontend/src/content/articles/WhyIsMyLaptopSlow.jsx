import WarningBox from "../../components/knowledge/WarningBox";
import StepList from "../../components/knowledge/StepList";
import ProHelpSection from "../../components/knowledge/ProHelpSection";

// Body content for /knowledge/why-is-my-laptop-slow.
// Metadata for this article (title, category, description, etc.) lives in
// src/data/articles.js — this file is purely the long-form writing.
function WhyIsMyLaptopSlow() {
  return (
    <>
      <p>
        A slow laptop is one of the most common complaints we hear — and one of the most
        misunderstood. Most people assume it means the hardware is worn out and it's time to
        buy new parts, or a new laptop altogether. In our experience, that's rarely the first
        problem worth chasing. Slowdowns almost always come from one of a handful of causes, and
        most of them cost nothing to check.
      </p>
      <p>
        Go through these seven checks in order. By the end, you'll either have fixed the problem
        yourself or know exactly what's actually wrong — which is worth a lot more than guessing.
      </p>

      <h2>1. Too many programs launching at startup</h2>
      <p>
        Every app that "starts with Windows" loads into memory before you've even opened
        anything, and a lot of software adds itself to that list without asking. A laptop with
        20+ startup entries can take minutes just to become usable.
      </p>
      <StepList
        steps={[
          "Right-click the Taskbar and open Task Manager (or press Ctrl + Shift + Esc).",
          "Click the Startup apps tab (or Startup, on older Windows versions).",
          "Look at the Startup impact column — anything marked High is worth reviewing.",
          "Right-click anything you don't need running constantly (chat apps, printer utilities, update checkers) and select Disable.",
        ]}
      />
      <p>
        This doesn't uninstall anything — it just stops the program from loading automatically.
        You can always open it manually when you actually need it.
      </p>

      <h2>2. Storage that's nearly full</h2>
      <p>
        Windows needs free space on your main drive to manage virtual memory, temporary files
        and updates. Once a drive gets close to full — especially under about 10–15% free
        space — performance can drop noticeably, even on a fast SSD.
      </p>
      <ul>
        <li>Open <strong>Settings → System → Storage</strong> to see what's taking up space.</li>
        <li>Clear the Downloads folder and empty the Recycle Bin.</li>
        <li>Use Storage Sense (in the same menu) to automatically clean temporary files.</li>
        <li>Move large files — videos, old project folders — to an external drive or cloud storage.</li>
      </ul>

      <h2>3. RAM being used up by background apps</h2>
      <p>
        If you regularly work with dozens of browser tabs, several Office documents and a chat
        app open at once, you may simply be asking more of your RAM than it has to give —
        especially on laptops with 4GB or 8GB.
      </p>
      <StepList
        steps={[
          "Open Task Manager and click the Performance tab, then Memory.",
          "Check how much of your total RAM is in use while you're working normally.",
          "If it's consistently near 90–100%, switch to the Processes tab and sort by Memory to see what's using the most.",
        ]}
      />
      <p>
        Closing unused tabs and apps helps immediately. If you're consistently maxing out 8GB of
        RAM during normal use, a RAM upgrade (where your laptop supports one) is one of the few
        cases where new hardware genuinely solves the problem.
      </p>
      <figure className="kb-inline-figure">
        <img
          src="/images/knowledge/task-manager-performance.png"
          alt="Windows Task Manager Performance tab showing memory (RAM) usage, used to check what is slowing down a laptop"
          loading="lazy"
          className="kb-inline-img"
        />
        <figcaption>The Performance tab in Task Manager shows how much RAM is currently in use.</figcaption>
      </figure>

      <h2>4. Background processes eating your CPU</h2>
      <p>
        Occasionally the slowdown isn't memory — it's a process quietly using a large share of
        your processor. This is often a stuck update, an antivirus scan, or in less common
        cases, malware.
      </p>
      <ul>
        <li>In Task Manager's Processes tab, sort by CPU instead of Memory.</li>
        <li>If one process sits at a high percentage for minutes at a time with no obvious reason, note its name.</li>
        <li>Run a full scan with Windows Security (built into Windows) if anything looks unfamiliar.</li>
      </ul>

      <h2>5. An HDD instead of an SSD</h2>
      <p>
        If your laptop is more than a few years old, there's a real chance it still uses a
        traditional hard disk drive (HDD) rather than a solid-state drive (SSD). HDDs are
        mechanical, and by far the most common reason an otherwise capable laptop feels sluggish
        — especially at startup and when opening programs.
      </p>
      <p>
        You can check which one you have under <strong>Settings → System → Storage → Advanced
        storage settings → Disks & volumes</strong>. If it lists a hard disk drive rather than an
        SSD, this is genuinely one of the highest-impact upgrades available — often making an
        older laptop feel new again for a fraction of the cost of replacing it.
      </p>
      <figure className="kb-inline-figure">
        <img
          src="/images/knowledge/ssd-vs-hdd.jpg"
          alt="Side-by-side comparison of a solid-state drive (SSD) and a traditional hard disk drive (HDD)"
          loading="lazy"
          className="kb-inline-img"
        />
        <figcaption>SSDs have no moving parts, which is a big part of why they load Windows and programs faster than HDDs.</figcaption>
      </figure>

      <h2>6. Windows or software problems</h2>
      <p>
        Sometimes the operating system itself is the bottleneck — a pending update stuck
        mid-install, a corrupted system file, or software that's grown unstable over years of
        installs and uninstalls.
      </p>
      <ul>
        <li>Check <strong>Settings → Windows Update</strong> and install anything pending, then restart.</li>
        <li>Uninstall programs you no longer use from <strong>Settings → Apps</strong>.</li>
        <li>Consider whether the laptop hasn't had a clean setup in years — sometimes a fresh, properly configured install outperforms months of troubleshooting.</li>
      </ul>

      <h2>7. Overheating and thermal throttling</h2>
      <p>
        Modern CPUs deliberately slow themselves down when they get too hot, to protect the
        hardware — this is called thermal throttling, and it can make a perfectly healthy laptop
        feel weak under load, particularly during video calls, exports or gaming.
      </p>
      <WarningBox title="Signs of overheating">
        <ul>
          <li>The fan runs loudly and constantly, even for light tasks</li>
          <li>The laptop feels hot on the base or near the keyboard</li>
          <li>Performance is fine at first, then drops noticeably after 10–20 minutes of use</li>
          <li>Random shutdowns during demanding tasks</li>
        </ul>
      </WarningBox>
      <p>
        Dust build-up in the fan and heatsink, and dried-out thermal paste on the CPU, are the
        two most common causes on laptops over 2–3 years old. Using the laptop on a hard, flat
        surface (rather than a bed or sofa) also helps airflow in the meantime.
      </p>
      <figure className="kb-inline-figure">
        <img
          src="/images/knowledge/laptop-overheating.jpg"
          alt="Diagram showing dust blocking a laptop's cooling vents and fan, restricting airflow and causing overheating"
          loading="lazy"
          className="kb-inline-img"
        />
        <figcaption>Blocked vents and dust-clogged fans restrict airflow, which is the most common cause of laptop overheating.</figcaption>
      </figure>

      <h2>Before You Replace Anything</h2>
      <p>
        It's worth saying plainly: a slow laptop does not automatically mean it needs new RAM, a
        new SSD, or replacing altogether. In our experience, a large share of "my laptop is dying"
        cases turn out to be a full startup list, a nearly-full drive, or a build-up of dust —
        none of which need new hardware at all. Replacing parts before diagnosing the actual
        cause is how people end up spending money without actually fixing anything.
      </p>

      <ProHelpSection>
        <p>
          Working through the checks above solves the problem for a lot of people. But there are
          situations where continuing to guess costs more time and money than a proper look
          would:
        </p>
        <ul>
          <li>You've gone through all seven checks and the slowdown hasn't improved</li>
          <li>The laptop is overheating, shutting down randomly, or the fan sounds unusual (grinding, rattling)</li>
          <li>You suspect a hard drive is failing (unusual clicking noises, files that won't open, frequent crashes)</li>
          <li>You're not comfortable opening the case to check dust or thermal paste yourself</li>
          <li>Performance dropped suddenly rather than gradually, which can point to a specific fault rather than general wear</li>
        </ul>
        <p>
          In these cases, a proper diagnosis tells you exactly what's wrong before any money is
          spent — rather than replacing parts one at a time and hoping.
        </p>
      </ProHelpSection>
    </>
  );
}

export default WhyIsMyLaptopSlow;

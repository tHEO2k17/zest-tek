import heroNetwork from "@/assets/hero-network.jpg";
import serviceCctv from "@/assets/service-cctv.jpg";
import serviceInfra from "@/assets/service-infra.jpg";
import serviceConsult from "@/assets/service-consult.jpg";
import serviceGoods from "@/assets/service-goods.jpg";
import workOffice from "@/assets/work-office.jpg";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const services = [
  {
    no: "01",
    title: "Surveillance Systems",
    blurb:
      "Advanced, easy-to-use CCTV that delivers reliable monitoring, real-time alerts and resilient security across sites.",
    image: serviceCctv,
  },
  {
    no: "02",
    title: "IT Infrastructure",
    blurb:
      "Design, build and optimization of secure, efficient and scalable network and server infrastructure that scales with you.",
    image: serviceInfra,
  },
  {
    no: "03",
    title: "Consultancy & Training",
    blurb:
      "Strategic consultancy and hands-on training that sharpens your team's technology decisions and operational capability.",
    image: serviceConsult,
  },
  {
    no: "04",
    title: "Goods & Services",
    blurb:
      "Sourcing and supply of certified hardware — switches, biometrics, structured cabling and access control — with expert support.",
    image: serviceGoods,
  },
];

const clients = [
  "Intertek", "Expro Ghana", "China Harbour", "Gateway Logistics",
  "Western Royal", "Spring Architects", "CBM Solutions", "Taurus Transport",
  "Toyomo Materials",
];

const milestones = [
  {
    year: "2025",
    title: "Ultra-Modern Office Build-out — Accra",
    body: "Full IT infrastructure setup: structured networking, CCTV, biometric access and commissioning for a new flagship office in Ghana.",
  },
  {
    year: "2024",
    title: "CCTV Installation — Expro Ghana",
    body: "Site-wide CCTV installation, configuration and commissioning across operational areas.",
  },
  {
    year: "2019",
    title: "Laboratory Networking — Intertek Tarkwa",
    body: "Networking design and roll-out for the main minerals laboratory at Intertek, Tarkwa.",
  },
  {
    year: "2016",
    title: "Founded",
    body: "Zestteknologiez Limited established with a sole duty: deliver expertise and modern IT solutions, on time.",
  },
];

const values = [
  { k: "Integrity", n: "01" },
  { k: "Innovation", n: "02" },
  { k: "Passion", n: "03" },
  { k: "Accountability", n: "04" },
  { k: "Growth", n: "05" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display font-bold text-xl tracking-tight">ZESTEK</span>
            <span className="label-mono text-ink/50 hidden sm:inline">/ EST. 2016</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 label-mono">
            <a href="#services" className="hover:text-signal transition-colors">Services</a>
            <a href="#work" className="hover:text-signal transition-colors">Work</a>
            <a href="#about" className="hover:text-signal transition-colors">About</a>
            <a href="#contact" className="hover:text-signal transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-ink text-paper px-4 py-2 label-mono hover:bg-signal hover:text-ink transition-colors"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 label-mono text-ink/60 mb-10">
            <span className="ticker-dot">Operating from Ghana — serving Africa</span>
          </div>

          <h1 className="font-display font-bold text-[14vw] sm:text-[12vw] lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-tighter text-balance reveal-up">
            Proactive
            <br />
            tech, <span className="italic font-normal">precisely</span>
            <br />
            engineered<span className="text-signal">.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="text-lg lg:text-xl text-ink/70 leading-relaxed text-balance">
                Since 2016, <span className="text-ink font-medium">Zestteknologiez Limited</span> has
                delivered surveillance, structured networking and IT infrastructure that businesses
                across West Africa quietly depend on — every day, without drama.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="group bg-signal text-ink px-6 py-3.5 font-display font-medium flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
                >
                  Explore capabilities
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#work" className="label-mono underline underline-offset-8 decoration-ink/30 hover:decoration-signal hover:text-signal transition">
                  See selected work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image strip */}
        <div className="mt-16 lg:mt-24 max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="relative aspect-[21/9] overflow-hidden bg-ink">
            <img
              src={heroNetwork}
              alt="Zestek engineer working in a structured network rack"
              className="w-full h-full object-cover opacity-90"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10 text-paper pointer-events-none">
              <div className="flex justify-between items-start label-mono">
                <span>// SITE 014</span>
                <span>N 05°33′ W 00°12′</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="label-mono max-w-xs">
                  Network commissioning — Accra, GH
                </span>
                <span className="font-display text-2xl lg:text-4xl font-bold">2016 → ∞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-ink/15 pt-10">
          {[
            ["08+", "Years operating"],
            ["09", "Anchor clients"],
            ["100%", "Commissioned & tested"],
            ["24/7", "Surveillance uptime"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl lg:text-6xl font-bold tracking-tighter">{n}</div>
              <div className="label-mono text-ink/60 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="border-y border-ink/15 bg-ink text-paper py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center gap-12 px-12">
              <span className="font-display text-2xl lg:text-3xl font-medium">{c}</span>
              <span className="text-signal">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-36">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3 label-mono text-ink/60">// 01 — Capabilities</div>
            <h2 className="lg:col-span-9 font-display text-5xl lg:text-7xl font-bold tracking-tighter text-balance">
              Four disciplines.
              <br />
              One reliable team.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {services.map((s) => (
              <article
                key={s.no}
                className="group bg-paper p-8 lg:p-10 hover:bg-ink hover:text-paper transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="label-mono opacity-60">{s.no}</span>
                  <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
                </div>
                <div className="aspect-[5/3] overflow-hidden mb-8 bg-mute">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1200}
                    height={720}
                  />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed opacity-80 max-w-md">
                  {s.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VALUES — split */}
      <section id="about" className="bg-ink text-paper py-24 lg:py-36">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="label-mono text-paper/50 mb-8">// 02 — Position</div>
              <h2 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-balance">
                We provide advanced equipment and services that{" "}
                <span className="text-signal italic font-normal">differentiate</span> our clients
                from competitors.
              </h2>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
                <div>
                  <div className="label-mono text-signal mb-3">Vision</div>
                  <p className="text-paper/80 leading-relaxed">
                    Ignite global opportunities by aligning our clients with services and products
                    that move with the world's growing technologies.
                  </p>
                </div>
                <div>
                  <div className="label-mono text-signal mb-3">Mission</div>
                  <p className="text-paper/80 leading-relaxed">
                    Deliver expertise and modern IT solutions on time and on spec — with the
                    accountability of a partner, not a vendor.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-paper/15 lg:pl-12">
              <div className="label-mono text-paper/50 mb-8">// What we believe</div>
              <ul className="divide-y divide-paper/15">
                {values.map((v) => (
                  <li
                    key={v.k}
                    className="group flex items-baseline justify-between py-6 cursor-default hover:text-signal transition-colors"
                  >
                    <span className="label-mono opacity-50">{v.n}</span>
                    <span className="font-display text-3xl lg:text-5xl font-bold tracking-tighter">
                      {v.k}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / MILESTONES */}
      <section id="work" className="py-24 lg:py-36">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3 label-mono text-ink/60">// 03 — Track record</div>
            <h2 className="lg:col-span-9 font-display text-5xl lg:text-7xl font-bold tracking-tighter text-balance">
              Selected projects across
              <br />
              West Africa.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ol className="divide-y divide-ink/15 border-t border-b border-ink/15">
                {milestones.map((m) => (
                  <li
                    key={m.year}
                    className="group grid grid-cols-12 gap-4 py-8 hover:bg-ink hover:text-paper hover:px-6 transition-all duration-300"
                  >
                    <div className="col-span-3 lg:col-span-2 font-display text-3xl lg:text-4xl font-bold">
                      {m.year}
                    </div>
                    <div className="col-span-9 lg:col-span-10">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">
                        {m.title}
                      </h3>
                      <p className="opacity-80 leading-relaxed max-w-2xl">{m.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
              <div className="aspect-[4/5] overflow-hidden bg-mute">
                <img
                  src={workOffice}
                  alt="Modern Accra office network and CCTV deployment"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={1500}
                />
              </div>
              <div className="mt-4 flex justify-between label-mono text-ink/60">
                <span>FILE — ACCRA / 2025</span>
                <span>NETWORK + CCTV + BIOMETRIC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-ink/15 py-24 lg:py-32 bg-mute/40">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="label-mono text-ink/60 mb-6">// 04 — Why Zestek</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {[
              {
                t: "Agile & adaptive teams",
                d: "Engineers who respond to scope changes without slipping deadlines or quality.",
              },
              {
                t: "Proven track record",
                d: "Trusted by industrial, logistics, education and architectural firms across the region.",
              },
              {
                t: "Fast-growing partner",
                d: "Year over year, our footprint widens — and so does our depth of execution.",
              },
            ].map((c, i) => (
              <div key={c.t} className="border-t-2 border-ink pt-8">
                <span className="label-mono text-signal mb-4 block">0{i + 1}</span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                  {c.t}
                </h3>
                <p className="text-ink/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink text-paper py-24 lg:py-36">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="label-mono text-paper/50 mb-8">// 05 — Start a project</div>
              <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85] text-balance">
                Let's build something
                <br />
                <span className="text-signal italic font-normal">resilient</span>.
              </h2>
              <p className="mt-8 text-lg lg:text-xl text-paper/70 max-w-xl leading-relaxed">
                Tell us about your site, your scope and your timeline. We'll come back with a clear
                plan, a fair quote and a single point of contact.
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-paper/15 lg:pl-12 space-y-8">
              <ContactRow
                icon={<Mail className="w-5 h-5" />}
                label="General"
                value="sales@zestteknologiez.com"
                href="mailto:sales@zestteknologiez.com"
              />
              <ContactRow
                icon={<Mail className="w-5 h-5" />}
                label="Direct"
                value="kwaku.boateng@zestteknologiez.com"
                href="mailto:kwaku.boateng@zestteknologiez.com"
              />
              <ContactRow
                icon={<Phone className="w-5 h-5" />}
                label="Telephone"
                value="+233 24 797 2294"
                href="tel:+233247972294"
              />
              <ContactRow
                icon={<Phone className="w-5 h-5" />}
                label="Alternate"
                value="+233 20 580 2522"
                href="tel:+233205802522"
              />
              <ContactRow
                icon={<MapPin className="w-5 h-5" />}
                label="Headquarters"
                value="Accra, Ghana"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper border-t border-paper/15 py-10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 label-mono text-paper/60">
          <span>© {new Date().getFullYear()} Zestteknologiez Limited. All rights reserved.</span>
          <span>ZESTEK / Proactive Tech Enthusiast</span>
        </div>
      </footer>
    </div>
  );
};

const ContactRow = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="group flex items-start gap-4 py-2 border-b border-paper/10">
      <span className="text-signal mt-1">{icon}</span>
      <div className="flex-1">
        <div className="label-mono text-paper/50 mb-1">{label}</div>
        <div className="font-display text-lg lg:text-xl break-all group-hover:text-signal transition-colors">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight className="w-5 h-5 mt-1 opacity-50 group-hover:opacity-100 group-hover:text-signal transition" />
      )}
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
};

export default Index;

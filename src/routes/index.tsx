import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  Code2, Cloud, ShieldCheck, Cpu, Globe, Settings, Boxes, ArrowRight,
  Phone, Mail, MapPin, ChevronLeft, ChevronRight, Menu, X, Sparkles,
  Building2, Hospital, GraduationCap, Landmark, Users, Briefcase, ShieldAlert,
} from "lucide-react";

import logo from "@/assets/blueguava-logo.jpeg.asset.json";
import overview from "@/assets/overview.jpg.asset.json";
import software from "@/assets/software.jpg.asset.json";
import digital from "@/assets/digital.jpg.asset.json";
import security from "@/assets/security.jpg.asset.json";
import infra from "@/assets/xenolink_overview.png.asset.json";
import testBenjamin from "@/assets/test-benjamin.jpg.asset.json";
import ceo from "@/assets/abdulrasheed-musa-ceo.jpeg.asset.json";
import cto from "@/assets/solomon-yakubu-cto.jpeg.asset.json";
import olufemi from "@/assets/olufemi-george.jpeg.asset.json";
import emmanuel from "@/assets/emmanuel-victor.jpeg.asset.json";
import tukura from "@/assets/tukura-aquila.jpeg.asset.json";
import habakkuk from "@/assets/habakkuk-lucky.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "BlueGuava — Smart Technology for a Smarter World" },
      { name: "description", content: "BlueGuava builds intelligent software, robust networks, and scalable systems that power businesses and communities across Africa." },
      { property: "og:title", content: "BlueGuava — Smart Technology for a Smarter World" },
      { property: "og:description", content: "BlueGuava builds intelligent software, robust networks, and scalable systems that power businesses and communities across Africa." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Solutions" },
  { href: "#suite", label: "BlueSuite" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const solutions = [
  {
    id: "01",
    tag: "Software Applications",
    title: "Software Development",
    desc: "BlueGuava develops robust, secure, scalable, and user-friendly software applications that help organizations automate processes, improve operational efficiency, and make data-driven decisions.",
    img: software.url,
    features: [
      "Enterprise Resource Planning (ERP)",
      "Hospital Management Systems & EMR",
      "Human Resource Management Systems",
      "Customer Relationship Management (CRM)",
      "Workflow Automation Solutions",
      "Mobile & Web Applications",
      "Cloud-Based Solutions",
      "Custom Enterprise Platforms",
    ],
    cta: "Inquire Software Solutions",
  },
  {
    id: "02",
    tag: "Modernization & Automation",
    title: "Digital Transformation Solutions",
    desc: "We help organizations modernize operations through innovative digital technologies and seamless process automation, transitioning legacy practices into agile, digital-first ecosystems.",
    img: digital.url,
    features: [
      "Business Process Automation",
      "Digital Records Management",
      "Document Management Systems",
      "Cloud Migration Services",
      "Data Analytics & Reporting",
      "Workflow Management Solutions",
      "Corporate Portals",
      "Digital Strategy Consulting",
    ],
    cta: "Explore Digital Transformation",
  },
  {
    id: "03",
    tag: "Physical Security & Defense",
    title: "Surveillance & Security Solutions",
    desc: "BlueGuava provides advanced surveillance and integrated security solutions designed to protect people, assets, and critical infrastructure against physical and evolving security challenges.",
    img: security.url,
    features: [
      "CCTV Surveillance & IP Camera Systems",
      "Smart Video Analytics",
      "Biometric & Access Control Systems",
      "Alarm & Intrusion Detection Systems",
      "Command & Control Centres",
      "Remote Monitoring Solutions",
      "Vehicle Tracking Systems",
      "Security Network Infrastructure",
    ],
    cta: "Request Security Solutions",
  },
  {
    id: "04",
    tag: "Network Infrastructure",
    title: "IT Infrastructure Solutions",
    desc: "We design, deploy, and maintain robust and fault-tolerant IT infrastructure that guarantees maximum operational efficiency, data reliability, and high-performance organizational growth.",
    img: infra.url,
    features: [
      "Computer Networking & Wireless Solutions",
      "Server Deployment & Data Centre Solutions",
      "Structured Cabling Architecture",
      "Enterprise Network Security",
      "System Administration",
      "24/7 Infrastructure Maintenance",
    ],
    cta: "Consult Infrastructure Team",
  },
  {
    id: "05",
    tag: "Digital Skills & Capacity",
    title: "IT Training & Capacity Development",
    desc: "BlueGuava is deeply committed to developing cutting-edge digital skills and building comprehensive technology capacity for individuals, institutions, and modern organizations.",
    img: overview.url,
    features: [
      "Software Development & Web Dev",
      "Cybersecurity & AI Training",
      "Data Analytics & Database Management",
      "Networking & Cloud Computing",
      "CCTV Installation & Maintenance",
      "ICT Fundamentals & Digital Marketing",
    ],
    cta: "Explore Training Programs",
  },
];

const suite = [
  { name: "BlueCare™", tag: "Clinical Operations Suite", desc: "Coordinates hospital patient registers, smart pharmacy inventories, secure diagnostic registries, and multi-checkpoint visual billing in real time." },
  { name: "BlueAccess™", tag: "Enterprise Visitor Security", desc: "Automates visitor photo ID verification, thermal badge generation, customized host SMS alerts, and encrypted biometric facility authorization." },
  { name: "BlueHR™", tag: "Human Capital Management", desc: "Encompasses tamper-proof digital employee records, automated leave workflows, precision biometric attendance tracking, and localized enterprise payroll." },
  { name: "BlueCRM™", tag: "Interaction & Resolution Portal", desc: "A client-first communication platform linking institutional sales tracking, automated support resolution desks, secure communications, and analytical reporting." },
  { name: "BlueSecure™", tag: "Command & Control Console", desc: "Provides synchronized monitoring of high-definition fiber IP camera networks, maps automated perimeter alerts, and generates comprehensive defense auditing." },
  { name: "BlueLearn™", tag: "Workforce Training & Compliance", desc: "A responsive enterprise learning management suite hosting modular corporate curricula, automated proficiency testing, and auditable certification pathways." },
];

const team = [
  { name: "GEORGE, Olufemi O.", role: "Chief Data Officer", bio: "Full-Stack Engineer and Technical Co-Founder with 9+ years of experience building scalable web applications, backend services, and distributed systems using Next.js, React, Node.js, TypeScript, and PostgreSQL. Experienced in delivering products from architecture to deployment, including multi-tenant SaaS platforms, secure APIs, fintech solutions, Web3 applications, and third-party integrations.", img: null },
  { name: "Abdulrasheed Musa", role: "Chief Information Officer", bio: "Over 15 years implementing flagship technological platforms and national networks across Sub-Saharan Africa.", img: ceo.url },
  { name: "Solomon Yakubu", role: "Chief Technology Officer", bio: "Expert in microservice integrations, secure high scale database setups, and robust enterprise platform architectures.", img: cto.url },
  { name: "EMMANUEL, O. VICTOR", role: "Chief Financial Officer", bio: "Building a challenging career based on diligence in a unique and performance driven organization, putting effort in fulfilling my employer's goal, while leveraging my skills to continually contribute to the attainment of the organizational objectives and my career development.", img: null },
  { name: "Tukura Zhimane Aquila", role: "Full Stack Developer", bio: "A passionate Full Stack Developer specializing in building modern, responsive, and scalable web applications and websites. Skilled in front-end and back-end development, API integration, database management, and cloud deployment, with a strong interest in data science and artificial intelligence. Committed to delivering clean, efficient, and user-focused digital solutions that solve real-world problems.", img: null },
  { name: "HABAKKUK ETSU LUCKY", role: "Digital Forensic Professional", bio: "Motivated and detail-oriented Cybersecurity Science graduate with a Second Class Upper degree from the Federal University of Technology, Minna. Passionate about cybersecurity, digital forensics, information security, and digital literacy. Possesses a strong foundation in networking, operating systems, cybersecurity principles, and computer operations, complemented by leadership experience during the National Youth Service Corps (NYSC). Eager to contribute to organizational growth while continuously developing practical cybersecurity and IT skills.", img: null },
];


const sectors = [
  { icon: Landmark, label: "Government Agencies" },
  { icon: ShieldAlert, label: "Security Organizations" },
  { icon: Hospital, label: "Hospitals & Clinics" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Building2, label: "Financial Enterprises" },
  { icon: Briefcase, label: "Corporate Businesses" },
  { icon: Users, label: "SMEs" },
];

const orbits = [Code2, Cloud, ShieldCheck, Cpu, Globe, Settings, Boxes, Sparkles];

function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img src={logo.url} alt="BlueGuava" className={`${className} rounded-lg object-cover`} />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-14 z-50 w-[95%] max-w-6xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-white/60 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-brand-5">
            Blue<span className="text-brand-3">Guava</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm font-medium text-brand-5/80 transition-colors hover:bg-secondary hover:text-brand-5">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-gradient-deep px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-105 md:inline-block">
          Get Proposal
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-full bg-secondary p-2 text-brand-5">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-soft backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-2 text-sm font-medium text-brand-5/80 hover:bg-secondary">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-deep px-5 py-2.5 text-center text-sm font-semibold text-white">
              Get Proposal
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} id="overview" className="relative overflow-hidden bg-gradient-hero pb-24 pt-40">
      {/* Animated background orbits */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[280, 420, 560, 720, 880].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            className="absolute rounded-full border border-brand-2/20"
            style={{ width: size, height: size }}
          />
        ))}
        <motion.div className="absolute h-[880px] w-[880px] animate-spin-slow">
          {orbits.map((Icon, i) => {
            const angle = (i / orbits.length) * Math.PI * 2;
            const r = 380 + (i % 2) * 60;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white bg-white shadow-soft"
                style={{ x, y }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="animate-spin-slow" style={{ animationDirection: "reverse" }}>
                  <div className="flex h-12 w-12 items-center justify-center text-brand-3">
                    <Icon size={22} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating orbs */}
        <div className="absolute left-10 top-40 h-64 w-64 rounded-full bg-brand-1/30 blur-3xl animate-float-orb" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-leaf-1/20 blur-3xl animate-float-orb" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-brand-3/20 blur-3xl animate-float-orb" style={{ animationDelay: "4s" }} />
      </div>

      <motion.div style={{ y }} className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-brand-2/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-4 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-leaf-1 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-1" />
          </span>
          Building Africa's Digital Backbone
        </motion.div>

        <h1 className="text-5xl font-bold leading-[1.05] text-brand-5 md:text-7xl lg:text-8xl">
          {"Smart Technology".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block"
          >
            for a{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-block text-gradient-brand"
          >
            Smarter World.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-brand-5/70"
        >
          We build intelligent software, robust networks, and scalable systems that power businesses and communities across Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand transition-transform hover:scale-105">
            Explore Our Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-4 bg-white/60 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-brand-4 backdrop-blur transition-colors hover:bg-brand-4 hover:text-white">
            Contact Our Team
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl shadow-brand"
        >
          <img src={overview.url} alt="BlueGuava Enterprise Technology Architecture" className="h-[420px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-5/80 via-brand-5/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-1">Company Overview</span>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white md:text-5xl">
              Powering Next-Gen <span className="text-gradient-brand" style={{ WebkitBackgroundClip: "text", background: "linear-gradient(135deg, #61D3EE, #8BE07A)", WebkitTextFillColor: "transparent" }}>Digital Ecosystems</span>
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { icon: Code2, title: "Software Engineering", desc: "Custom platforms and data engines tailored for operational scale." },
            { icon: Cloud, title: "Cloud & Infrastructure", desc: "Secure network topology and distributed real-time cloud clusters." },
            { icon: ShieldCheck, title: "Enterprise Automation & Security", desc: "Zero-trust security frameworks, physical hardware integration, and automated enterprise workflows." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-brand"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                <item.icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-5">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-brand-5/80"
        >
          BlueGuava is a premier technology organization dedicated to building intelligent software systems, resilient cloud infrastructure, and robust enterprise solutions. We bridge complex operational challenges with scalable digital architectures designed for stability and high availability.
        </motion.p>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(0);
  const s = solutions[active];
  return (
    <section id="services" className="relative bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-3">Our Capabilities</span>
          <h2 className="mt-3 text-4xl font-bold text-brand-5 md:text-6xl">Services & Solutions</h2>
          <p className="mx-auto mt-5 max-w-3xl text-brand-5/70">
            Explore our comprehensive suite of innovative enterprise software solutions, digital transformation services, surveillance & security systems, reliable IT infrastructure, and professional capacity development.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {solutions.map((sol, i) => (
            <button
              key={sol.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                active === i
                  ? "bg-gradient-brand text-white shadow-brand"
                  : "bg-white text-brand-5/60 hover:text-brand-5"
              }`}
            >
              <span className="mr-2 opacity-70">{sol.id}</span>
              {sol.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-8 overflow-hidden rounded-3xl bg-white shadow-brand md:grid-cols-2"
        >
          <div className="relative min-h-[400px] overflow-hidden">
            <motion.img
              key={s.img}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={s.img}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-5/60 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-4">
              {s.tag}
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-3">Solution {s.id}</div>
            <h3 className="mt-2 text-3xl font-bold text-brand-5">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-brand-5/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-leaf" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-deep px-6 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-105">
              {s.cta} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-4 text-center text-xs font-semibold text-brand-5/40">
          {String(active + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

function SuiteSection() {
  return (
    <section id="suite" className="relative overflow-hidden bg-gradient-deep py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-1/20 blur-3xl animate-float-orb" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-leaf-1/10 blur-3xl animate-float-orb" style={{ animationDelay: "3s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-1">Proprietary Software Suite</span>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">The BlueSuite Platform</h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            Enterprise software modules architected for high-availability corporate and mission-critical environments. Deploy modules independently or seamlessly unify them into an automated central core.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suite.map((m, i) => (
            <motion.a
              key={m.name}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-brand-1/50 hover:bg-white/10"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-1/20 blur-2xl transition-all group-hover:bg-brand-1/40" />
              <div className="relative">
                <div className="text-2xl font-bold text-brand-1">{m.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{m.tag}</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{m.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-1 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row"
        >
          <div>
            <h4 className="text-2xl font-bold">Need a Custom Software Solution?</h4>
            <p className="mt-2 text-white/70">Our engineering team builds custom software platforms tailored to your business needs.</p>
          </div>
          <a href="#contact" className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-5 transition-transform hover:scale-105">
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-3">Verified Traction</span>
        <h2 className="mt-3 text-4xl font-bold text-brand-5 md:text-5xl">Partner Testimonials</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-gradient-to-br from-secondary to-white p-10 shadow-soft"
        >
          <div className="text-6xl font-serif leading-none text-brand-2">"</div>
          <p className="mt-2 text-lg leading-relaxed text-brand-5/80 md:text-xl">
            BlueCare completely restructured how we audit clinical revenue and trace outpatient registries. The local technical desk is exceptional and immediately responsive.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src={testBenjamin.url} alt="Dr. Benjamin Okafor" className="h-14 w-14 rounded-full object-cover ring-4 ring-white shadow-brand" />
            <div className="text-left">
              <div className="font-bold text-brand-5">Dr. Benjamin Okafor</div>
              <div className="text-xs text-muted-foreground">Clinical Director, Med-Link Hospital Hub</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-brand-4">
            <button className="rounded-full border border-brand-4/30 p-2 transition-colors hover:bg-brand-4 hover:text-white"><ChevronLeft size={16} /></button>
            <button className="rounded-full border border-brand-4/30 p-2 transition-colors hover:bg-brand-4 hover:text-white"><ChevronRight size={16} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="relative bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-3">Corporate Structure</span>
          <h2 className="mt-3 text-4xl font-bold text-brand-5 md:text-6xl">Executive Committee</h2>
          <p className="mx-auto mt-5 max-w-2xl text-brand-5/70">
            The engineers and strategists coordinating regional deployments inside Africa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all hover:shadow-brand"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {member.img ? (
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-brand">
                    <span className="text-5xl font-bold text-white/90">
                      {member.name.replace(/[^A-Za-z, ]/g, "").split(/[\s,]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-5/95 via-brand-5/40 to-transparent p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-1">{member.role}</div>
                  <div className="mt-1 text-2xl font-bold text-white">{member.name}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-3">Target Sectors</span>
          <h2 className="mt-3 text-3xl font-bold text-brand-5 md:text-5xl">Serving Strategic African Markets</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {sectors.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-soft transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                <s.icon size={24} />
              </div>
              <div className="mt-4 text-sm font-semibold text-brand-5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-deep py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-brand-1/20 blur-3xl animate-float-orb" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-leaf-1/10 blur-3xl animate-float-orb" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-1">Get In Touch</span>
            <h2 className="mt-3 text-4xl font-bold md:text-6xl">Talk to Our Team</h2>
            <p className="mt-5 max-w-lg text-white/70">
              Have a project in mind or need assistance? Reach out to us directly or fill out the form to schedule a conversation.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Phone Number", value: "09052889840", href: "tel:+2349052889840" },
                { icon: Mail, label: "Email Address", value: "blueguavang@gmail.com", href: "mailto:blueguavang@gmail.com" },
                { icon: MapPin, label: "Office Location", value: "65B ACFM Close, Behind Bakka Oil, Bako Kwali, Abuja." },
              ].map((c) => {
                const Wrap = c.href ? "a" : "div";
                return (
                  <Wrap
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-brand">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-1">{c.label}</div>
                      <div className="mt-0.5 font-semibold">{c.value}</div>
                    </div>
                  </Wrap>
                );
              })}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            name="blueguava-contact"
            method="POST"
            action="/thanks"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold">Send Us a Message</h3>
            <div className="mt-6 space-y-4">
              <input type="hidden" name="form-name" value="blueguava-contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              {[
                { label: "Your Name", name: "name", type: "text", placeholder: "Full name" },
                { label: "Industry / Organization", name: "organization", type: "text", placeholder: "Company or industry" },
                { label: "Email Address", name: "email", type: "email", placeholder: "you@company.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-1">{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder} required className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-1 focus:outline-none" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-1">Message / Project Details</label>
                <textarea name="message" rows={4} placeholder="Tell us about your project..." required className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-1 focus:outline-none" />
              </div>
              <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand transition-transform hover:scale-[1.02]">
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-brand-5">
            Blue<span className="text-brand-3">Guava</span>
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BlueGuava. Smart Technology for a Smarter World.
        </div>
      </div>
    </footer>
  );
}

function PartnerBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-[60] bg-gradient-deep py-2.5 px-4 text-center shadow-brand"
    >
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white md:text-sm">
        BlueGuava &amp; Xenolink Are Officially Development Partners
      </p>
    </motion.div>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <PartnerBanner />
      <Navbar />
      <Hero />
      <OverviewSection />
      <ServicesSection />
      <SuiteSection />
      <TestimonialsSection />
      <TeamSection />
      <SectorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

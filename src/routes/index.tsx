import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Calendar,
  Award,
  ShieldCheck,
  Microscope,
  HeartHandshake,
} from "lucide-react";

import heroClinic from "@/assets/hero-clinic.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryEquipment from "@/assets/gallery-equipment.jpg";
import gallerySmile from "@/assets/gallery-smile.jpg";
import { waLink, PHONE } from "../components/Layout";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyUs />
      <ExperienceOurClinic />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-8 pb-20 md:pt-16 md:pb-32 lg:pt-24 lg:pb-40">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 w-fit mb-6 md:mb-8">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-navy">
              Premium Dental Care • Vepagunta, Vizag
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-[32px] sm:text-[38px] md:text-[48px] lg:text-[64px] leading-[1.15] text-navy font-semibold">
            Transforming Smiles with Expert Orthodontic & General Dental Care
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base md:text-lg lg:text-xl text-charcoal/80 max-w-2xl font-light leading-relaxed">
            Led by Dr. Pentapalli Prasanthi, BDS, MDS, Specialist in Orthodontics and Dentofacial Orthopedics. Experience world-class care in a calming, premium environment.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold justify-center py-4 text-base w-full sm:flex-1 px-4">
              <Calendar className="h-5 w-5 shrink-0" /> Book Appointment
            </Link>
            <a
              href={waLink("Hi, I'd like to book an appointment at Dr. Prasanthi's Smile Care.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-display font-medium transition-all duration-300 shadow-sm bg-navy text-ivory hover:bg-royal justify-center py-4 text-base flex-1 px-4"
            >
              <MessageCircle className="h-5 w-5 shrink-0" /> WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full font-display font-medium transition-all duration-300 shadow-sm bg-navy text-ivory hover:bg-royal justify-center py-4 text-base flex-1 px-4 lg:hidden xl:flex">
              <Phone className="h-5 w-5 shrink-0" /> Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, t: "Orthodontist (MDS)" },
              { icon: ScanLine, t: "Digital X-Ray Available" },
              { icon: ShieldCheck, t: "Hospital-grade Sterilization" },
              { icon: HeartHandshake, t: "Personalized Treatment Plans" },
            ].map((ti, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <ti.icon className="h-5 w-5 text-gold" />
                <span className="text-xs md:text-sm font-medium text-navy leading-snug">{ti.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image and Floating Cards */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/60 aspect-[4/5] lg:aspect-[3/4]">
            <img
              src={heroClinic}
              alt="Premium dental suite"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute -left-4 md:-left-12 top-10 md:top-20 bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-5 shadow-elegant border border-white max-w-[200px] animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-0.5">Specialist Care</div>
                <div className="text-sm md:text-base font-semibold text-navy leading-tight">Orthodontist (MDS)</div>
              </div>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -right-4 md:-right-8 bottom-10 md:bottom-20 bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-5 shadow-elegant border border-white max-w-[200px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0">
                <ScanLine className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-0.5">Instant Diagnostics</div>
                <div className="text-sm md:text-base font-semibold text-navy leading-tight">Digital X-Ray Onsite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dummy icon for ScanLine not imported at top
function ScanLine(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, t: "Specialist Orthodontic Care", d: "MDS-led orthodontic treatment plans." },
    { icon: Microscope, t: "Advanced Technology", d: "Latest dental chairs, apex locators, digital tools." },
    { icon: ScanLine, t: "Digital Diagnostics", d: "Instant digital X-ray for precise assessments." },
    { icon: ShieldCheck, t: "Sterilised Environment", d: "Strict autoclaving & barrier protocols." },
  ];
  
  return (
    <section className="py-20 md:py-32 bg-pearl">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider">Why Choose Us</span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Care you can feel, quality you can trust.
          </h2>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group bg-white rounded-2xl p-8 border border-border/60 hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-elegant flex flex-col items-center text-center sm:items-start sm:text-left"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-full bg-navy/5 text-navy flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors mb-6">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-navy text-xl font-semibold mb-3">{it.t}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceOurClinic() {
  return (
    <section className="py-20 md:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="gold-divider">Experience Our Clinic</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
              A calming environment for your complete dental care.
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed text-lg">
              We have designed every aspect of our clinic to ensure your comfort. From the welcoming reception to our state-of-the-art treatment areas, you'll experience dentistry in a truly premium setting.
            </p>
            <div className="mt-8">
              <Link to="/services" className="btn-outline-navy py-3.5 px-8 inline-flex items-center gap-2 rounded-full border border-navy/20 hover:border-gold hover:text-gold transition-colors font-medium text-navy">
                Explore Our Services
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="flex flex-col gap-4 md:gap-6 pt-12 md:pt-20">
              <img src={galleryReception} alt="Clinic Reception" className="rounded-2xl shadow-elegant object-cover w-full h-48 md:h-64 transition-transform hover:scale-105 duration-700" />
              <img src={gallerySmile} alt="Happy Patient" className="rounded-2xl shadow-elegant object-cover w-full h-40 md:h-56 transition-transform hover:scale-105 duration-700" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <img src={galleryEquipment} alt="Modern Dental Equipment" className="rounded-2xl shadow-elegant object-cover w-full h-56 md:h-72 transition-transform hover:scale-105 duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

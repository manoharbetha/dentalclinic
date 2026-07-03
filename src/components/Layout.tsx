import { useState, useEffect, type FormEvent } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Zap, Menu, X, MapPin, MessageCircle, Clock, ArrowUp, ChevronRight } from "lucide-react";

export const PHONE = "+918500230245";
export const PHONE_DISPLAY = "+91 85002 30245";
export const WHATSAPP = "918500230245";
export const MAPS_URL = "https://maps.app.goo.gl/JwbANQqdDbjRFLyE7?g_st=aw";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctor", href: "/doctor" },
  { label: "Services", href: "/services" },
  { label: "Our Commitment", href: "/commitment" },
  { label: "Contact", href: "/contact" },
];

export function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3 min-w-0">
      <img 
        src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783102861/logo_zemlw8.png" 
        alt="Dr. Prasanthi's Smile Care Logo" 
        className="h-8 md:h-12 w-auto object-contain shrink-0"
      />
      <div className="flex flex-col mt-0.5 min-w-0">
        <div className="font-display text-navy text-sm sm:text-base md:text-xl font-semibold tracking-wide leading-none truncate">
          Dr. Prasanthi's
        </div>
        <div className="font-display text-navy text-sm sm:text-base md:text-xl font-semibold tracking-wide mt-1 leading-none truncate">
          Smile Care
        </div>
      </div>
    </div>
  );
}

export function EmergencyBanner() {
  return (
    <div className="bg-navy text-ivory text-xs md:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-ivory/80">
          <Zap className="h-3.5 w-3.5 text-gold shrink-0" />
          <span className="truncate">24×7 Dental Emergency Support</span>
        </span>
        <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-gold hover:underline font-medium">
          <Phone className="h-3.5 w-3.5 shrink-0" /> {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled || mobileMenuOpen
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(15,44,89,0.15)]"
          : "bg-ivory/80 backdrop-blur-sm md:bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="z-50 shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="text-sm text-navy/80 hover:text-navy [&.active]:text-navy [&.active]:font-medium relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-gold after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link to="/contact" className="btn-gold text-sm py-2.5 px-5">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2 -mr-2 text-navy min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-ivory/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-center gap-8 w-full px-6 pb-20">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display text-navy/80 hover:text-navy [&.active]:text-navy [&.active]:font-semibold relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-2 hover:after:w-full after:transition-all min-h-[44px] flex items-center justify-center"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-8">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold text-base py-3 px-8 min-h-[44px]">
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-ivory/80 pt-16 md:pt-20 pb-10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-ivory to-pearl flex items-center justify-center shrink-0">
              <span className="font-display text-navy text-xl font-bold">P</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-ivory text-xl">Dr. Prasanthi's Smile Care</div>
            </div>
          </div>
          <p className="mt-5 text-sm max-w-md text-ivory/70 leading-relaxed">
            Premium multispeciality dental clinic in Vepagunta, Visakhapatnam.
            Advanced orthodontics, cosmetic and restorative dentistry delivered
            with compassion.
          </p>
          <div className="mt-6 border-l-2 border-gold pl-4 text-sm">
            <div className="text-gold text-[10px] uppercase tracking-widest font-medium mb-1">Led By</div>
            <div className="text-ivory font-medium">Dr. Pentapalli Prasanthi, BDS, MDS</div>
            <div className="text-ivory/60 mt-0.5 text-xs">
              Orthodontics & Dentofacial Orthopedics<br/>Reg No. A25779
            </div>
          </div>
        </div>

        <div>
          <div className="text-gold text-xs uppercase tracking-widest mb-5 font-semibold">Explore</div>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="hover:text-gold transition-colors inline-block">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-gold text-xs uppercase tracking-widest mb-5 font-semibold">Reach Us</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <span className="leading-snug">Srinivasa Nagar, Vepagunta,<br/>Visakhapatnam</span></li>
            <li className="flex gap-3 items-center"><Phone className="h-4 w-4 text-gold shrink-0" /> <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-3 items-center"><MessageCircle className="h-4 w-4 text-gold shrink-0" /> <a href={waLink("Hello!")} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">WhatsApp Us</a></li>
            <li className="flex gap-3 items-center"><Clock className="h-4 w-4 text-gold shrink-0" /> <span>Mon–Sat · 10AM–8PM</span></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
        <div className="text-center md:text-left">© {new Date().getFullYear()} Dr. Prasanthi's Smile Care. All rights reserved.</div>
        <div>Vepagunta · Visakhapatnam</div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Dr. Prasanthi's Smile Care, I'd like to book an appointment.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(16,185,129,0.5)] transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
    </a>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-40 h-11 w-11 rounded-full bg-navy text-gold flex items-center justify-center shadow-elegant hover:bg-royal transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest text-navy/70 font-semibold mb-2 block">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}

export const inputStyle = `
  .input {
    width: 100%;
    background: var(--ivory);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 0.875rem 1rem;
    font-size: 1rem;
    color: var(--charcoal);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    -webkit-appearance: none;
  }
  .input:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px oklch(0.72 0.09 80 / 0.15);
  }
`;

export function StyleInject() {
  return <style>{inputStyle}</style>;
}

export function LeadPopup() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", treatment: "" });
  const router = useRouterState();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("leadShown")) return;
    if (router.location.pathname === "/contact") return; // Do not show on contact page

    let timeout: NodeJS.Timeout;
    let fired = false;

    const trigger = () => {
      if (fired) return;
      fired = true;
      setShow(true);
      sessionStorage.setItem("leadShown", "1");
      window.removeEventListener("scroll", scrollHandler);
    };

    const scrollHandler = () => {
      // Trigger at 50% scroll depth
      const scrollDepth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollDepth > 0.5) {
        trigger();
        clearTimeout(timeout);
      }
    };

    // Trigger after 25 seconds
    timeout = setTimeout(() => {
      trigger();
    }, 25000);

    window.addEventListener("scroll", scrollHandler, { passive: true });
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [router.location.pathname]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Free Consultation Request\nName: ${form.name}\nPhone: ${form.phone}\nInterested Treatment: ${form.treatment}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
    setTimeout(() => setShow(false), 1500);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-ivory rounded-2xl max-w-md w-full overflow-hidden shadow-elegant border border-gold/30 flex flex-col max-h-[90vh]">
        <div className="relative bg-navy text-ivory p-6 shrink-0">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="gold-divider">Limited Offer</div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">Free Consultation</h3>
          <p className="mt-2 text-sm text-ivory/80 leading-relaxed">
            Speak directly with our dental experts. No obligations.
          </p>
        </div>
        <div className="p-6 overflow-y-auto">
          <form onSubmit={submit} className="space-y-5">
            <Field label="Your Name" required>
              <input
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="Full name"
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                required
                type="tel"
                pattern="[0-9+ ]{7,15}"
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input"
                placeholder="+91 ..."
              />
            </Field>
            <Field label="Interested Treatment">
              <select
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className="input bg-white"
              >
                <option value="">Select an option</option>
                <option>Braces / Aligners</option>
                <option>Root Canal</option>
                <option>Implants</option>
                <option>Teeth Whitening</option>
                <option>General Check-up</option>
                <option>Other</option>
              </select>
            </Field>
            <button type="submit" className="btn-gold w-full py-4 text-base mt-2">
              {sent ? "✓ Sent to WhatsApp" : "Get Free Consultation"}
            </button>
            <p className="text-[11px] text-charcoal/50 text-center px-4 leading-relaxed">
              By submitting, you agree to be contacted regarding your enquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

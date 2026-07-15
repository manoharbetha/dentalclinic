import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Phone,
  MessageCircle,
  Star,
  ChevronRight,
  ShieldCheck,
  Microscope,
  Award,
  MapPin,
  ExternalLink
} from "lucide-react";
import { waLink, PHONE, PHONE_DISPLAY } from "./Layout";

export function MobileHome() {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. Mobile Hero */}
      <section className="bg-ivory pt-6 pb-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        {/* Emotional Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-elegant mb-6">
          <img
            src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783103415/clinic_pic_Ai_vvrqf4.png"
            alt="Smile With Confidence"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
             <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
               <Star className="h-3.5 w-3.5 fill-gold text-gold" />
               <span className="text-[11px] font-bold text-navy">5.0</span>
             </div>
             <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
               <span className="text-[11px] font-semibold text-navy">26 Reviews</span>
             </div>
          </div>
        </div>

        {/* Short Headline */}
        <h1 className="font-display text-[32px] leading-[1.15] text-navy font-semibold tracking-tight">
          Smile With Confidence.
        </h1>
        <p className="mt-3 text-[15px] text-charcoal/80 leading-relaxed font-light">
          Expert Orthodontic & General Dental Care in Vepagunta.
        </p>

        {/* Trust Chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Orthodontist (MDS)",
            "Digital X-Ray",
            "Sterilized Clinic",
            "Open Daily",
          ].map((chip, idx) => (
            <div key={idx} className="bg-navy/5 px-2.5 py-1 rounded-md flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-gold" />
              <span className="text-xs font-medium text-navy/80">{chip}</span>
            </div>
          ))}
        </div>

        {/* Stacked CTAs */}
        <div className="mt-8 flex flex-col gap-3">
          <Link to="/contact" className="btn-gold justify-center py-3.5 text-[15px] w-full">
            <Calendar className="h-4 w-4 shrink-0" /> Book Appointment
          </Link>
          <a
            href={waLink("Hi, I'd like to book an appointment at Dr. Prasanthi's Smile Care.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-display font-medium transition-all duration-300 shadow-sm bg-navy text-ivory hover:bg-royal justify-center py-3.5 text-[15px] w-full"
          >
            <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full font-display font-medium transition-all duration-300 shadow-sm bg-white border border-border text-navy hover:bg-pearl justify-center py-3.5 text-[15px] w-full">
            <Phone className="h-4 w-4 shrink-0" /> Call Now
          </a>
        </div>
      </section>

      {/* 2. Doctor Preview */}
      <section className="py-10 px-4 bg-pearl border-t border-navy/5">
        <h2 className="font-display text-2xl text-navy mb-5">Meet the Doctor</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-border/50 flex gap-4 items-center">
          <div className="h-20 w-20 shrink-0 rounded-full overflow-hidden border-2 border-gold/20">
            <img 
              src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783098772/IMG-20260703-WA0000.jpg_yfewgz.jpg" 
              alt="Dr. Prasanthi"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy text-lg leading-tight">Dr. P. Prasanthi</h3>
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mt-1 mb-1.5">Orthodontist (MDS)</div>
            <p className="text-[13px] text-charcoal/70 leading-snug">Expert in braces, aligners, and comprehensive smile design.</p>
          </div>
        </div>
        <Link to="/doctor" className="mt-4 bg-white border border-border/50 rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform">
          <div className="font-medium text-navy text-sm">Learn more about Dr. Prasanthi</div>
          <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </section>

      {/* 3. Top Services Preview */}
      <section className="py-10 px-4 bg-white">
        <h2 className="font-display text-2xl text-navy mb-5">Our Expertise</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Award, t: "Braces & Aligners", d: "Straighten smiles" },
            { icon: ShieldCheck, t: "Root Canals", d: "Painless relief" },
            { icon: Microscope, t: "Dental Implants", d: "Permanent teeth" },
            { icon: Star, t: "Teeth Whitening", d: "Brighten instantly" },
            { icon: Calendar, t: "General Checkup", d: "Routine care" },
            { icon: Phone, t: "Emergencies", d: "Urgent relief" },
          ].map((s, i) => (
            <div key={i} className="bg-pearl rounded-xl p-4 border border-navy/5">
              <s.icon className="h-5 w-5 text-gold mb-2" />
              <h4 className="font-display text-navy font-semibold text-[15px] leading-tight mb-1">{s.t}</h4>
              <p className="text-[11px] text-charcoal/60 leading-tight">{s.d}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="mt-4 bg-pearl border border-border/50 rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform">
          <div className="font-medium text-navy text-sm">Explore All Treatments</div>
          <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </section>

      {/* 4. Clinic Preview */}
      <section className="py-10 px-4 bg-navy text-ivory">
        <h2 className="font-display text-2xl mb-5">Inside Our Clinic</h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 pb-2 -mx-4 px-4">
          {[
            { img: "https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783105462/4fd50618-4db3-4a85-9587-37875489df7a_hbka2w.png", text: "Modern Sterilization" },
            { img: "https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783103787/reception_wk1y5d.png", text: "Premium Interiors" },
            { img: "https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783105666/7cefd7a2-a8bf-41e1-8833-8e945c08c746_cfwugr.png", text: "Advanced hi Equipment" }
          ].map((c, i) => (
            <div key={i} className="snap-center shrink-0 w-[240px] relative rounded-xl overflow-hidden aspect-[4/3] border border-ivory/10">
              <img src={c.img} alt={c.text} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
              <div className="absolute bottom-3 left-3 text-[13px] font-medium tracking-wide text-ivory">{c.text}</div>
            </div>
          ))}
        </div>
        <Link to="/about" className="mt-4 bg-ivory/10 border border-ivory/20 rounded-xl p-4 flex items-center justify-between active:scale-[0.98] transition-transform">
          <div className="font-medium text-ivory text-sm">Tour Our Clinic</div>
          <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      </section>

      {/* 5. Google Reviews Preview */}
      <section className="py-10 px-4 bg-ivory border-b border-navy/5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-2xl text-navy">Patient Stories</h2>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="font-bold text-navy text-sm">5.0</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { n: "Karthik P.", t: "Excellent dental clinic! The doctor was very professional, kind, and explained the treatment clearly." },
            { n: "Murali Krishna", t: "Had an excellent experience. The doctors and staff were very professional, friendly, and caring." },
            { n: "Seepana Yaswanth", t: "Excellent service and a wonderful experience. The dentist was kind and patient." }
          ].map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-border/60 shadow-sm">
              <div className="flex items-center gap-0.5 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 fill-gold text-gold" />)}
              </div>
              <p className="text-[13px] text-charcoal/80 leading-relaxed mb-3">"{r.t}" <span className="text-gold font-medium">Read More</span></p>
              <div className="flex items-center justify-between">
                <div className="font-display font-semibold text-navy text-sm">{r.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold">Verified</div>
              </div>
            </div>
          ))}
        </div>
        <a 
          href="https://www.google.com/maps/place/Dr.Prasanthi's+Smile+Care/@17.7736856,83.2294754,17z/data=!4m8!3m7!1s0x3a3967a29abe9f2f:0xbbc6aeb1866993e4!8m2!3d17.7736856!4d83.2294754!9m1!1b1!16s%2Fg%2F11nqxy38ty!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="mt-4 bg-white border border-border/50 rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="font-medium text-navy text-sm flex items-center gap-2">
            See all 26 Google Reviews
          </div>
          <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <ExternalLink className="h-3.5 w-3.5" />
          </div>
        </a>
      </section>

      {/* 6. Location & Contact Preview */}
      <section className="py-10 px-4 bg-pearl">
        <h2 className="font-display text-2xl text-navy mb-5">Visit Us</h2>
        <div className="bg-white rounded-xl overflow-hidden border border-border/60 shadow-sm mb-4">
          <iframe
            title="Dr. Prasanthi's Smile Care map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.302324901509!2d83.22689517593649!3d17.777478083177708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967a29abe9f2f%3A0xbbc6aeb1866993e4!2sDr.Prasanthi&#39;s%20Smile%20Care!5e0!3m2!1sen!2sin!4v1709494632832!5m2!1sen!2sin"
            className="w-full h-40 border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-4">
            <div className="flex gap-3 mb-3">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <p className="text-[13px] text-charcoal/80 leading-relaxed">
                BRTS Road, Above Apollo Pharmacy,<br/>
                Opposite Simhapuri Layout Arch,<br/>
                Vepagunta, AP 530047
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[13px] font-medium text-navy">Open Daily · Closes at 7:00 PM</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <a href={`tel:${PHONE}`} className="bg-white border border-border/50 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-navy shadow-sm">
            <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
          </a>
          <a href={waLink("Hi, I need directions to the clinic.")} target="_blank" rel="noreferrer" className="bg-white border border-border/50 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-navy shadow-sm">
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
          </a>
        </div>
        <a 
          href="https://maps.app.goo.gl/JwbANQqdDbjRFLyE7?g_st=aw"
          target="_blank"
          rel="noreferrer"
          className="btn-gold justify-center py-4 text-base w-full shadow-sm"
        >
          <MapPin className="h-4 w-4" /> Get Directions
        </a>
      </section>
    </div>
  );
}

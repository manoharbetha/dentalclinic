import { createFileRoute } from "@tanstack/react-router";
import { Smile, Leaf, Activity, Layers, Anchor, Wand2, Scissors, Wind, ScanLine, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import galleryEquipment from "@/assets/gallery-equipment.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const groups = [
    {
      cat: "Orthodontics",
      icon: Smile,
      items: ["Braces", "Clear Aligners", "Smile Correction"],
    },
    {
      cat: "Preventive & General",
      icon: Leaf,
      items: ["Scaling (Teeth Cleaning)", "Dental Fillings"],
    },
    {
      cat: "Endodontics",
      icon: Activity,
      items: ["Root Canal Treatment"],
    },
    {
      cat: "Restorative Dentistry",
      icon: Layers,
      items: ["Crowns and Bridges", "Complete Dentures"],
    },
    {
      cat: "Implant Dentistry",
      icon: Anchor,
      items: ["Dental Implants"],
    },
    {
      cat: "Cosmetic Dentistry",
      icon: Wand2,
      items: ["Teeth Whitening"],
    },
    {
      cat: "Oral Surgery",
      icon: Scissors,
      items: ["Impactions (Wisdom Tooth Removal)"],
    },
    {
      cat: "Periodontal Care",
      icon: Wind,
      items: ["Gum Problem Treatments"],
    },
    {
      cat: "Diagnostics",
      icon: ScanLine,
      items: ["Digital X-Ray"],
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <section className="py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="gold-divider">Our Services</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy">
              Complete dental care under one elegant roof.
            </h2>
            <p className="mt-4 text-charcoal/70 mb-8 md:mb-10">
              From routine care to full-mouth rehabilitation, every treatment is
              delivered with precision and warmth.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-elegant w-full h-48 md:h-64 mb-12">
              <img 
                src={galleryEquipment} 
                alt="Advanced Dental Technology"
                loading="lazy"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {groups.map((g) => (
              <article
                key={g.cat}
                className="relative bg-white rounded-2xl p-4 md:p-8 border border-border/60 hover:border-gold transition-all duration-300 hover:shadow-elegant group overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
                <div className="relative flex items-start justify-between">
                  <div className="h-14 w-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                    <g.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gold">
                    Speciality
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg md:text-2xl text-navy leading-tight">{g.cat}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-charcoal/80 text-sm">
                      <ChevronRight className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs md:text-sm gap-2">
                  <span className="text-charcoal/50 italic leading-tight">Pricing on consultation</span>
                  <Link
                    to="/contact"
                    className="text-navy font-medium hover:text-gold transition-colors inline-flex items-center gap-1 min-h-[44px]"
                  >
                    Enquire <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Stethoscope,
  Heart,
  ChevronRight,
  Activity,
  Award,
  Sparkles,
  Users
} from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/commitment")({
  component: CommitmentPage,
});

function CommitmentPage() {
  const commitments = [
    {
      title: "Qualified Specialist (MDS)",
      desc: "Led by Dr. Prasanthi, a highly qualified Orthodontist ensuring expert care.",
      icon: Award,
    },
    {
      title: "Hospital-Grade Sterilization",
      desc: "We follow strict protocols to guarantee a safe, hygienic environment.",
      icon: ShieldCheck,
    },
    {
      title: "Digital & Modern Diagnostics",
      desc: "Equipped with on-site digital X-rays for precise, immediate diagnosis.",
      icon: Activity,
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Every smile is unique, and so is our tailored approach to your dental health.",
      icon: Stethoscope,
    },
    {
      title: "Comfortable Experience",
      desc: "A calming ambiance designed to keep dental anxiety entirely at bay.",
      icon: Heart,
    },
    {
      title: "Ethical & Transparent Care",
      desc: "No hidden costs. We explain your options clearly before any procedure.",
      icon: Sparkles,
    },
    {
      title: "Emergency Dental Support",
      desc: "Reliable support when you need urgent relief from dental pain.",
      icon: ShieldCheck,
    },
    {
      title: "Patient-First Approach",
      desc: "Your well-being is our highest priority from the moment you step in.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="gold-divider">Our Commitment</span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-tight">
              Why Patients Will Trust Us
            </h1>
            <p className="mt-6 text-charcoal/70 leading-relaxed md:text-lg">
              As we prepare to open our doors, our foundation is built on absolute transparency, uncompromising hygiene, and specialized expertise.
            </p>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-5">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-navy font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-32 max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-3xl border border-gold/20 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <Sparkles className="h-8 w-8 text-gold mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl text-navy mb-4">
                A New Standard of Dental Care
              </h2>
              <p className="text-charcoal/80 text-lg italic leading-relaxed max-w-2xl mx-auto">
                "We are excited to welcome our first patients. Genuine patient testimonials and success stories will be shared here as we begin serving our wonderful community."
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/contact" className="btn-gold px-8 py-3.5 min-h-[44px]">
                  Be Among Our First Patients <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

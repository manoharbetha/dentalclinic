import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MessageCircle } from "lucide-react";
import { waLink } from "../components/Layout";
import galleryTreatment from "@/assets/gallery-treatment.jpg";

export const Route = createFileRoute("/doctor")({
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <div className="min-h-screen bg-navy text-ivory">
      <section className="py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C7A96B 0%, transparent 40%), radial-gradient(circle at 80% 80%, #1E4FA3 0%, transparent 40%)" }} />
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-10 md:gap-14 items-center relative">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/40 to-royal/30 blur-2xl rounded-3xl" />
              <img
                src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783098772/IMG-20260703-WA0000.jpg_yfewgz.jpg"
                alt="Dr. Pentapalli Prasanthi"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative rounded-2xl w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] object-cover shadow-elegant border border-gold/30"
              />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 bg-navy/90 backdrop-blur border border-gold/30 rounded-xl px-4 py-3 md:px-5 md:py-4">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-gold font-semibold mb-1">Reg. No.</div>
                <div className="text-ivory font-display text-lg md:text-xl">A25779</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="gold-divider">Meet Your Doctor</span>
            <h2 className="mt-4 md:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Dr. Pentapalli Prasanthi
              <span className="block text-gold text-xl sm:text-2xl md:text-3xl mt-2 md:mt-3 font-normal italic">
                BDS, MDS
              </span>
            </h2>
            <div className="mt-4 md:mt-5 text-base md:text-lg text-ivory/90 font-medium leading-snug">
              Specialist in Orthodontics & Dentofacial Orthopedics
            </div>

            <p className="mt-6 text-ivory/80 leading-relaxed max-w-2xl text-base md:text-lg">
              Dr. Prasanthi is committed to providing advanced orthodontic and
              dental care using modern technology and personalised treatment plans
              to help patients achieve healthy, confident smiles. Her practice
              centres on precision diagnostics, patient education, and gentle
              clinical technique — so every visit feels calm, unhurried and
              reassuring.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { k: "Specialisation", v: "Orthodontics" },
                { k: "Sub-Specialty", v: "Dentofacial Orthopedics" },
                { k: "Qualification", v: "BDS · MDS" },
              ].map((s) => (
                <div key={s.k} className="border border-gold/25 rounded-xl p-5 bg-ivory/[0.03] backdrop-blur-sm">
                  <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">{s.k}</div>
                  <div className="font-display text-lg">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <img 
                src={galleryTreatment} 
                alt="Modern Treatment Room"
                loading="lazy"
                className="w-full h-40 md:h-56 object-cover rounded-2xl shadow-elegant border border-gold/20"
              />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-gold justify-center py-4 sm:w-auto w-full">
                <Calendar className="h-5 w-5" /> Book Consultation
              </a>
              <a
                href={waLink("Hi Dr. Prasanthi, I'd like to schedule a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-ivory justify-center py-4 sm:w-auto w-full"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

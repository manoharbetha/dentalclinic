import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Microscope, HeartHandshake, Sparkles } from "lucide-react";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryTreatment from "@/assets/gallery-treatment.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Intro Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={galleryReception}
              alt="Reception at Dr. Prasanthi's Smile Care"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-elegant w-full object-cover aspect-square md:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 bg-navy text-ivory p-5 md:p-6 rounded-2xl shadow-elegant max-w-[200px] md:max-w-[240px]">
              <div className="text-gold text-3xl md:text-4xl font-display font-semibold">10+</div>
              <div className="text-xs md:text-sm text-ivory/80 mt-1">Years of trusted dental expertise</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="gold-divider">About The Clinic</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-tight">
              A refined space for
              <span className="italic text-royal block mt-2"> modern dentistry.</span>
            </h2>
            <p className="mt-6 text-charcoal/80 leading-relaxed text-base md:text-lg">
              Dr. Prasanthi's Smile Care is a premium multispeciality dental clinic
              in Vepagunta, Visakhapatnam. Every corner has been designed to feel
              calm, hygienic and reassuring — from our elegant reception to fully
              sterilised treatment rooms equipped with the latest dental
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Alternate Image/Text Section */}
      <section className="py-16 md:py-24 bg-pearl border-y border-navy/5">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-3xl md:text-4xl text-navy mb-5">
                Precision & Care
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Our treatment areas are meticulously maintained and feature modern ergonomic dental chairs to ensure patient comfort even during longer procedures. We believe that a relaxed patient leads to a better clinical outcome.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <HeartHandshake className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy font-semibold">Patient Comfort</h4>
                    <p className="text-sm text-charcoal/60 mt-1">Gentle care with anxiety-friendly communication at every step.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Sparkles className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy font-semibold">Evidence-Based Care</h4>
                    <p className="text-sm text-charcoal/60 mt-1">Treatment philosophies rooted in international clinical standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={galleryTreatment}
                alt="Modern Treatment Room"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Image/Text Section 2 */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src={heroClinic}
                alt="Advanced Dental Technology"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-navy mb-5">
                Uncompromising Standards
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                We refuse to cut corners when it comes to hygiene and diagnosis. Our clinic is equipped with advanced sterilization protocols and on-site digital imaging.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy font-semibold">Hospital-Grade Hygiene</h4>
                    <p className="text-sm text-charcoal/60 mt-1">Autoclaved instruments, disposable barriers, strict sterilisation protocols.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                    <Microscope className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-navy font-semibold">Advanced Equipment</h4>
                    <p className="text-sm text-charcoal/60 mt-1">Digital X-ray, apex locators, ultrasonic scalers & modern chairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

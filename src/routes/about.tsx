import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Microscope, HeartHandshake, Sparkles, Star } from "lucide-react";
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
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783103787/reception_wk1y5d.png"
              alt="Reception at Dr. Prasanthi's Smile Care"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-elegant w-full object-cover aspect-square md:aspect-[4/5]"
            />
          </div>

          <div className="mt-4 lg:mt-0">
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
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-gold/20 bg-white shadow-sm">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <Star className="h-4 w-4 fill-gold text-gold" />
                <Star className="h-4 w-4 fill-gold text-gold" />
                <Star className="h-4 w-4 fill-gold text-gold" />
                <Star className="h-4 w-4 fill-gold text-gold" />
              </div>
              <div className="h-4 w-px bg-border"></div>
              <span className="text-sm font-semibold text-navy">5.0 Google Rating <span className="font-normal text-charcoal/70">(26 Reviews)</span></span>
            </div>
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
                src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783105666/7cefd7a2-a8bf-41e1-8833-8e945c08c746_cfwugr.png"
                alt="Modern Treatment Room"
                loading="lazy"
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
                src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783103415/clinic_pic_Ai_vvrqf4.png"
                alt="Advanced Dental Technology"
                loading="lazy"
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

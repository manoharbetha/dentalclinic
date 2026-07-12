import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
});

const REVIEWS = [
  {
    name: "Karthik P.",
    text: "Excellent dental clinic! The doctor was very professional, kind, and explained the treatment clearly. The staff were friendly and helpful, and the clinic was very clean and hygienic. The treatment was comfortable, and I am very satisfied with the results. I highly recommend this clinic to anyone looking for quality dental care.",
  },
  {
    name: "Mahalaxmi",
    text: "Super experience with doctor and treatment.",
  },
  {
    name: "Vardhu Kowsi",
    text: "Good treatment.",
  },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-navy text-ivory relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 bg-gold/5 w-fit mb-8 shadow-sm">
            <div className="flex gap-0.5 text-gold">
              <Star className="h-4 w-4 fill-gold" />
              <Star className="h-4 w-4 fill-gold" />
              <Star className="h-4 w-4 fill-gold" />
              <Star className="h-4 w-4 fill-gold" />
              <Star className="h-4 w-4 fill-gold" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-ivory">
              5.0 Google Rating <span className="text-ivory/70 font-normal">(26 Reviews)</span>
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">
            Trusted by Our Patients
          </h1>
          <p className="text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            We measure our success by the smiles and satisfaction of those we treat. 
            Read what our patients have to say about their experience at Dr. Prasanthi's Smile Care.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--gold)_0%,transparent_60%)] mix-blend-screen" />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((review, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 md:p-10 border border-border/60 shadow-sm hover:shadow-elegant transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 text-gold mb-6">
                  <Star className="h-5 w-5 fill-gold" />
                  <Star className="h-5 w-5 fill-gold" />
                  <Star className="h-5 w-5 fill-gold" />
                  <Star className="h-5 w-5 fill-gold" />
                  <Star className="h-5 w-5 fill-gold" />
                </div>
                <p className="text-charcoal/80 leading-relaxed mb-8 grow text-base md:text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center text-navy font-display font-semibold text-xl shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-navy text-lg">{review.name}</div>
                    <div className="text-xs text-charcoal/50 uppercase tracking-widest font-medium mt-0.5">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-navy mb-8">
              Read all our success stories on Google
            </h3>
            <a 
              href="https://g.page/r/your-google-link" 
              target="_blank" 
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

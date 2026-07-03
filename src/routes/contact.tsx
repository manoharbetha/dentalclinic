import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { Clock, MapPin, Phone, MessageCircle, Calendar } from "lucide-react";
import { PHONE, PHONE_DISPLAY, MAPS_URL, waLink, Field } from "../components/Layout";
import galleryReception from "@/assets/gallery-reception.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const MAPS_EMBED = "https://www.google.com/maps?q=Srinivasa+Nagar+Vepagunta+Visakhapatnam&output=embed";

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hours />
      <Contact />
      <FAQ />
    </div>
  );
}

function Hours() {
  const schedule = [
    ["Monday", "10:00 AM – 8:00 PM"],
    ["Tuesday", "10:00 AM – 8:00 PM"],
    ["Wednesday", "10:00 AM – 8:00 PM"],
    ["Thursday", "10:00 AM – 8:00 PM"],
    ["Friday", "10:00 AM – 8:00 PM"],
    ["Saturday", "10:00 AM – 8:00 PM"],
    ["Sunday", "Emergency appointments only"],
  ];

  const status = useOpenStatus();

  return (
    <section className="py-24 bg-navy text-ivory relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="gold-divider">Opening Hours</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Open six days a week
            <span className="block text-gold italic text-3xl md:text-4xl mt-2">
              for your smile.
            </span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gold/30 bg-ivory/[0.05]">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                status.open ? "bg-emerald-400 animate-pulse" : "bg-red-400"
              }`}
            />
            <span className="text-sm">
              <strong className={status.open ? "text-emerald-300" : "text-red-300"}>
                {status.open ? "Open Now" : "Closed"}
              </strong>
              <span className="text-ivory/70"> · {status.label}</span>
            </span>
          </div>
        </div>

        <div className="bg-ivory/[0.04] border border-gold/20 rounded-2xl p-8 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-5 w-5 text-gold" />
            <h3 className="font-display text-2xl">Weekly Schedule</h3>
          </div>
          <ul className="divide-y divide-ivory/10">
            {schedule.map(([day, time]) => (
              <li key={day} className="py-3 flex justify-between text-sm">
                <span className="text-ivory/80">{day}</span>
                <span className="text-gold font-medium text-right">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function useOpenStatus() {
  const [status, setStatus] = useState({ open: false, label: "" });
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours() + now.getMinutes() / 60;
      if (day === 0) {
        setStatus({ open: false, label: "Sunday · Emergency only" });
      } else if (hour >= 10 && hour < 20) {
        setStatus({ open: true, label: "Closes at 8:00 PM" });
      } else {
        setStatus({ open: false, label: "Opens at 10:00 AM" });
      }
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  return status;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
    notes: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `New Appointment Request\nName: ${form.name}\nMobile: ${form.phone}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\nTreatment: ${form.treatment}\nNotes: ${form.notes}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  }

  return (
    <section className="py-24 md:py-32 bg-pearl">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider">Visit Us</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-navy">
            Book your appointment.
          </h2>
          <p className="mt-4 text-charcoal/70">
            We're right on BRTS Road, above Apollo Pharmacy, opposite Simhapuri
            Layout Arch — easy to find and easy to reach.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-navy text-ivory rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl text-gold">Get in touch</h3>

            <div className="mt-8 space-y-6">
              <ContactRow icon={MapPin} title="Address">
                BRTS Road, Above Apollo Pharmacy,<br />
                Opposite Simhapuri Layout Arch,<br />
                Srinivasa Nagar, Vepagunta,<br />
                Visakhapatnam, Andhra Pradesh
              </ContactRow>
              <ContactRow icon={Phone} title="Call">
                <a href={`tel:${PHONE}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} title="WhatsApp">
                <a
                  href={waLink("Hello Dr. Prasanthi's Smile Care!")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </ContactRow>
              <ContactRow icon={Clock} title="Hours">
                Mon – Sat · 10:00 AM – 8:00 PM<br />
                Sunday · Emergencies only
              </ContactRow>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-gold text-sm min-h-[44px] flex items-center justify-center">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={waLink("Hi, I'd like to know more about your services.")}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-ivory text-sm min-h-[44px] flex items-center justify-center"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-border/60 shadow-sm">
            <h3 className="font-display text-2xl text-navy">Appointment request</h3>
            <p className="text-sm text-charcoal/60 mt-1">
              Fill in the details and we'll confirm your slot on WhatsApp.
            </p>

            <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Mobile Number" required>
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
              <Field label="Preferred Date">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Preferred Time">
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Treatment" className="sm:col-span-2">
                <select
                  value={form.treatment}
                  onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                  className="input"
                >
                  <option value="">Select a treatment</option>
                  <option>General Consultation</option>
                  <option>Braces / Aligners</option>
                  <option>Teeth Cleaning</option>
                  <option>Root Canal</option>
                  <option>Dental Implant</option>
                  <option>Crowns / Bridges</option>
                  <option>Teeth Whitening</option>
                  <option>Wisdom Tooth</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Notes" className="sm:col-span-2">
                <textarea
                  rows={3}
                  maxLength={500}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="input resize-none"
                  placeholder="Anything we should know?"
                />
              </Field>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="btn-gold min-h-[44px]">
                  <Calendar className="h-4 w-4" /> Request Appointment
                </button>
                {sent && (
                  <span className="text-sm text-emerald-700">
                    ✓ Opening WhatsApp with your request…
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-elegant border border-border/60 bg-white">
          <div className="h-64 lg:h-full min-h-[300px]">
            <img 
              src="https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783106101/building_fiuhfo.png" 
              alt="Welcome to Dr. Prasanthi's Smile Care" 
              className="w-full h-full object-cover"
            />
          </div>
          <iframe
            title="Dr. Prasanthi's Smile Care location"
            src={MAPS_EMBED}
            className="w-full h-full min-h-[300px] border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.28em] text-gold/80">{title}</div>
        <div className="text-ivory/90 mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I need to book an appointment in advance?",
      a: "We recommend booking through our form, WhatsApp or by calling us so we can allocate the right time with Dr. Prasanthi. Walk-ins are welcome when slots are available.",
    },
    {
      q: "Is your clinic child-friendly?",
      a: "Yes. We routinely treat paediatric patients with a gentle, reassuring approach and age-appropriate communication.",
    },
    {
      q: "What sterilisation standards do you follow?",
      a: "We follow hospital-grade sterilisation with autoclaving of instruments, single-use disposables where applicable, and strict barrier protocols in every operatory.",
    },
    {
      q: "How much does a treatment cost?",
      a: "Costs vary based on your clinical needs. Dr. Prasanthi will share a transparent plan and estimate after a diagnostic consultation.",
    },
    {
      q: "Do you handle dental emergencies?",
      a: "Yes. For pain, trauma or swelling please call us — we prioritise emergency slots including Sundays on request.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <span className="gold-divider">Frequently Asked</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-navy">
            Answers to help you decide.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="border border-border/60 rounded-xl bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display text-lg text-navy">{f.q}</span>
                <span
                  className={`h-8 w-8 rounded-full bg-navy/5 flex items-center justify-center text-navy transition-transform ${
                    open === i ? "rotate-45 bg-gold text-navy" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-charcoal/75 text-sm leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

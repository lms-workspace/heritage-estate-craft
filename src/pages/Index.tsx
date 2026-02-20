import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-rv.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const trustStats = [
  "Mobile RV Detailing — We Come to You",
  "Material-Specific Process for Every Surface",
  "Middle Tennessee's Luxury RV Specialist",
  "Serving Nashville · Knoxville · Chattanooga",
];

const processSteps = [
  {
    num: "01",
    title: "Consultation & Assessment",
    desc: "We evaluate materials, condition, and usage to determine the appropriate level of care.",
  },
  {
    num: "02",
    title: "Tailored, Material-Specific Service",
    desc: "Every service is customized to the vehicle — no shortcuts, no generic processes.",
  },
  {
    num: "03",
    title: "Long-Term Protection",
    desc: "We finish with premium protective treatments that extend surface life and maintain value.",
  },
];

const galleryLabels = [
  "Oxidation Treatment",
  "Fiberglass Restoration",
  "Roof Rejuvenation",
  "Exterior Renewal",
];

const testimonials = [
  {
    quote: "Heritage transformed our coach. The attention to detail and professionalism exceeded every expectation.",
    name: "R. Mitchell",
    location: "Nashville, TN",
  },
  {
    quote: "Finally, a detailing service that treats our RV like the investment it is. Impeccable results every time.",
    name: "D. Warren",
    location: "Franklin, TN",
  },
  {
    quote: "Tom's craftsmanship is unmatched. Our Class A has never looked better — even compared to the day we bought it.",
    name: "S. Collins",
    location: "Murfreesboro, TN",
  },
];

const faqs = [
  {
    q: "Are you a mobile detailing company?",
    a: "Yes. Heritage RV Detailing is fully mobile. We deliver service on-site at homes, storage facilities, and private properties by appointment.",
  },
  {
    q: "How is pricing calculated?",
    a: "Most services are priced by linear foot to account for vehicle size, surface area, and time required. We provide clear pricing before any service begins.",
  },
  {
    q: "How long does an appointment take?",
    a: "Service time depends on vehicle size and condition. We schedule enough time to maintain quality — nothing rushed, nothing overlooked.",
  },
  {
    q: "Can you remove oxidation from fiberglass RVs?",
    a: "Yes. Our Ultimate Fiberglass Restoration is specifically designed for oxidized or dull fiberglass to restore clarity, color, and surface integrity.",
  },
  {
    q: "What should I do to prepare?",
    a: "We'll confirm access and the work area during scheduling. If your RV is in storage, we can coordinate entry with the facility.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Middle Tennessee and surrounding areas by appointment. Outside our core range? Request a consultation and we'll confirm availability.",
  },
];

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="relative container mx-auto px-4 md:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-parchment leading-tight mb-4">
              Where Your Investment Is Treated Like a Legacy
            </h1>
            <div className="w-16 h-0.5 bg-bronze mb-6" />
            <p className="font-body text-parchment/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Luxury mobile RV and motor coach detailing focused on preservation, craftsmanship, and long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-sm tracking-wide hover:bg-primary/90 transition-colors text-center"
              >
                Protect Your Investment
              </Link>
              <Link
                to="/services"
                className="border border-parchment/40 text-parchment font-body font-medium text-sm px-8 py-4 rounded-sm tracking-wide hover:bg-parchment/10 transition-colors text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-parchment/30 border-y border-secondary">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {trustStats.map((stat) => (
              <p key={stat} className="font-body text-sm text-foreground/70 tracking-wide">
                {stat}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
            Heritage RV Detailing provides luxury mobile RV detailing services designed to preserve, protect, and refine high-value recreational vehicles and motor coaches. Every service is delivered with meticulous attention to materials, disciplined craftsmanship, and a long-term view toward asset protection. This is estate-level care — never rushed, never compromised.
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">The Cost of Inattention</h2>
          <p className="font-body text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-10">
            High-value RVs are continuously exposed to UV radiation, environmental contaminants, and road film. Over time, this exposure accelerates oxidation, dulls finishes, and leads to premature wear that diminishes both appearance and resale value.
          </p>
          <Link
            to="/book"
            className="inline-block bg-charcoal text-parchment font-body font-medium text-sm px-8 py-4 rounded-sm tracking-wide hover:bg-charcoal/90 transition-colors"
          >
            Protect Your Investment
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Our Services</h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Signature Exterior Renewal"
              price="From $18/linear ft"
              tagline="Immaculate. Protected. Refined."
              cta="Restore Your RV"
              ctaLink="/services"
            />
            <ServiceCard
              title="Ultimate Fiberglass Restoration"
              price="From $22/linear ft"
              tagline="Bring the original beauty back."
              cta="Revive the Surface"
              ctaLink="/services"
            />
            <ServiceCard
              title="Luxe Roof Rejuvenation"
              price="From $120"
              tagline="Protection you don't see — performance you trust."
              cta="Preserve What Matters"
              ctaLink="/services"
            />
            <ServiceCard
              title="Essential Maintenance Wash"
              price="From $7/linear ft"
              tagline="Because excellence deserves consistency."
              cta="Maintain the Standard"
              ctaLink="/services"
            />
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-charcoal text-charcoal-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-parchment text-center mb-4">Our Process</h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.num} className="text-center">
                <span className="font-heading text-5xl text-bronze/30 block mb-4">{step.num}</span>
                <h3 className="font-heading text-xl text-parchment mb-3">{step.title}</h3>
                <p className="font-body text-sm text-parchment/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-charcoal/95 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-parchment text-center mb-4">
            Results speak louder than promises.
          </h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryLabels.map((label) => (
              <div
                key={label}
                className="aspect-[4/3] bg-charcoal border border-parchment/10 flex items-end p-4"
              >
                <span className="font-body text-xs text-bronze tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-block border border-parchment/30 text-parchment font-body font-medium text-sm px-8 py-3 rounded-sm tracking-wide hover:bg-parchment/10 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-parchment/20 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">What Our Clients Say</h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-8 border border-secondary">
                <p className="font-body text-sm text-foreground/80 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-body font-medium text-sm text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Frequently Asked Questions</h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-secondary px-6">
                <AccordionTrigger className="font-body text-sm font-medium text-foreground py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-8">Ready to Protect Your Investment?</h2>
          <Link
            to="/book"
            className="inline-block bg-charcoal text-parchment font-body font-medium text-sm px-10 py-4 rounded-sm tracking-wide hover:bg-charcoal/90 transition-colors"
          >
            Schedule Care
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;

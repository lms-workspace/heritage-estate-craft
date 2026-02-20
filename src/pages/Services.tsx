import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const services = [
  {
    title: "Signature Exterior Renewal",
    price: "From $18 per linear foot",
    tagline: "Immaculate. Protected. Refined.",
    cta: "Restore Your RV",
    description:
      "A premium exterior wash and decontamination treatment designed to remove road film, bug residue, and environmental buildup — finished with a high-grade polymer UV sealant to preserve finish and enhance long-term gloss.",
    includes: [
      "Full body hand wash (RV-safe soap)",
      "Bug & tar removal",
      "Exterior window cleaning",
      "Wheel cleaning & tire dressing",
      "High-grade UV protective sealant applied by hand or orbital",
      "Finished with fresh microfiber removal",
    ],
    idealFor:
      "Painted and fiberglass RVs needing UV defense and gloss enhancement. Vehicles between correction services.",
    interval: "Every 6–9 months",
  },
  {
    title: "Ultimate Fiberglass Restoration",
    price: "From $22 per linear foot",
    tagline: "Bring the original beauty back.",
    cta: "Revive the Surface",
    description:
      "Fiberglass exteriors are engineered for durability — but prolonged exposure to UV radiation and environmental fallout leads to oxidation, fading, and surface chalking. Our restoration process removes the oxidized layer through controlled polishing techniques, restores depth and clarity, and seals the surface with professional-grade UV protection.",
    includes: [
      "Comprehensive exterior deep clean",
      "Complete oxidation removal across all fiberglass surfaces",
      "Professional dual-action machine polishing",
      "Fiberglass-specific UV protective sealant",
      "Wheel cleaning & exterior window cleaning",
    ],
    idealFor:
      "Fiberglass RVs showing oxidation, fading, or chalking. Vehicles stored outdoors or exposed to prolonged sun.",
    interval: null,
  },
  {
    title: "Luxe Roof Rejuvenation",
    price: "From $120",
    tagline: "Protection you don't see — performance you trust.",
    cta: "Preserve What Matters",
    description:
      "The roof is the most UV-exposed surface on your RV and the most frequently overlooked. Our Luxe Roof Rejuvenation thoroughly cleans and conditions the entire roof system — rubber or fiberglass — and applies aerospace-grade UV treatment to every component.",
    includes: [
      "Full deep clean of roof, gutters, and all rooftop components",
      "UV treatment & conditioner applied to rubber or fiberglass roof",
      "Conditioning of plastic components, skylights, vents, and covers",
    ],
    idealFor: "RVs stored outdoors. Owners focused on preventive maintenance.",
    interval: "Every 6–12 months",
    note: "Add-on — requires minimum Essential Maintenance Wash",
  },
  {
    title: "Essential Maintenance Wash",
    price: "From $7 per linear foot",
    tagline: "Because excellence deserves consistency.",
    cta: "Maintain the Standard",
    description:
      "Designed to preserve, not strip, the work already invested in your RV. Our Essential Maintenance Wash provides a thorough, surface-safe clean that maintains existing protection while restoring a refined, road-ready appearance — without compromising paint, fiberglass, trim, or previously applied sealants.",
    includes: [
      "Roof rinse, slide roofs, gutters",
      "Full-body foam cannon wash with wax-safe soap and bug removal",
      "Spot-free water rinse",
      "Chamois drying — streak-free finish",
      "Exterior windows and windshield",
      "Wheel and tire cleaning, tire dressing, wheel shine",
    ],
    idealFor:
      "RVs with existing protection or recent detailing. Owners maintaining between extended trips or storage.",
    interval: "Every 1–2 months",
  },
];

const addons = [
  { name: "Roof Cleaning Add-On", price: "+$5/linear ft" },
  { name: "Awning Cleaning & Protection", price: "$99 per awning" },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-charcoal text-parchment py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Services</h1>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-8" />
          <p className="font-body text-parchment/70 text-base md:text-lg leading-relaxed">
            At Heritage, every service is delivered with meticulous attention to detail, premium products, and a disciplined approach that honors your investment. Whether you're preparing for your next voyage or protecting your RV during storage, our care ensures exceptional results and long-term peace of mind.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-parchment/10" : ""}`}
          >
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">{service.title}</h2>
                <span className="font-body font-medium text-bronze text-sm md:text-base whitespace-nowrap">
                  {service.price}
                </span>
              </div>
              <p className="font-body text-sm italic text-muted-foreground mb-6">{service.tagline}</p>
              {service.note && (
                <p className="font-body text-xs text-bronze mb-4 tracking-wide">{service.note}</p>
              )}
              <p className="font-body text-base text-foreground/80 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mb-8">
                <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80 font-body">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Ideal For
                  </h4>
                  <p className="font-body text-sm text-foreground/70">{service.idealFor}</p>
                </div>
                {service.interval && (
                  <div>
                    <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                      Recommended Interval
                    </h4>
                    <p className="font-body text-sm text-foreground/70">{service.interval}</p>
                  </div>
                )}
              </div>

              <Link
                to="/book"
                className="inline-block bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-3 rounded-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Add-ons */}
      <section className="bg-parchment/20 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="font-heading text-2xl mb-8">Add-On Services</h2>
          <div className="space-y-4">
            {addons.map((addon) => (
              <div key={addon.name} className="flex justify-between items-center py-3 border-b border-secondary">
                <span className="font-body text-sm text-foreground/80">{addon.name}</span>
                <span className="font-body text-sm text-bronze font-medium">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Every vehicle is different. Every service is tailored.
          </h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-8" />
          <Link
            to="/book"
            className="inline-block bg-charcoal text-parchment font-body font-medium text-sm px-10 py-4 rounded-sm tracking-wide hover:bg-charcoal/90 transition-colors"
          >
            Request a Service Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;

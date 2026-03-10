import { Shield, Clock, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    desc: "Process over pressure. Detail over shortcuts.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "On time, prepared, and fully equipped — every appointment.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear pricing. Honest assessments. No surprises.",
  },
  {
    icon: Shield,
    title: "Pride of Ownership",
    desc: "We treat every RV like it's our own.",
  },
];

const trustSignals = [
  "Licensed & Insured",
  "Registered Professional Operation",
  "Mobile — We Come to You",
  "Appointment-Only for Consistent Quality",
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-charcoal text-parchment py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Who We Are</h1>
          <div className="w-12 h-0.5 bg-bronze mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="space-y-6 font-body text-base text-foreground/80 leading-relaxed">
            <p>
              Heritage RV Detailing was founded on a simple principle: your investment deserves disciplined, preservation-focused care.
            </p>
            <p>
              We exist to serve RV owners, motor coach operators, and fleet managers who prioritize long-term value over cheap convenience. Every service is designed around the vehicle's specific materials, condition, and long-term performance — not a generic process applied to everything that rolls in.
            </p>
            <div className="border-l-2 border-bronze pl-6 py-2 my-8">
              <p className="font-heading text-lg md:text-xl text-foreground italic">
                Our Mission: To preserve, protect, and refine high-value RVs through meticulous, material-specific detailing delivered with professionalism, discretion, and respect for long-term value.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="mt-12">
            <img
              src="/erica-tom-family.jpg"
              alt="Erica and family — Heritage RV Detailing"
              className="w-full rounded-sm border border-secondary object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-parchment/10 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Our Philosophy</h2>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon size={28} className="text-bronze mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-lg text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-charcoal py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 text-parchment/80 font-body text-sm">
                <span className="text-bronze">✓</span>
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

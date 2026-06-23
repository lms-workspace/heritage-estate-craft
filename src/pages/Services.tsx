import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Sun } from "lucide-react";
import { heritageImages, servicePackages } from "@/lib/heritageMedia";

const addons = [
  { name: "Roof Cleaning Add-On", price: "+$5/linear ft" },
  { name: "Awning Cleaning & Protection", price: "$99 per awning" },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#191410]">
      <section className="relative overflow-hidden bg-[#161210] text-[#f8ecd9]">
        <img src={heritageImages.sideProfile} alt="Large RV sidewall ready for exterior detailing" className="absolute inset-0 h-full w-full object-cover opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161210] via-[#161210]/82 to-[#161210]/35" />
        <div className="container relative mx-auto px-6 py-28 md:py-36">
          <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">RV detailing services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">Service levels for road film, oxidation, roof grime, and finish protection.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f8ecd9]/72">Every RV is different. These packages preserve the existing Heritage pricing while making the scope clearer for fifth-wheels, travel trailers, and motorhomes.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {servicePackages.map((service) => (
            <article key={service.title} className="border border-[#8d542a]/25 bg-white/70 p-8 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d542a]">{service.price}</p>
                  <h2 className="mt-3 font-serif text-4xl leading-tight">{service.title}</h2>
                  <p className="mt-2 font-semibold text-[#233917]">{service.tagline}</p>
                </div>
                <Sparkles className="h-8 w-8 shrink-0 text-[#8d542a]" />
              </div>
              <p className="mt-5 leading-7 text-[#191410]/70">{service.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#191410]/72"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8d542a]" /> {item}</li>
                ))}
              </ul>
              <Link to="/book-now" className="mt-8 inline-flex items-center gap-2 bg-[#233917] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8ecd9] hover:bg-[#2f4a21]">
                Request this service <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#211a16] py-20 text-[#f8ecd9]">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">Add-ons</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Top-side and awning work when the RV needs more.</h2>
            <p className="mt-5 text-[#f8ecd9]/68">Roof surfaces, awnings, gutters, vents, and slide tops can be added when the job scope calls for it.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {addons.map((addon) => (
              <div key={addon.name} className="border border-[#c27c3e]/30 bg-[#161210] p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-[#d9b177]">{addon.price}</p>
                <h3 className="mt-3 font-serif text-3xl">{addon.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-3">
        {[
          { icon: Shield, title: "Protection-focused", body: "Wax, sealant, UV-minded treatment, and finish inspection are positioned as preservation — not a cosmetic afterthought." },
          { icon: Sun, title: "Built for outdoor storage", body: "Packages speak directly to oxidation, sun exposure, road film, roof grime, and the surfaces RV owners worry about." },
          { icon: Sparkles, title: "Real finish walkthroughs", body: "The updated site now uses real project videos and photos instead of generic placeholder imagery." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="border border-[#8d542a]/20 bg-white/60 p-7">
            <Icon className="h-8 w-8 text-[#8d542a]" />
            <h3 className="mt-4 font-serif text-3xl">{title}</h3>
            <p className="mt-3 leading-7 text-[#191410]/66">{body}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Play, Shield, Sparkles, Sun, Truck } from "lucide-react";
import { galleryItems, heritageImages, heritageVideos, servicePackages } from "@/lib/heritageMedia";

const processSteps = [
  "Inspect exterior materials, oxidation, trim, roof, wheels, and high-impact road grime areas.",
  "Clean with RV-safe methods around decals, windows, seals, vents, awnings, and hardware.",
  "Polish, wax, or protect the finish based on what the RV actually needs — not a one-size-fits-all wash.",
];

const proofPoints = [
  { icon: Truck, title: "Mobile RV care", body: "Built for fifth-wheels, travel trailers, and motorhomes across Middle Tennessee." },
  { icon: Sun, title: "UV-minded protection", body: "Exterior work focused on road film, oxidation, sun exposure, and finish preservation." },
  { icon: Shield, title: "Material-specific detail", body: "Fiberglass, metal, trim, plastic, decals, windows, wheels, and roof components are treated intentionally." },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-[#161210] text-[#f8ecd9]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={heritageImages.heroBackground} type="image/webp" />
            <img src={heritageImages.heroBackgroundJpg} alt="Fifth-wheel RV exterior ready for mobile detailing" className="h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#161210] via-[#161210]/78 to-[#161210]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-transparent to-transparent" />
        </div>

        <div className="container relative mx-auto grid min-h-[88vh] items-center gap-12 px-6 py-28 lg:grid-cols-[1.05fr_.75fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c27c3e]/40 bg-[#f8ecd9]/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-[#d9b177]">
              <Sparkles className="h-4 w-4" /> Premium mobile RV detailing
            </div>
            <h1 className="font-serif text-5xl leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
              Protect your RV before the road does damage.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f8ecd9]/78 md:text-xl">
              Heritage RV Detailing brings exterior cleaning, oxidation care, polishing, wax/sealant protection, roof attention, and wheel-to-front-cap detailing to RV owners across Middle Tennessee.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/book-now" className="inline-flex items-center justify-center gap-2 rounded-none bg-[#233917] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8ecd9] ring-1 ring-[#c27c3e]/60 transition hover:bg-[#2f4a21]">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center justify-center gap-2 rounded-none border border-[#f8ecd9]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8ecd9] transition hover:border-[#c27c3e] hover:text-[#d9b177]">
                View real work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#c27c3e]/20 blur-3xl" />
            <video className="relative aspect-[9/16] w-full rounded-[2rem] border border-[#c27c3e]/50 bg-black object-cover shadow-2xl shadow-black/50" src={heritageVideos.frontCapShort} poster={heritageVideos.frontCapPoster} muted autoPlay loop playsInline />
            <div className="absolute -bottom-6 left-6 right-6 border border-[#c27c3e]/40 bg-[#161210]/88 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d9b177]">Featured short</p>
              <p className="mt-2 text-sm text-[#f8ecd9]/78">A close-up fifth-wheel exterior clip showing real Heritage RV detailing work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c27c3e]/20 bg-[#211a16] py-8">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3">
          {proofPoints.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-[#d9b177]" />
              <div>
                <h2 className="font-serif text-2xl text-[#fff5e6]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#f8ecd9]/68">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-[.86fr_.74fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">Recent detail story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">A walkthrough that shows the work up close.</h2>
          <p className="mt-6 text-lg leading-8 text-[#f8ecd9]/72">
            Watch the real exterior surfaces, roof areas, wheels, plastics, and finish-care details that go into a Heritage RV service.
          </p>
          <div className="mt-8 space-y-4">
            {["Real fifth-wheel exterior footage", "Exterior, roof, wheel, trim, and finish details shown clearly", "Wax, UV protection, metal, plastics, wheels, and final detail cues covered"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-[#f8ecd9]/82">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d9b177]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md overflow-hidden border border-[#c27c3e]/35 bg-black shadow-2xl shadow-black/40">
          <video className="block aspect-[9/16] h-full w-full object-cover" src={heritageVideos.walkthrough} poster={heritageVideos.walkthroughPoster} controls playsInline preload="metadata" />
        </div>
      </section>

      <section className="bg-[#f4ead8] py-24 text-[#191410]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#8d542a]">Services</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Exterior packages for RVs that live outside.</h2>
            </div>
            <Link to="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#233917] hover:text-[#8d542a]">
              Compare services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicePackages.map((service) => (
              <article key={service.title} className="border border-[#8d542a]/22 bg-white/60 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d542a]">{service.price}</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{service.title}</h3>
                <p className="mt-3 text-sm font-semibold text-[#233917]">{service.tagline}</p>
                <p className="mt-4 text-sm leading-6 text-[#191410]/68">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item, index) => (
            <Link to="/gallery" key={item.title} className={`group overflow-hidden border border-[#c27c3e]/25 bg-[#211a16] ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d9b177]">{item.label}</p>
                <h3 className="mt-2 font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#f8ecd9]/64">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#211a16] py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">Process</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Not just a wash. A finish-preservation process.</h2>
            <p className="mt-6 flex items-center gap-2 text-[#f8ecd9]/66"><MapPin className="h-5 w-5 text-[#d9b177]" /> Middle Tennessee service area</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step} className="border border-[#c27c3e]/25 bg-[#161210] p-6">
                <span className="font-serif text-5xl text-[#d9b177]">0{index + 1}</span>
                <p className="mt-6 leading-7 text-[#f8ecd9]/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 text-center">
        <Play className="mx-auto mb-6 h-10 w-10 text-[#d9b177]" />
        <h2 className="mx-auto max-w-3xl font-serif text-4xl md:text-6xl">Ready to get your RV looking sharp again?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f8ecd9]/68">Send Heritage a few details about your RV, its length, current exterior condition, and where it is parked. We’ll help match the right service level.</p>
        <Link to="/book-now" className="mt-9 inline-flex items-center justify-center gap-2 bg-[#233917] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8ecd9] ring-1 ring-[#c27c3e]/60 hover:bg-[#2f4a21]">
          Start your quote <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
};

export default Index;

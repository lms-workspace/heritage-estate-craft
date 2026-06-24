import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Eye, Heart, Shield } from "lucide-react";
import { heritageImages } from "@/lib/heritageMedia";

const values = [
  {
    icon: Heart,
    title: "Family standard",
    desc: "A personal, owner-operated feel: careful work, clear expectations, and pride in the finished result.",
  },
  {
    icon: Clock,
    title: "Prepared appointments",
    desc: "Mobile RV detailing works best when access, water, timing, and scope are thought through before the job starts.",
  },
  {
    icon: Eye,
    title: "Honest assessment",
    desc: "Oxidation, roof grime, decals, trim, wheels, and plastics are evaluated as real RV surfaces — not generic wash items.",
  },
  {
    icon: Shield,
    title: "Finish preservation",
    desc: "The goal is a cleaner, sharper RV with protection-minded care for the surfaces that live outdoors.",
  },
];

const familyNotes = [
  "A family behind the brand, not a faceless wash crew.",
  "Mobile service built around RV owners, storage lots, homes, and trip prep.",
  "Premium exterior care built on clear scope, careful work, and straightforward communication.",
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#161210] text-[#f8ecd9]">
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-x-0 bottom-0 top-16 bg-[#161210] md:top-20">
          <img
            src="/erica-tom-family.jpg"
            alt="Outdoor family portrait of the family behind Heritage RV Detailing"
            className="h-full w-full object-cover opacity-78 md:object-contain"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161210]/92 via-[#161210]/66 to-[#161210]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-transparent to-transparent" />
        </div>
        <div className="container relative mx-auto grid min-h-[76vh] items-center gap-10 px-6 py-20 lg:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">About Heritage RV Detailing</p>
            <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">Family pride, brought to RV finish care.</h1>
            <p className="mt-6 text-lg leading-8 text-[#f8ecd9]/78">
              Heritage should feel personal because the work is personal. The family behind the brand sets the tone for careful mobile RV exterior detailing, clear communication, and preservation-minded service.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-[#233917] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8ecd9] ring-1 ring-[#c27c3e]/60 transition hover:bg-[#2f4a21]">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center justify-center gap-2 border border-[#f8ecd9]/25 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8ecd9] transition hover:border-[#c27c3e] hover:text-[#d9b177]">
                See real work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead8] py-20 text-[#191410] md:py-28">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#8d542a]">The story</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Built around trust before the first rinse.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#191410]/72 md:text-lg">
              <p>
                RV owners are trusting someone with a large, expensive vehicle that lives in sun, rain, road film, tree cover, storage lots, and long travel days. Heritage’s role is to make that process feel straightforward: inspect the condition, explain the scope, and do the work with care.
              </p>
              <p>
                The work is practical, but the standard is personal: make the scope clear, respect the vehicle, and leave owners with a sharper finish before the next trip or season.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {familyNotes.map((note) => (
                <div key={note} className="flex items-start gap-3 text-[#191410]/78">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8d542a]" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="relative shadow-xl">
              <img src={heritageImages.roofInspection} alt="Before roof detail showing RV top-side grime and inspection areas" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute left-4 top-4 bg-[#161210]/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f8ecd9] ring-1 ring-[#d9b177]/40">
                Before
              </figcaption>
            </figure>
            <figure className="relative shadow-xl">
              <img src={heritageImages.roofEquipment} alt="After roof detail showing cleaned RV roof equipment and fixtures" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute left-4 top-4 bg-[#233917]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f8ecd9] ring-1 ring-[#d9b177]/40">
                After
              </figcaption>
            </figure>
            <div className="border border-[#8d542a]/25 bg-white/70 p-6 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8d542a]">Before & after roof care</p>
              <p className="mt-3 text-sm leading-6 text-[#191410]/66">The dirty roof inspection view and cleaned roof detail show why top-side work matters: fixtures, trim, gutters, seams, and grime all affect long-term RV care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c27c3e]/20 bg-[#211a16] py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-[#d9b177]">Our philosophy</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Details matter because ownership matters.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-[#c27c3e]/25 bg-[#161210] p-6 text-center">
                <Icon className="mx-auto h-7 w-7 text-[#d9b177]" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-2xl text-[#fff5e6]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#f8ecd9]/66">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

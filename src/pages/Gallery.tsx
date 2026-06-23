import { Link } from "react-router-dom";
import { ArrowRight, Camera, Film } from "lucide-react";
import { galleryItems, heritageVideos } from "@/lib/heritageMedia";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-[#161210] text-[#f8ecd9]">
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#d9b177]"><Camera className="h-4 w-4" /> Real Heritage RV media</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">Exterior detailing that looks like actual work — because it is.</h1>
          <p className="mt-6 text-lg leading-8 text-[#f8ecd9]/70">
            These images come from the current Heritage RV media set: roof perspectives, wheel details, sidewall coverage, and the Salem Hemisphere fifth-wheel featured throughout the site refresh.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={item.title} className={`group overflow-hidden border border-[#c27c3e]/25 bg-[#211a16] ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className={`${item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden bg-black`}>
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading={index > 1 ? "lazy" : "eager"} />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d9b177]">{item.label}</p>
                <h2 className="mt-2 font-serif text-3xl leading-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#f8ecd9]/64">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c27c3e]/20 bg-[#211a16] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#d9b177]"><Film className="h-4 w-4" /> Video proof</p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">Two upgraded website videos.</h2>
            </div>
            <Link to="/book-now" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b177] hover:text-[#f8ecd9]">
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-[.82fr_.82fr]">
            <article className="overflow-hidden border border-[#c27c3e]/30 bg-black">
              <video src={heritageVideos.walkthrough} poster={heritageVideos.walkthroughPoster} controls preload="metadata" playsInline className="aspect-[9/16] w-full object-cover" />
              <div className="bg-[#161210] p-6"><h3 className="font-serif text-3xl">Walkthrough story</h3><p className="mt-2 text-sm leading-6 text-[#f8ecd9]/64">Real voice walkthrough with branded callouts and captions.</p></div>
            </article>
            <article className="overflow-hidden border border-[#c27c3e]/30 bg-black">
              <video src={heritageVideos.frontCapShort} poster={heritageVideos.frontCapPoster} controls preload="metadata" playsInline className="aspect-[9/16] w-full object-cover" />
              <div className="bg-[#161210] p-6"><h3 className="font-serif text-3xl">Vertical short</h3><p className="mt-2 text-sm leading-6 text-[#f8ecd9]/64">A polished mobile/social proof clip for front-cap and exterior care.</p></div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;

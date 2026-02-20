const galleryItems = [
  "Oxidation Treatment",
  "Fiberglass Restoration",
  "Roof Rejuvenation",
  "Exterior Renewal",
  "Full Detail",
  "Ceramic Coating",
  "Pre-Storage Prep",
  "Class A Restoration",
];

const Gallery = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-charcoal text-parchment py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Results speak louder than promises.</h1>
          <div className="w-12 h-0.5 bg-bronze mx-auto mb-8" />
          <p className="font-body text-parchment/70 text-base md:text-lg leading-relaxed">
            Each image represents a preserved investment and a client who can drive with confidence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-charcoal/95 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((label) => (
              <div
                key={label}
                className="aspect-[4/3] bg-charcoal border border-parchment/10 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-body text-xs text-bronze tracking-[0.15em] uppercase">{label}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-body text-parchment/20 text-xs tracking-widest uppercase">Before / After</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-parchment/40 text-sm font-body mt-10">
            Gallery photos coming soon. Contact us to see recent work.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Gallery;

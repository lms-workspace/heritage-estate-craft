import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceOptions = [
  "Signature Exterior Renewal",
  "Ultimate Fiberglass Restoration",
  "Luxe Roof Rejuvenation",
  "Essential Maintenance Wash",
];

const serviceAreaCities = [
  "Nashville", "Franklin", "Brentwood", "Murfreesboro",
  "Hendersonville", "Gallatin", "Lebanon", "Mt. Juliet",
  "Smyrna", "Spring Hill",
];

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    rvMake: "",
    rvModel: "",
    rvLength: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let errorMsg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          errorMsg = data.error || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-background border border-secondary font-body text-sm text-foreground px-4 py-3 rounded-sm focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-charcoal text-parchment py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Let's Protect What You've Invested In</h1>
          <div className="w-12 h-0.5 bg-bronze mx-auto" />
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <h2 className="font-heading text-2xl text-foreground mb-4">Thank You</h2>
                  <p className="font-body text-muted-foreground">
                    Tom personally responds to every inquiry within 24 hours. Check your inbox — a confirmation has been sent to {formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Name</label>
                      <input name="name" required value={formData.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Email</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Phone</label>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Zip Code</label>
                      <input name="zipCode" value={formData.zipCode} onChange={handleChange} className={inputClass} placeholder="e.g., 37201" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">RV Make</label>
                      <input name="rvMake" value={formData.rvMake} onChange={handleChange} className={inputClass} placeholder="e.g., Airstream, Tiffin" />
                    </div>
                    <div>
                      <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">RV Model</label>
                      <input name="rvModel" value={formData.rvModel} onChange={handleChange} className={inputClass} placeholder="e.g., Allegro, Ventana" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">RV Length</label>
                    <input name="rvLength" value={formData.rvLength} onChange={handleChange} className={inputClass} placeholder="e.g., 38 ft" />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Service Interested In</label>
                    <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Message</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={inputClass} />
                  </div>
                  {error && (
                    <p className="font-body text-sm text-red-500">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-primary-foreground font-body font-medium text-sm px-10 py-4 rounded-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Request a Quote"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</h3>
                <div className="space-y-4">
                  <a href="tel:6166447135" className="flex items-center gap-3 text-foreground/80 font-body text-sm hover:text-foreground transition-colors">
                    <Phone size={14} className="text-bronze" /> 616-644-7135
                  </a>
                  <a href="mailto:tomgascon@heritagervdetailing.com" className="flex items-center gap-3 text-foreground/80 font-body text-sm hover:text-foreground transition-colors">
                    <Mail size={14} className="text-bronze" /> tomgascon@heritagervdetailing.com
                  </a>
                  <div className="flex items-center gap-3 text-foreground/80 font-body text-sm">
                    <MapPin size={14} className="text-bronze" /> Middle Tennessee
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80 font-body text-sm">
                    <Clock size={14} className="text-bronze" /> Responds within 24 hours
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Service Area</h3>
                <div className="mb-4 rounded-sm overflow-hidden border border-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d782000!2d-86.7816!3d36.1627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Heritage RV Detailing Service Area — Middle Tennessee"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreaCities.map((city) => (
                    <span key={city} className="font-body text-xs text-muted-foreground bg-parchment/20 px-3 py-1 rounded-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-secondary pt-6">
                <p className="font-body text-sm text-foreground/70 italic">
                  Tom personally responds to every inquiry within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookNow;

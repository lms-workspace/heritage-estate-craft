import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-parchment">Heritage RV Detailing</h3>
            <p className="font-body text-sm text-parchment/50 leading-relaxed italic">
              Quiet luxury. Disciplined craftsmanship. Long-term care.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40 mb-4">Contact</h4>
            <a href="tel:6166447135" className="flex min-h-11 items-center gap-3 text-sm text-parchment/70 transition-colors hover:text-parchment">
              <Phone size={14} className="text-bronze" /> 616-644-7135
            </a>
            <a href="mailto:tomgascon@heritagervdetailing.com" className="flex min-h-11 items-center gap-3 text-sm text-parchment/70 transition-colors hover:text-parchment">
              <Mail size={14} className="text-bronze" /> tomgascon@heritagervdetailing.com
            </a>
            <div className="flex items-center gap-3 text-parchment/70 text-sm">
              <MapPin size={14} className="text-bronze" /> Middle Tennessee
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40 mb-4">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "About", to: "/about" },
                { label: "Book Now", to: "/book" },
                { label: "Privacy", to: "/privacy" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="block min-h-11 py-3 text-sm text-parchment/60 transition-colors hover:text-parchment"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-parchment/30 text-xs font-body">
              © {new Date().getFullYear()} Heritage RV Detailing. All rights reserved.
            </p>
            <p className="text-[10px] text-parchment/24">
              Hero RV photo adapted from <a href="https://commons.wikimedia.org/wiki/File:Starcraft_RV_-_GSL_Fifth_Wheel.jpg" className="underline decoration-parchment/20 underline-offset-2 hover:text-parchment/45">Anshamblen15</a> / <a href="https://creativecommons.org/licenses/by-sa/4.0" className="underline decoration-parchment/20 underline-offset-2 hover:text-parchment/45">CC BY-SA 4.0</a>
            </p>
          </div>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "Google"].map((s) => (
              <span key={s} className="text-parchment/30 hover:text-parchment/60 text-xs cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

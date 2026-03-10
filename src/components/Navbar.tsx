import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-parchment/10">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-xl md:text-2xl text-parchment tracking-wide">
          Heritage RV Detailing
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-parchment"
                  : "text-parchment/60 hover:text-parchment"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-primary text-primary-foreground font-body font-medium text-sm px-6 py-2.5 rounded-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-parchment p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-parchment/10 py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block font-body text-sm tracking-widest uppercase text-parchment/70 hover:text-parchment transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-primary-foreground font-body font-medium text-sm px-6 py-3 rounded-sm tracking-wide mt-4"
          >
            Book Now
          </Link>
          <a href="tel:6166447135" className="flex items-center gap-2 text-parchment/60 text-sm mt-2">
            <Phone size={14} /> 616-644-7135
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

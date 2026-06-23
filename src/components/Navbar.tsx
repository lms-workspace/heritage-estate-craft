import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-parchment/10 bg-charcoal/92 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
        <Link to="/" onClick={closeMenu} className="flex min-h-11 items-center font-heading text-lg tracking-wide text-parchment transition-colors duration-300 hover:text-bronze sm:text-xl md:text-2xl">
          Heritage RV Detailing
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-body text-sm uppercase tracking-widest transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-bronze after:transition-all after:duration-300 ${
                  active
                    ? "text-parchment after:w-full"
                    : "text-parchment/62 after:w-0 hover:text-parchment hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/book"
            className="rounded-sm bg-primary px-6 py-2.5 font-body text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-sm text-parchment transition-colors duration-300 hover:bg-parchment/10 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-50 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-parchment/10 bg-[#161210] px-6 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="space-y-2 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block min-h-11 py-3 font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.to ? "text-[#d9b177]" : "text-[#f8ecd9] hover:text-[#d9b177]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={closeMenu}
            className="mt-5 block min-h-12 rounded-sm bg-primary px-6 py-3.5 text-center font-body text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
          >
            Book Now
          </Link>
          <a href="tel:6166447135" className="mt-4 flex min-h-11 items-center gap-2 rounded-sm border border-parchment/20 px-4 text-sm text-[#f8ecd9] transition-colors duration-300 hover:border-[#d9b177]/60 hover:text-[#d9b177]">
            <Phone size={14} /> 616-644-7135
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

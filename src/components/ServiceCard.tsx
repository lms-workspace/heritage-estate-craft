import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  price: string;
  tagline: string;
  cta: string;
  ctaLink?: string;
}

const ServiceCard = ({ title, price, tagline, cta, ctaLink = "/book" }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (ctaLink.includes("#")) {
      const [path, hash] = ctaLink.split("#");
      navigate(path);
      // Wait for navigation then scroll to anchor
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      navigate(ctaLink);
    }
  };

  return (
    <div className="bg-background border border-secondary p-8 flex flex-col justify-between h-full group hover:border-bronze/40 transition-colors duration-300">
      <div>
        <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{title}</h3>
        <p className="text-bronze font-body font-medium text-sm mb-3">{price}</p>
        <p className="text-muted-foreground font-body text-sm leading-relaxed italic">{tagline}</p>
      </div>
      <button
        onClick={handleClick}
        className="mt-6 inline-block text-center bg-primary text-primary-foreground font-body font-medium text-sm px-6 py-3 rounded-sm tracking-wide hover:bg-primary/90 transition-colors cursor-pointer"
      >
        {cta}
      </button>
    </div>
  );
};

export default ServiceCard;

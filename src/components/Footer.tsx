import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-8 py-16 lg:pl-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">Labi Iris</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              The art of the flower, delivered in Prishtina. Modern arrangements crafted with care and intention.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "Shop", path: "/shop" },
                { label: "Weddings & Events", path: "/events" },
                { label: "Our Story", path: "/story" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Be the First to See New Collections
            </h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Labi Iris Flower Shop. Prishtinë, Kosovë.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

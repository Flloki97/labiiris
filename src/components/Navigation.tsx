import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Weddings & Events", path: "/events" },
  { label: "Our Story", path: "/story" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: vertical left nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between z-50 bg-background/80 backdrop-blur-sm border-r border-border px-8 py-12">
        <div>
          <Link to="/" className="font-serif text-2xl font-medium tracking-wide text-foreground">
            Labi Iris
          </Link>
          <ul className="mt-16 space-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`font-serif text-sm tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-sans text-xs text-muted-foreground tracking-wide">
          Prishtinë, Kosovë
        </p>
      </nav>

      {/* Mobile: top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-xl font-medium tracking-wide text-foreground">
            Labi Iris
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="px-6 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-serif text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

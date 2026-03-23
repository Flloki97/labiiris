import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-arrangement.jpg";
import arrangement1 from "@/assets/arrangement-1.jpg";
import arrangement2 from "@/assets/arrangement-2.jpg";
import arrangement3 from "@/assets/arrangement-3.jpg";
import arrangement4 from "@/assets/arrangement-4.jpg";
import eventsHero from "@/assets/events-hero.jpg";

const featured = [
  { name: "Autumn Reverie", price: "€45", image: arrangement1, occasion: "Anniversary" },
  { name: "Pure Simplicity", price: "€35", image: arrangement2, occasion: "Thank You" },
  { name: "Garden Romance", price: "€85", image: arrangement3, occasion: "Wedding" },
  { name: "Sun & Meadow", price: "€40", image: arrangement4, occasion: "Birthday" },
];

const steps = [
  { number: "01", title: "Select Your Arrangement", description: "Choose from our curated collection of fresh, modern designs. All bouquets shown are available for immediate delivery." },
  { number: "02", title: "Confirm Your Details", description: "Enter your Prishtina address and add a personal note at checkout. Our system automatically confirms your eligibility for express service." },
  { number: "03", title: "Delivered in Under an Hour", description: "Your order is crafted instantly and dispatched with our dedicated courier. A moment of beauty, arriving at your door." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant floral arrangement by Labi Iris"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>
        <div className="relative z-10 px-8 lg:px-20 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6 animate-fade-up">
            The Art of the Flower, Delivered in Prishtina.
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up undertitle" style={{ animationDelay: "0.2s" }}>
            More than flowers. A gesture of modern elegance, crafted and delivered to your door.
          </p>
          <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/shop"
              className="px-8 py-3 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Events
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Arrangements */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Curated Arrangements
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-12 max-w-md">
            Each bouquet is a composition—designed to speak where words fall short.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((item) => (
              <Link to="/shop" key={item.name} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:saturate-[1.05]"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {item.occasion}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="font-serif text-sm text-muted-foreground mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Instant Elegance
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-16">
            Prishtina in Minutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-serif text-4xl text-accent/60 font-light">{step.number}</span>
                <h3 className="font-serif text-xl text-foreground mt-4 mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto">
            <img
              src={eventsHero}
              alt="Luxury wedding floral installation by Labi Iris"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-2 flex items-center px-8 lg:px-16 py-16">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Weddings & Corporate
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Unforgettable Moments, Dressed in Flowers.
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                From the quiet intimacy of a wedding vow to the grand statement of a corporate gala, 
                flowers articulate what words cannot. We partner with discerning clients to translate 
                your vision into living art—managing everything from concept to installation.
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Plan Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

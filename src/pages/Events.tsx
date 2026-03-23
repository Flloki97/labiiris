import Layout from "@/components/Layout";
import eventsHero from "@/assets/events-hero.jpg";
import arrangement3 from "@/assets/arrangement-3.jpg";

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <img
          src={eventsHero}
          alt="Luxury floral installation by Labi Iris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 px-8 lg:px-20 pb-16 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-primary-foreground mb-4">
            Weddings & Events
          </h1>
          <p className="font-sans text-base text-primary-foreground/80">
            Unforgettable moments, dressed in flowers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Process</p>
              <h2 className="font-serif text-3xl font-medium text-foreground mb-6">
                From Vision to Living Art
              </h2>
              <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                <p>
                  From the quiet intimacy of a wedding vow to the grand statement of a corporate gala, 
                  flowers articulate what words cannot. At Labi Iris, we partner with discerning clients to 
                  translate your vision into living art.
                </p>
                <p>
                  Our design process is collaborative and meticulous, ensuring every petal and stem 
                  contributes to an atmosphere of refined elegance. We manage everything from initial 
                  concept to on-site installation, allowing you to focus on your moment, knowing the 
                  beauty is in expert hands.
                </p>
                <p>Let's create something unforgettable together.</p>
              </div>
              <a
                href="mailto:events@Labi Iris.ks"
                className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
              >
                Inquire Now
              </a>
            </div>
            <div className="lg:col-span-2">
              <img
                src={arrangement3}
                alt="Wedding centerpiece by Labi Iris"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

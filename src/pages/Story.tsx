import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-arrangement.jpg";

const Story = () => {
  return (
    <Layout>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
            Where Modern Elegance Blooms.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 font-sans text-sm text-muted-foreground leading-relaxed">
              <p>
                Labi Iris was born from a simple belief: that flowers are not mere decoration, but a 
                language unto themselves—capable of conveying emotions that words often cannot reach.
              </p>
              <p>
                Based in the heart of Prishtina, we approach each arrangement as an act of composition. 
                Every stem is chosen with intention, every palette considered against the moment it's 
                meant to honor. Whether it's a quiet gesture of sympathy or a grand celebration of love, 
                we believe the beauty should feel effortless and true.
              </p>
              <p>
                Our commitment to freshness, artistry, and reliability has earned us the trust of 
                Prishtina's most discerning clients. We don't just deliver flowers—we deliver feeling.
              </p>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Labi Iris studio arrangement"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;

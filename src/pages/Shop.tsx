import { useState } from "react";
import Layout from "@/components/Layout";
import arrangement1 from "@/assets/arrangement-1.jpg";
import arrangement2 from "@/assets/arrangement-2.jpg";
import arrangement3 from "@/assets/arrangement-3.jpg";
import arrangement4 from "@/assets/arrangement-4.jpg";

const occasions = ["All", "Birthday", "Anniversary", "Thank You", "Sympathy", "Wedding"];

const products = [
  { id: 1, name: "Autumn Reverie", price: 45, image: arrangement1, occasion: "Anniversary" },
  { id: 2, name: "Pure Simplicity", price: 35, image: arrangement2, occasion: "Thank You" },
  { id: 3, name: "Garden Romance", price: 85, image: arrangement3, occasion: "Wedding" },
  { id: 4, name: "Sun & Meadow", price: 40, image: arrangement4, occasion: "Birthday" },
  { id: 5, name: "Quiet Sympathy", price: 50, image: arrangement2, occasion: "Sympathy" },
  { id: 6, name: "Celebration Bloom", price: 55, image: arrangement1, occasion: "Birthday" },
];

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? products : products.filter((p) => p.occasion === filter);

  return (
    <Layout>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Shop by Occasion
          </h1>
          <p className="font-sans text-sm text-muted-foreground mb-12 max-w-md">
            Every occasion deserves its own bloom. Find the perfect arrangement.
          </p>

          {/* Occasion Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {occasions.map((occ) => (
              <button
                key={occ}
                onClick={() => setFilter(occ)}
                className={`px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-colors duration-300 ${
                  filter === occ
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {occ}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:saturate-[1.05]"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {product.occasion}
                </p>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="font-serif text-base text-foreground">€{product.price}</span>
                </div>
                <button className="mt-4 w-full py-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;

import Layout from "@/components/Layout";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-16">
            Contact & Delivery
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">Visit Us</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Rruga Qamil Hoxha, Nr. 40<br />
                    Prishtinë 10000, Kosovë
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">Hours & Delivery</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Mon–Sat: 8:00 – 20:00<br />
                    Sunday: 10:00 – 16:00<br /><br />
                    Same-day delivery within Prishtina.<br />
                    ASAP delivery available (under 1 hour).
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">Call</h3>
                  <p className="font-sans text-sm text-muted-foreground">+383 44 123 456</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">Email</h3>
                  <p className="font-sans text-sm text-muted-foreground">hello@labiiris.ks</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase hover:bg-accent transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

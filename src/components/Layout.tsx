import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="lg:pl-56 pt-16 lg:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

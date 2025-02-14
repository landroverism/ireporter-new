
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BaseLayoutProps {
  children: ReactNode;
  user?: any;
}

const BaseLayout = ({ children, user }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
      <main className="flex-grow container mx-auto px-4 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;

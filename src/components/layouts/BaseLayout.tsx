
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BaseLayoutProps {
  children: ReactNode;
  user?: any; // Add this line to fix the typing error
}

const BaseLayout = ({ children, user }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;

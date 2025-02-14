
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r) => { 
      if (r.ok) {
        setUser(null);
      }
    });
  };

  const NavLink = ({ to, onClick, children }: { to: string; onClick?: () => void; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg",
        "hover:bg-red-50",
        location.pathname === to && "text-primary font-semibold"
      )}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <AlertTriangle className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl text-primary">
              iReporter
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <NavLink to="/profile">{user.username}'s Profile</NavLink>
                <NavLink to="/user-landing">Raise an Issue</NavLink>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/" onClick={() => window.location.href = "#how-it-works"}>
                  How it works
                </NavLink>
                <NavLink to="/" onClick={() => window.location.href = "#recent-reports"}>
                  Recent Reports
                </NavLink>
                <Button asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b animate-slide-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {user ? (
              <>
                <NavLink to="/profile">{user.username}'s Profile</NavLink>
                <NavLink to="/user-landing">Raise an Issue</NavLink>
                <Button
                  onClick={handleLogout}
                  className="w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <NavLink to="/" onClick={() => {
                    window.location.href = "#how-it-works";
                    setIsMenuOpen(false);
                  }}>
                    How it works
                  </NavLink>
                  <NavLink to="/" onClick={() => {
                    window.location.href = "#recent-reports";
                    setIsMenuOpen(false);
                  }}>
                    Recent Reports
                  </NavLink>
                  <Button asChild className="w-full">
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

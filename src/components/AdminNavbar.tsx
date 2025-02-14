
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AlertTriangle, LayoutDashboard, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r) => { 
      if (r.ok) {
        setUser(null);
      }
    });
  };

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <Link
      to={to}
      className={cn(
        "flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors",
        "px-4 py-2 rounded-lg hover:bg-red-50"
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
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
              iReporter Admin
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/dashboard" icon={LayoutDashboard}>
              Dashboard
            </NavLink>
            <NavLink to="/users" icon={Users}>
              Users
            </NavLink>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

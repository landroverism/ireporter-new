
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserLanding from "./pages/UserLanding";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import UsersList from "./pages/UsersList";
import NotFound from "./pages/NotFound";
import NotAuthorized from "./pages/NotAuthorized";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index user={user} />} />
            <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/admin/login" element={<SignIn onLogin={handleLogin} is_admin />} />
            <Route path="/get-started" element={<SignUp onLogin={handleLogin} />} />
            <Route 
              path="/user-landing" 
              element={
                user ? <UserLanding user={user} /> : <NotAuthorized />
              } 
            />
            <Route 
              path="/profile" 
              element={
                user ? <Profile user={user} /> : <NotAuthorized />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                user?.is_admin ? <AdminDashboard user={user} /> : <NotAuthorized />
              } 
            />
            <Route 
              path="/users" 
              element={
                user?.is_admin ? <UsersList user={user} /> : <NotAuthorized />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

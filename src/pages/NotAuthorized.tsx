
import { AlertOctagon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8 max-w-lg mx-auto">
        <div className="flex justify-center">
          <AlertOctagon className="w-20 h-20 text-primary animate-bounce-subtle" />
        </div>
        <h1 className="text-4xl font-display font-bold text-gray-900">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600">
          You need to be logged in to access this page. Please sign in to continue.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;


import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8 max-w-lg mx-auto">
        <div className="flex justify-center">
          <AlertCircle className="w-20 h-20 text-primary animate-bounce-subtle" />
        </div>
        <h1 className="text-4xl font-display font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Sorry, we can't find that page. You'll find loads to explore on the home page.
        </p>
        <Button asChild size="lg" className="animate-fade-in">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

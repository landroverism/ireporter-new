
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const SignUpHeader = () => {
  return (
    <div className="text-center">
      <Link to="/" className="inline-flex items-center space-x-2">
        <AlertTriangle className="h-6 w-6 text-primary" />
        <span className="text-2xl font-bold text-gray-900 font-display">
          iReporter
        </span>
      </Link>
      <h2 className="mt-6 text-3xl font-bold text-gray-900">
        Create your account
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Join iReporter to start making a difference
      </p>
    </div>
  );
};

export default SignUpHeader;

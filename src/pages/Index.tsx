
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BaseLayout from "@/components/layouts/BaseLayout";
import { AlertTriangle, Camera, MapPin, UserCheck } from "lucide-react";

interface IndexProps {
  user?: any;
}

const Index = ({ user }: IndexProps) => {
  return (
    <BaseLayout user={user}>
      <div className="py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
            Report Incidents.{" "}
            <span className="text-primary">Make a Difference.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            iReporter enables citizens to bring any form of corruption or issues
            requiring government intervention to the notice of appropriate authorities.
          </p>
          <div className="flex justify-center gap-4">
            {user ? (
              <Button asChild size="lg">
                <Link to="/user-landing">Report an Incident</Link>
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link to="/get-started">Get Started</Link>
              </Button>
            )}
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="space-y-12">
          <h2 className="text-3xl font-display font-bold text-center text-gray-900">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <UserCheck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-600">
                Create your iReporter account to start making reports
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Camera className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Record Evidence</h3>
              <p className="text-gray-600">
                Capture photos or videos of the incident
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mark Location</h3>
              <p className="text-gray-600">
                Add the location and submit your report
              </p>
            </div>
          </div>
        </section>

        {/* Recent Reports Section */}
        <section id="recent-reports" className="space-y-12">
          <h2 className="text-3xl font-display font-bold text-center text-gray-900">
            Recent Reports
          </h2>
          {/* We'll implement the reports carousel in the next iteration */}
          <div className="text-center">
            <Button asChild>
              <Link to={user ? "/user-landing" : "/get-started"}>
                Share Your Story
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};

export default Index;

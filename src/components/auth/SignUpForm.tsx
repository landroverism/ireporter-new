
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Mail, Lock, User, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import FormErrors from "./FormErrors";
import FormInput from "./FormInput";

interface SignUpFormProps {
  onLogin: (user: any) => void;
}

const SignUpForm = ({ onLogin }: SignUpFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    if (password !== passwordConfirmation) {
      setErrors(["Passwords do not match"]);
      setIsLoading(false);
      return;
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setErrors([authError.message]);
        toast({
          variant: "destructive",
          title: "Error",
          description: authError.message,
        });
        return;
      }

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              username: name,
              phone_number: phoneNumber,
              is_admin: false,
            }
          ]);

        if (profileError) {
          console.error("Profile creation error:", profileError);
          setErrors([profileError.message]);
          return;
        }

        const user = {
          ...authData.user,
          username: name,
          phone_number: phoneNumber,
          is_admin: false,
        };

        toast({
          title: "Account created!",
          description: "Welcome to iReporter. You can now start reporting incidents.",
        });

        onLogin(user);
        navigate("/user-landing");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrors(["An unexpected error occurred"]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <FormInput
          id="name"
          type="text"
          label="Full Name"
          icon={<User className="h-5 w-5 text-gray-400" />}
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <FormInput
          id="email"
          type="email"
          label="Email address"
          icon={<Mail className="h-5 w-5 text-gray-400" />}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormInput
          id="phone"
          type="tel"
          label="Phone Number"
          icon={<Phone className="h-5 w-5 text-gray-400" />}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <FormInput
          id="password"
          type="password"
          label="Password"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <FormInput
          id="password_confirmation"
          type="password"
          label="Confirm Password"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          placeholder="Confirm your password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
      </div>

      {errors.length > 0 && <FormErrors errors={errors} />}

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Create account"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary hover:text-primary/80"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;

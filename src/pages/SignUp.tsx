
import SignUpHeader from "@/components/auth/SignUpHeader";
import SignUpForm from "@/components/auth/SignUpForm";

interface SignUpProps {
  onLogin: (user: any) => void;
}

const SignUp = ({ onLogin }: SignUpProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <SignUpHeader />
        <SignUpForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default SignUp;


import { AlertTriangle } from "lucide-react";

interface FormErrorsProps {
  errors: string[];
}

const FormErrors = ({ errors }: FormErrorsProps) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There were errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul className="list-disc pl-5 space-y-1">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormErrors;


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

const FormInput = ({ label, icon, id, ...props }: FormInputProps) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <Input
          id={id}
          className="pl-10"
          {...props}
        />
      </div>
    </div>
  );
};

export default FormInput;

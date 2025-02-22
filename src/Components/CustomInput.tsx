import { FC } from "react";

interface CustomInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  rest?: any;
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  type = "text",
  placeholder = "",
  error,
  className = "",
  ...rest
}) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default CustomInput;

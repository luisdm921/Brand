import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600",
    secondary: "bg-slate-800 text-white hover:bg-slate-900",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    ghost: "text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const Badge = ({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) => {
  const variants = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
    accent: "bg-accent-100 text-accent-700",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

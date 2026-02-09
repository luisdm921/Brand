import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = true }: CardProps) => {
  const baseStyles = "bg-white rounded-3xl shadow-lg transition-all";
  const hoverStyles = hover ? "hover:shadow-2xl hover:-translate-y-2" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
